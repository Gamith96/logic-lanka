JavaScript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// කෙළින්ම Custom Domain එකට සෙටප් කිරීම
export default defineConfig({
  site: 'https://www.logiclanka.com',
  // base එක සම්පූර්ණයෙන්ම අයින් කළා
  vite: {
    plugins: [tailwindcss()],
  },
});