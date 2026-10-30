# SEO and answer-engine review

Reviewed October 30, 2026. This is a source and generated-output audit, not a measurement of search rankings or AI citations.

## Changes in this PR

- Added Washington, DC to English and Spanish homepages, service pages, biography, contact, rates, landing pages, blog consultation copy, FAQ, and AI context files. The client must be physically located in Maryland, Virginia, or DC for sessions. Insurance remains Maryland-only; Virginia and DC are self-pay.
- Centralized structured service areas in `_data/site.json`; DC uses `AdministrativeArea`, not `State`. Kept the practice as `MedicalOrganization` without implying an in-person business location. Removed organization homepages that were incorrectly used as identity (`sameAs`) links.
- Fixed category hreflang links that previously mixed unrelated categories and repeated language codes. Explicitly paired the two translated article URLs with different slugs. Navigation, HTML metadata, and sitemap now share the route mapping.
- Included all paginated category archives and indexable insomnia landing pages in the sitemap; landing pages now have language alternate links.
- Removed hard-coded 1200×630 social-image dimensions, which were incorrectly applied to different image sizes.
- Added missing group-page headings. The Spanish group detail page is an untranslated placeholder: it now has `noindex`, is excluded from the sitemap, and is not advertised as an English-page translation.
- Replaced independently maintained AI clinical assertions and fee lists with concise practice facts, official links, and FAQ answers generated from the same data as the public FAQ. This removes unsupported numerical success claims from those context files.
- Added `yarn test:seo` to the production build.

## Verification

`yarn test:seo` checks 56 generated content pages (55 indexable): canonical URLs, nonempty titles/descriptions, one H1, Open Graph URLs/images, parseable JSON-LD, DC in all service-area schemas, local navigation/image targets, unique and reciprocal language links, exact sitemap coverage, sitemap/head alternate agreement, known translated route pairs, robots sitemap reference, and AI context links. Run after a clean production build to avoid testing obsolete generated files.

The existing `yarn test:forms` can also run with `FORMS_STRICT=1` to verify live Google Form schemas without submitting data. The deployment workflow already builds Eleventy and runs the build checks before upload.

## Follow-up outside this PR

- After merging/deploying, inspect representative English/Spanish URLs and the sitemap in Google Search Console. Indexing status, canonical selection, rich-result eligibility, search traffic, and Core Web Vitals require live tools/data; they are not established by these checks.
- Review the closed April 2026 group page before reusing it: its description says six weeks while its session metadata says eight. Translate the Spanish page fully before removing `noindex` and enabling its language pairing.
- A clinical editorial review of existing articles/service copy remains separate. Some older consultation copy promises outcomes too strongly. This PR changes geographic availability there, without rewriting approved clinical articles or certifying every medical claim.
- Keep actual directory profiles consistent with DC licensure and Maryland-only insurance. No directory profiles or external listings were changed.
- For new translated slugs, update `translatedRoutes` in `eleventy.config.js` and the semantic-pair assertions in `scripts/verify-seo.mjs`.

## Search and answer-engine guidance

Clear public answers, crawlable pages, accurate practice facts, and structured data matching visible content are the foundation. `llms.txt` is an optional context resource; it does not guarantee indexing or AI citations. Google states that its AI search features use ordinary SEO foundations and do not require special AI markup or files.

Sources:
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: Tell Google about localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
