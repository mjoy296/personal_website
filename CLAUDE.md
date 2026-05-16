# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Architecture

Astro v6 static site with Tailwind CSS v4, deployed to GitHub Pages at `https://mjoy296.github.io/personal_website`.

**Routing** maps directly to `src/pages/`:
- `/` → `index.astro` — hero, featured projects, recent posts
- `/about` → `about.astro` — static bio prose
- `/projects` → `projects.astro` — full project grid
- `/blog` → `blog/index.astro` — post listing
- `/blog/[slug]` → `blog/[...slug].astro` — individual posts rendered from content collections

**Content collections** (`src/content/`) drive blog and projects:
- `blog/` — Markdown posts; frontmatter schema in `src/content.config.ts` (Astro v6 glob loader)
- `projects/` — Markdown project entries; same config file
- Posts with `draft: true` are excluded from all listings and static paths
- Projects with `featured: true` appear on the home page (up to 3)

**Layouts** (`src/layouts/`):
- `Layout.astro` — base shell (nav, footer, head). All internal `href`s are prefixed with `import.meta.env.BASE_URL` for GitHub Pages subpath compatibility.
- `BlogPost.astro` — wraps `Layout.astro`, adds post header (title, date, tags) above the prose slot

**Styling**: Tailwind v4 via `@tailwindcss/vite`. Entry point is `src/styles/global.css` (imported in `Layout.astro`). The `@tailwindcss/typography` plugin provides `prose` classes used in blog posts and the About page.

## GitHub Pages deployment

Push to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys `dist/` via `actions/deploy-pages`. The GitHub Pages source must be set to **GitHub Actions** in the repo settings (Settings → Pages → Source).

## Specs

Feature requirements live in `specs/`. Implement new features by writing a spec there first, then coding from it.
