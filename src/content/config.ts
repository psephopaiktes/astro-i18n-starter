import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image()
        .refine((img) => img.width >= 600, {
          message: "cover must be at least 600px wide",
        })
        .optional(),
    }),
});

export const collections = { blog };
