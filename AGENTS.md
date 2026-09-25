# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Starting New Code Requests

- At the start of each new code request, check the current Git branch before making changes.
- If the branch is not `main`, ask the user whether they want to fetch the latest remote changes and start from updated `origin/main` to avoid opening a PR based on outdated code. Wait for their answer before making code changes.
- Do not repeat this question for follow-up edits within the same request, or when the user has already explicitly asked to start from freshly fetched `origin/main`.
- Fetching alone does not update the current branch. If the user chooses to refresh, fetch `origin` and create a new branch from `origin/main`, preserving any existing uncommitted work. Never discard changes or reset a branch without explicit authorization.

## Project Overview

Studio Ember marketing website — a static site built with **Eleventy (11ty) v4 alpha** and **Tailwind CSS v4**. Content is authored in Markdown with Nunjucks templating. No client-side framework; interactivity is vanilla JS.

## Commands

- When working on the site, automatically start `yarn dev` early in the session and keep it running so the local preview is available. First check whether the site's development server is already running; reuse it instead of starting a duplicate. Confirm the preview URL once the server is ready.

- **`yarn dev`** — Start dev servers (Eleventy + Tailwind CSS watcher in parallel)
- **`yarn build`** — Production build: compiles CSS, builds HTML, formats with Prettier
- **`yarn build:css`** — Build Tailwind CSS only
- **`yarn build:eleventy`** — Build Eleventy only
- **`yarn format:html`** — Format output HTML with Prettier

No test suite or linter is configured.

## Architecture

### Content & Routing

- `index.md` — Homepage
- `pages/*.md` — Site pages (auto-collected into `collections.pages` sorted alphabetically)
- `posts/*.md` — Blog posts
- All content files use YAML frontmatter for layout, title, date, and navigation metadata
- Dates use `date: "git Last Modified"` to pull from git history

### Blog Images

- All blog post images live in `assets/img/blog/` — never save them directly under `assets/img/` or `blog/`
- Filenames should be SEO-friendly: lowercase, hyphenated, descriptive of the post's target keyword (e.g. `why-does-insomnia-happen.jpg`)
- Reference the image in a post's frontmatter via `image: "/assets/img/blog/<filename>"` and provide `image_alt` with descriptive alt text — both `blog-post.njk` (hero image + og:image/twitter:image) and the blog/category listing cards read these fields
- If an image's largest dimension (width or height) exceeds 1920px, resize it down so the largest side is 1920px before saving it to `assets/img/blog/`

### Templates

- `_includes/layouts/base.njk` — Root HTML layout (head, theme script, nav, footer)
- `_includes/layouts/posts.njk` — Blog post layout (extends base)
- `_includes/components/navigation.njk` — Header nav with JS-powered dropdown for pages collection
- `_includes/components/footer.njk` — Footer with dynamic year

### Styling

- Tailwind CSS input: `frameworks/tailwind/tailwind.css`
- Theme variables (HSL): `assets/css/theme/theme.css` — defines light/dark mode color tokens
- Custom colors in `tailwind.config.js` reference CSS custom properties (`--primary`, `--secondary`, `--accent`, etc.)
- Custom font family: `logo` (IBM Plex Mono)
- Typography plugin (`@tailwindcss/typography`) for prose styling on markdown content
- Dark mode via `[data-theme="dark"]` attribute with `prefers-color-scheme` detection

### Configuration

- `eleventy.config.js` — Output to `output/site/`, passthrough copies assets, registers plugins (navigation, syntax highlight), defines `pages` collection and `dateSimple` filter
- `tailwind.config.js` — Scans `**/*.{html,md,njk}` for classes, extends theme with brand colors
- Build output (`output/`) is gitignored

### Deployment

GitHub Actions (`.github/workflows/gh-pages.yml`) deploys on push to `main`. Note: the workflow currently references Hugo and needs updating to use Eleventy.
