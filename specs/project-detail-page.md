# Spec: Project Detail Page

## Goal

Each project card on the Projects page and the Home page (featured section) should link to an individual project detail page. Clicking a card navigates to `/projects/[slug]`.

---

## New page: `/projects/[slug]`

File: `src/pages/projects/[slug].astro`

- Uses `getStaticPaths` to generate a route for every entry in the `projects` content collection
- Maps `post.id` → `params.slug`
- Renders the project's Markdown body using `render(entry)` from `astro:content`

### Layout

Use a new `ProjectPost.astro` layout (wraps `Layout.astro`) with props:
- `title: string`
- `description: string`
- `tags: string[]`
- `url?: string`
- `repo?: string`

The layout renders:
- Project title as `<h1>`
- Tag chips (same style as blog tags)
- External link buttons for Live site and Source (only if present in frontmatter)
- Markdown body in a `prose` block below the header

---

## Changes to existing pages

### `src/pages/projects.astro`
- Wrap each project `<li>` in an `<a href="${base}projects/${project.id}">` so the entire card is clickable
- Remove the inline Live site / Source links from the card (they move to the detail page)
- Add a subtle "View →" text at the bottom of each card to signal it's clickable

### `src/pages/index.astro` — featured projects section
- Wrap each featured project card in an `<a href="${base}projects/${project.id}">` so clicking it navigates to the detail page

---

## Sample project content update

Update `src/content/projects/sample-project.md` to include a multi-paragraph Markdown body so the detail page renders meaningful content on first run.
