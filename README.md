# Grey Wellness

Marketing website for Grey Wellness, built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS v4](https://tailwindcss.com/).

## Requirements

- Node.js 20+
- [Yarn](https://yarnpkg.com/)

## Installation

```bash
yarn install
```

## Development

Start the local dev server with hot reloading:

```bash
yarn dev
```

This runs Eleventy and the Tailwind CSS watcher in parallel. The site is served at `http://localhost:8080`.

## Building

Generate a production build:

```bash
yarn build
```

Output is written to `output/site/`. This directory is gitignored.

## Deploying

Deployments are handled automatically via GitHub Actions and publish to GitHub Pages.

**The workflow only triggers in two ways:**

1. **GitHub Release (recommended)** — Create a new release in GitHub to deploy to production.
2. **Manual trigger** — Go to Actions → "Deploy to GitHub Pages" → "Run workflow" to deploy on demand without a release.

### Creating a release

1. Go to the repository on GitHub.
2. Click **Releases** → **Draft a new release**.
3. Create a new tag (e.g. `1.2.0`), add release notes, and click **Publish release**.
4. The deploy workflow starts automatically and publishes the site to GitHub Pages.

The live site is available at: [https://studioember.github.io/greywellness.com/](https://studioember.github.io/greywellness.com/)
