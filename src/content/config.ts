import { defineCollection, z } from 'astro:content';

const collectionSchema = {
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		author: z.string().optional(),
		title: z.string(),
		subtitle: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		ogImage: z.string().optional(),
		alt: z.string().optional(),
	}),
}

const marketing = defineCollection(collectionSchema);
const programacion = defineCollection(collectionSchema);
const vida = defineCollection(collectionSchema);

export const collections = { programacion, marketing, vida };
