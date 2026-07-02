import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Gamith96.github.io',
  base: '/logic-lanka',
  vite: {
    plugins: [tailwindcss()],
  },
});