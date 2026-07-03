import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.logiclanka.com',
  vite: {
    plugins: [tailwindcss()],
  },
});