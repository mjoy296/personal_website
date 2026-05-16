// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mjoy296.github.io',
  base: 'personal_website',
  vite: {
    plugins: [tailwindcss()],
  },
});