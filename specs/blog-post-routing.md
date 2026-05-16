# Spec: Blog Post Page Routing

## Goal

Clicking a post title or card on the Blog index or Home page navigates correctly to the individual blog post page at `/blog/[slug]`.

---

## Current state

- `src/pages/blog/[...slug].astro` exists and generates static paths from the `blog` collection using `params: { slug: post.id }`
- Blog index links use `${base}blog/${post.id}`
- Home page recent-posts links use `${base}blog/${post.id}`

The routing is structurally correct. The fixes needed are:

1. **Trailing slash consistency** — Astro's default static output appends `/index.html` to routes. Ensure `trailingSlash: 'always'` is set (or left at default `'ignore'`) in `astro.config.mjs` so links resolve correctly on GitHub Pages.
2. **Base URL trailing slash** — `import.meta.env.BASE_URL` already includes a trailing slash in Astro's output, so `${base}blog/${post.id}` is correct and needs no change.

---

## Changes

### `astro.config.mjs`
Add `trailingSlash: 'always'` to ensure GitHub Pages serves pages at `/blog/hello-world/` without redirect issues.

### `src/pages/blog/index.astro`
- The entire `<li>` area for each post should be a single `<a>` wrapping title + description + meta — already the case, no structural change needed
- Confirm hover state is visually clear (covered by the blue color scheme spec)

### `src/pages/blog/[...slug].astro`
- Add a "← Back to blog" link at the top of the post (above the `BlogPost` layout slot) so users can navigate back without using the browser back button

---

## No new files required

All changes are to existing files.
