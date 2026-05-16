// Normalizes BASE_URL to always have leading and trailing slashes,
// since Astro dev server may omit them unlike the production build.
const raw = import.meta.env.BASE_URL;
export const base = ('/' + raw).replace(/\/+/g, '/').replace(/\/?$/, '/');
