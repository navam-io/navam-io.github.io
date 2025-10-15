import { defineCollection, z } from 'astro:content';

// Blog post schema
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Manav Sehgal'),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
