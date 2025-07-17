// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: 'https://removeaioverview.com',
  redirects: {
    "/about": "/install",
    "/donate": "/install"
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: { port: 3000, host: true }
});
