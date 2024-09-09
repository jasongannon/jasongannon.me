import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://gannon.ink',
  integrations: [tailwind(), sitemap(), icon(), mdx()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      }
    }]]
  }
});