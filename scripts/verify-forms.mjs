#!/usr/bin/env node
/**
 * Verifies every Google Form rendered into output/site against the live form.
 *
 * Catches the class of bug that silently killed contact submissions in July 2026:
 * the site posted values Google considered invalid (an empty string, or an option
 * that was not a real choice), Google rejected the WHOLE response with a 400, and
 * `mode: 'no-cors'` hid the failure — the page still showed the success message.
 *
 * Checks, per form found in the built HTML:
 *   1. every entry ID the page submits exists on the live form
 *   2. every required question on the live form is present on the page
 *   3. for choice questions (radio/dropdown/checkbox), every value the page can
 *      submit is an accepted choice
 *   4. no field can submit an empty value to a choice question
 *
 * Deliberately does NOT post to the form — that would write junk rows into the
 * response spreadsheet on every build. Schema validation catches the same bugs.
 *
 * Network failures are a warning, not an error, so an offline build still works.
 * Exit 1 on any validation failure. Set FORMS_STRICT=1 to fail on network errors.
 */

import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const SITE_DIR = 'output/site';
const CHOICE_TYPES = new Set([2, 3, 4]); // radio, dropdown, checkbox
const TYPE_NAMES = { 0: 'short text', 1: 'paragraph', 2: 'radio', 3: 'dropdown', 4: 'checkbox' };

const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const dim = (s) => `\x1b[90m${s}\x1b[0m`;

/** Walk a directory tree, yielding every .html file. */
async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

/**
 * Extract the JSON array assigned to FB_PUBLIC_LOAD_DATA_ by scanning for the
 * matching bracket — the value contains nested brackets and quoted strings, so a
 * regex is not reliable here.
 */
function extractLoadData(html) {
  const marker = html.indexOf('FB_PUBLIC_LOAD_DATA_');
  if (marker === -1) return null;
  const start = html.indexOf('[', marker);
  if (start === -1) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = start; i < html.length; i++) {
    const c = html[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (c === '\\') escaped = true;
      else if (c === '"') inString = false;
      continue;
    }
    if (c === '"') inString = true;
    else if (c === '[') depth++;
    else if (c === ']' && --depth === 0) {
      try {
        return JSON.parse(html.slice(start, i + 1));
      } catch {
        return null;
      }
    }
  }
  return null;
}

/** Fetch a form's live schema: Map of entry ID -> { title, type, required, options }. */
async function fetchFormSchema(formId, attempts = 3) {
  const url = `https://docs.google.com/forms/d/e/${formId}/viewform`;

  let res;
  for (let attempt = 1; ; attempt++) {
    try {
      res = await fetch(url, { redirect: 'follow' });
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
      break;
    } catch (err) {
      // Strict mode makes this deploy-blocking, so absorb transient network flake.
      if (attempt >= attempts) throw err;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }

  const data = extractLoadData(await res.text());
  if (!data) throw new Error(`could not parse form definition for ${formId}`);

  const questions = new Map();
  for (const item of data[1]?.[1] ?? []) {
    const [, title, , type, entries] = item;
    for (const entry of entries ?? []) {
      const [id, options, required] = entry;
      questions.set(`entry.${id}`, {
        title,
        type,
        required: Boolean(required),
        options: options ? options.map((o) => o[0]) : null,
      });
    }
  }
  if (questions.size === 0) throw new Error(`form ${formId} exposed no questions`);
  return questions;
}

/** Pull each rendered form out of a built page: its form ID and submittable fields. */
function parseRenderedForms(html) {
  const formIds = [
    ...new Set(
      [...html.matchAll(/forms\/d\/e\/([\w-]+)\/formResponse/g)].map((m) => m[1]),
    ),
  ];
  if (formIds.length === 0) return [];

  const fields = [];
  // <select> first, so its data-gf-entry isn't also matched as a bare input below.
  const selects = [...html.matchAll(/<select\b[^>]*data-gf-entry="([^"]+)"[^>]*>([\s\S]*?)<\/select>/g)];
  for (const [, entry, body] of selects) {
    // A `disabled` placeholder is the select's initial value but cannot be chosen,
    // and the macro's runtime guard drops empty values before posting — so it is
    // not a candidate. That guard is itself verified below; without it, an
    // untouched placeholder would post "" and Google would reject the response.
    const submittable = [...body.matchAll(/<option\b([^>]*)>/g)]
      .filter((m) => !/\bdisabled\b/.test(m[1]))
      .map((m) => /\bvalue="([^"]*)"/.exec(m[1])?.[1] ?? '');
    fields.push({ entry, kind: 'select', submittable });
  }

  const selectEntries = new Set(fields.map((f) => f.entry));
  for (const m of html.matchAll(/<(input|textarea)\b[^>]*data-gf-entry="([^"]+)"/g)) {
    if (!selectEntries.has(m[2])) fields.push({ entry: m[2], kind: m[1] });
  }

  // The submit handler must drop empty values; the checks below assume it.
  const hasEmptyGuard = /if\s*\(!el\.value\)\s*return;/.test(html);

  return formIds.map((formId) => ({ formId, fields, hasEmptyGuard }));
}

const problems = [];
const warnings = [];

let pages;
try {
  pages = [];
  for await (const file of htmlFiles(SITE_DIR)) pages.push(file);
} catch (err) {
  console.error(red(`✗ cannot read ${SITE_DIR} — run the build first`), dim(`(${err.message})`));
  process.exit(1);
}

// Group pages by form so each live form is fetched once.
const byForm = new Map();
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  for (const { formId, fields, hasEmptyGuard } of parseRenderedForms(html)) {
    if (!byForm.has(formId)) byForm.set(formId, []);
    byForm.get(formId).push({ file: relative('.', file), fields, hasEmptyGuard });
  }
}

if (byForm.size === 0) {
  console.log(dim('No Google Forms found in the built site — nothing to verify.'));
  process.exit(0);
}

for (const [formId, usages] of byForm) {
  let schema;
  try {
    schema = await fetchFormSchema(formId);
  } catch (err) {
    const msg = `could not verify form ${formId}: ${err.message}`;
    if (process.env.FORMS_STRICT === '1') problems.push(msg);
    else warnings.push(`${msg} — skipping (set FORMS_STRICT=1 to treat as fatal)`);
    continue;
  }

  console.log(dim(`form ${formId}: ${schema.size} questions, ${usages.length} page(s)`));

  for (const { file, fields, hasEmptyGuard } of usages) {
    const present = new Set(fields.map((f) => f.entry));

    if (!hasEmptyGuard) {
      problems.push(
        `${file}: submit handler is missing the empty-value guard ` +
          `(\`if (!el.value) return;\` in _includes/macros/google-form.njk) — ` +
          `an untouched optional field would post "" and Google would drop the response`,
      );
    }

    for (const [entry, q] of schema) {
      if (q.required && !present.has(entry)) {
        problems.push(`${file}: missing required question ${entry} ("${q.title}")`);
      }
    }

    for (const field of fields) {
      const q = schema.get(field.entry);
      if (!q) {
        problems.push(`${file}: ${field.entry} does not exist on the live form`);
        continue;
      }
      if (!CHOICE_TYPES.has(q.type)) continue;

      const label = `${field.entry} ("${q.title}", ${TYPE_NAMES[q.type] ?? q.type})`;

      if (field.kind !== 'select') {
        problems.push(
          `${file}: ${label} is a choice question but the page renders a free-text <${field.kind}>; ` +
            `Google will reject any value that is not an exact option`,
        );
        continue;
      }

      for (const value of field.submittable) {
        if (value === '') {
          problems.push(
            `${file}: ${label} can submit an empty value — Google rejects the entire response`,
          );
        } else if (!q.options.includes(value)) {
          problems.push(
            `${file}: ${label} can submit "${value}", which is not an accepted option ` +
              `(accepted: ${q.options.filter(Boolean).map((o) => `"${o}"`).join(', ')})`,
          );
        }
      }
    }
  }
}

for (const w of warnings) console.warn(yellow(`⚠ ${w}`));

if (problems.length > 0) {
  console.error(red(`\n✗ ${problems.length} form problem(s) — submissions would be dropped:\n`));
  for (const p of problems) console.error(red(`  • ${p}`));
  console.error(dim('\nGoogle rejects the whole response on a single invalid value, and'));
  console.error(dim('mode:"no-cors" hides the error, so the page still shows success.\n'));
  process.exit(1);
}

console.log(green(`✓ all form fields verified against the live Google Form(s)`));
