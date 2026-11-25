// Validate the generated site, including reciprocal language links and crawl targets.
import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import assert from 'node:assert/strict';
const root = 'output/site';
const origin = 'https://greywellness.com';
async function walk(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(files.map(f => f.isDirectory() ? walk(join(dir, f.name)) : join(dir, f.name)))).flat();
}
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m => [m[1], m[2]]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(m => attrs(m[0]));
const htmlFiles = (await walk(root)).filter(path => path.endsWith('.html')).sort();
assert.deepEqual(htmlFiles, [
  `${root}/en/index.html`,
  `${root}/es/index.html`,
  `${root}/index.html`,
], 'The homepage build should contain only the two localized homepages and the root redirect');
const pages = new Map();
for (const path of htmlFiles) {
  const url = origin + path.slice(root.length).replace(/index\.html$/, '');
  const html = await readFile(path, 'utf8');
  if (url === origin + '/') continue; // Locale redirect, intentionally excluded from sitemap.
  const head = html.split('</head>')[0];
  const meta = tags(head, 'meta');
  const links = tags(head, 'link');
  assert.equal(links.filter(t => t.rel === 'canonical').length, 1, url);
  assert.equal(links.find(t => t.rel === 'canonical').href, url, url);
  assert.match(head, /<title>[^<]+<\/title>/, url);
  assert.ok(meta.find(t => t.name === 'description')?.content?.trim(), url);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `Exactly one H1: ${url}`);
  const noindex = meta.some(t => t.name === 'robots' && t.content.includes('noindex'));
  const alternates = links.filter(t => t.hreflang);
  assert.equal(new Set(alternates.map(t => t.hreflang)).size, alternates.length, `Duplicate hreflang: ${url}`);
  const lang = tags(html, 'html')[0].lang;
  assert.equal(alternates.find(t => t.hreflang === lang)?.href, url, url);
  assert.equal(meta.find(t => t.property === 'og:url')?.content, url, url);
  const image = meta.find(t => t.property === 'og:image')?.content;
  assert.ok(image?.startsWith(origin + '/'), `Social image: ${url}`);
  await access(root + new URL(image).pathname);
  for (const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const schema = JSON.parse(match[1]);
    const check = value => {
      if (!value || typeof value !== 'object') return;
      if (value.areaServed) assert.ok(value.areaServed.some(a => a.name === 'District of Columbia'), `DC missing in schema: ${url}`);
      Object.values(value).forEach(check);
    };
    check(schema);
  }
  // Homepage section links and local navigation and image targets must exist.
  const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map(([, id]) => id));
  for (const tag of [...tags(html, 'a'), ...tags(html, 'img')]) {
    const target = tag.href || tag.src;
    if (target?.startsWith('#') && target.length > 1) {
      assert.ok(ids.has(target.slice(1)), `Missing section ${target}: ${url}`);
    }
    if (!target || (!target.startsWith('/') && !target.startsWith(origin + '/')) || target.startsWith('//')) continue;
    const path = new URL(target, origin).pathname;
    await access(root + decodeURI(path) + (path.endsWith('/') ? 'index.html' : ''));
  }
  pages.set(url, { alternates, lang, noindex });
}
for (const [url, { alternates, lang }] of pages) {
  for (const alt of alternates) {
    assert.ok(pages.has(alt.href), `Missing alternate: ${alt.href}`);
    if (alt.hreflang !== 'x-default') {
      assert.equal(pages.get(alt.href).lang, alt.hreflang, url);
      assert.ok(pages.get(alt.href).alternates.some(a => a.hreflang === lang && a.href === url), `Nonreciprocal: ${url}`);
    }
  }
}
const sitemap = await readFile(root + '/sitemap.xml', 'utf8');
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)];
const listed = entries.map(m => m[1].match(/<loc>(.*?)<\/loc>/)[1]);
assert.equal(new Set(listed).size, listed.length, 'Duplicate sitemap URL');
assert.deepEqual(new Set(listed), new Set([...pages].filter(([, p]) => !p.noindex).map(([url]) => url)), 'Sitemap must cover every canonical content page');
for (const [, entry] of entries) {
  const url = entry.match(/<loc>(.*?)<\/loc>/)[1];
  const actual = tags(entry, 'xhtml:link').map(a => [a.hreflang, a.href]).sort();
  const expected = pages.get(url).alternates.map(a => [a.hreflang, a.href]).sort();
  assert.deepEqual(actual, expected, `Sitemap/head alternates differ: ${url}`);
}
for (const [lang, other] of [['en', 'es'], ['es', 'en']]) {
  assert.equal(pages.get(`${origin}/${lang}/`).alternates.find(a => a.hreflang === other)?.href, `${origin}/${other}/`);
}
assert.match(await readFile(root + '/robots.txt', 'utf8'), /Sitemap: https:\/\/greywellness\.com\/sitemap.xml/);
console.log(`SEO checks passed for ${pages.size} homepages: metadata, H1s, JSON-LD, DC service areas, local links, reciprocal translations, and sitemap.`);
