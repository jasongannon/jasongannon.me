import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import icon from "astro-icon";

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
      // Add these options:
      layout: false,
      layoutProps: {},
      // Optimize MDX processing
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
  // Remove or comment out the markdown config since you're only using MDX
  // markdown: { ... }
});