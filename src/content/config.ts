// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      cover: image().refine((img) => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide!",
      }),
      coverAlt: z.string(),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};