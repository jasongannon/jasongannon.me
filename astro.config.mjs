import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://jasongannon.me',
  integrations: [tailwind(), sitemap(), icon(), mdx({
    // Ensure MDX uses the same configuration
    syntaxHighlight: 'prism',
    gfm: true,
    wrap: false
  })],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      }
    }]],
    syntaxHighlight: 'prism',
    // Add this wrap configuration
    gfm: true,
    wrap: false    
  }
});