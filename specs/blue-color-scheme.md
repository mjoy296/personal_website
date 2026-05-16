# Spec: Blue Color Scheme

## Goal

Replace the current gray-dominant palette with a cohesive blue palette across all pages and layouts.

---

## Color mapping

| Element | Current | New |
|---|---|---|
| Body text | `text-gray-900` | `text-slate-900` |
| Muted / secondary text | `text-gray-600` | `text-blue-900/70` |
| Very muted (dates, meta) | `text-gray-400`, `text-gray-500` | `text-blue-400` |
| Page background | `bg-white` | `bg-slate-50` |
| Nav / footer border | `border-gray-200` | `border-blue-100` |
| Dividers | `divide-gray-100` | `divide-blue-100` |
| Card border | `border-gray-200` | `border-blue-200` |
| Tag chip background | `bg-gray-100 text-gray-600` | `bg-blue-100 text-blue-700` |
| Primary CTA button | `bg-gray-900 text-white hover:bg-gray-700` | `bg-blue-700 text-white hover:bg-blue-800` |
| Secondary CTA button | `border-gray-300 hover:bg-gray-50` | `border-blue-300 hover:bg-blue-50` |
| Nav / footer links hover | `hover:text-gray-600` / `hover:text-gray-900` | `hover:text-blue-600` |
| Post/project title hover | `group-hover:text-gray-600` | `group-hover:text-blue-600` |
| "All posts →" / "All projects →" links | `text-gray-500 hover:text-gray-900` | `text-blue-500 hover:text-blue-800` |
| Prose links (blog body) | default | `text-blue-600 hover:text-blue-800` |

---

## Files to update

- `src/layouts/Layout.astro` — body bg, header/footer borders, nav links, footer links
- `src/layouts/BlogPost.astro` — tag chips, date color
- `src/pages/index.astro` — CTA buttons, card borders, tag chips, hover states, dividers
- `src/pages/projects.astro` — card borders, tag chips, link colors
- `src/pages/blog/index.astro` — dividers, tag chips, hover states
- `src/pages/about.astro` — inherits from Layout; prose links covered by global CSS
- `src/styles/global.css` — add a CSS custom property or Tailwind override for prose link color

---

## Prose link color

In `src/styles/global.css`, add after the plugin import:

```css
@layer base {
  .prose a {
    color: theme(--color-blue-600);
  }
  .prose a:hover {
    color: theme(--color-blue-800);
  }
}
```
