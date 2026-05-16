# Personal Website Spec

## Overview

A personal portfolio and blog site for Marissa Joy (GitHub: mjoy296), built with Astro and Tailwind CSS v4, deployed to GitHub Pages at `https://mjoy296.github.io/personal_website`.

---

## Tech Stack

- **Framework:** Astro v6 (static output)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Content:** Astro content collections (Markdown)
- **Deploy:** GitHub Pages via GitHub Actions

---

## Pages

### `/` — Home
- Hero section: name, one-line bio, primary CTA links (Projects, Blog)
- Featured projects section: shows projects marked `featured: true` (up to 3)
- Recent posts section: shows the 3 most recent non-draft blog posts

### `/about` — About
- Bio/introduction prose
- Skills or interests list (static content, not data-driven)

### `/projects` — Projects
- Grid of all projects from the `projects` content collection
- Each card: title, description, tags, optional links to live site and repo

### `/blog` — Blog index
- Chronological list of all non-draft blog posts
- Each entry: title, date, description, tags

### `/blog/[slug]` — Blog post
- Renders individual Markdown posts with full prose styling
- Shows title, date, tags in a header above the content

---

## Content Collections

### `blog`
Markdown files in `src/content/blog/`. Collection schema defined in `src/content.config.ts` using the Astro v6 `glob` loader.

Frontmatter schema:
```
title: string
description: string
pubDate: date
tags: string[]        # default []
draft: boolean        # default false
```

### `projects`
Markdown files in `src/content/projects/`.

Frontmatter schema (defined alongside blog in `src/content.config.ts`):
```
title: string
description: string
tags: string[]        # default []
url: string (URL)     # optional — live site
repo: string (URL)    # optional — source repo
featured: boolean     # default false
```

---

## Layouts

### `Layout.astro`
Base layout used by all pages.
- Imports `src/styles/global.css` (Tailwind entry point)
- Props: `title: string`, `description?: string`
- Renders: `<head>` with meta tags, nav header, main content slot, footer
- Nav links: Home (site name), About, Projects, Blog
- Footer: GitHub link (`https://github.com/mjoy296`) and LinkedIn link (`https://www.linkedin.com/in/marissajoy/`)
- All internal `href`s use `import.meta.env.BASE_URL` prefix for GitHub Pages subpath compatibility

### `BlogPost.astro`
Wraps `Layout.astro` for blog posts.
- Props: `title`, `description`, `pubDate`, `tags`
- Renders a post header (title, formatted date, tag chips) above the prose slot

---

## Styles

- `src/styles/global.css`: single file, contains `@import "tailwindcss";`
- Prose styling for blog post bodies via Tailwind's `prose` class (requires `@tailwindcss/typography`)
- No custom design tokens or theme extensions needed initially

---

## Deployment

### GitHub Actions workflow: `.github/workflows/deploy.yml`
- Trigger: push to `main`
- Steps:
  1. Checkout repo
  2. Setup Node (version matching `engines.node` in `package.json`: `>=22.12.0`, use `22`)
  3. `npm ci`
  4. `npm run build`
  5. Deploy `dist/` to GitHub Pages using `actions/deploy-pages`
- Use the official `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` actions

---

## Sample Content

Include one sample blog post and one sample project so the site renders with real data on first run.

### Sample blog post: `src/content/blog/hello-world.md`
- title: "Hello, World"
- description: "First post — a quick intro."
- pubDate: 2026-05-16
- tags: ["meta"]

### Sample project: `src/content/projects/sample-project.md`
- title: "Sample Project"
- description: "A placeholder project entry."
- tags: ["example"]
- featured: true

---

## Out of Scope (for now)

- Search
- RSS feed
- Dark mode
- Comments
- Analytics
