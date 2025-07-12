// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  site: 'https://decastroc.com',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
