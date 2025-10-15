import { defineCollection, z } from 'astro:content';

// Blog post schema - supports both Navam (.mdx) and Trenddit (.md) formats
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Accept both 'description' (Navam) and 'excerpt' (Trenddit)
    description: z.string().optional(),
    excerpt: z.string().optional(),
    // Accept both 'pubDate' (Navam) and 'date' (Trenddit)
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    // Accept both object (Navam) and string (Trenddit) for images
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    featuredImage: z.string().optional(),
    // Trenddit-specific fields
    layout: z.string().optional(),
    relatedPosts: z.array(z.string()).optional(),
    // Common fields
    author: z.string().default('Navam Team'),
    tags: z.array(z.string()),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
