import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from "astro/zod";

const greeting = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/greeting/' }),
  schema: z.object({
    text: z.string(),
  }),
});

export const collections = { greeting };
