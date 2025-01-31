import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import icon from "astro-icon";

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://jasongannon.me',

  integrations: [
    tailwind(), 
    sitemap(), 
    icon(), 
    mdx({
      syntaxHighlight: 'prism',
      gfm: true,
      wrap: false,
      layout: false,
      layoutProps: {},
      optimize: true,
      remarkPlugins: [],
      rehypePlugins: [
        [rehypeExternalLinks, {
          content: {
            type: 'text',
            value: ' 🔗'
          }
        }]
      ]
    })
  ],

  adapter: cloudflare(),
});