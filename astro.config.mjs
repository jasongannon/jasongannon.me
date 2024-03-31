import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jasongannon.me',
  integrations: [tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      }
    }]]
  }
});