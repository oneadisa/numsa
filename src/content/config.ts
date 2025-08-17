import { z, defineCollection } from 'astro:content';

// Base schema for all content types
const baseContentSchema = z.object({
  title: z.string().optional(),
  excerpt: z.string().optional(),
  image: z.string().optional(),
  date: z.string().optional(),
  author: z.string().optional(),
  serial: z.number().optional(),
  draft: z.boolean().optional(),
});

// Extended schema for executive council members
const excosSchema = baseContentSchema.extend({
  name: z.string().max(50, {
    message: "You must keep the name to 50 characters or less",
  }),
  position: z.string(),
  level: z.number().optional(),
  bio: z.string().optional(),
});

// Extended schema for campaigns, outreaches, and zoom conferences
const contentSchema = baseContentSchema.extend({
  layout: z.string().optional(),
  mainImage: z.string().optional(),
  otherImages: z.array(z.string()).optional(),
  caption: z.string().optional(),
});

// Blog post schema (keeping existing for backward compatibility)
const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: z.object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),
      canonical: z.string().url().optional(),
      robots: z.object({
        index: z.boolean().optional(),
        follow: z.boolean().optional(),
      }).optional(),
      description: z.string().optional(),
      openGraph: z.object({
        url: z.string().optional(),
        siteName: z.string().optional(),
        images: z.array(
          z.object({
            url: z.string(),
            width: z.number().optional(),
            height: z.number().optional(),
          })
        ).optional(),
        locale: z.string().optional(),
        type: z.string().optional(),
      }).optional(),
      twitter: z.object({
        handle: z.string().optional(),
        site: z.string().optional(),
        cardType: z.string().optional(),
      }).optional(),
    }).optional(),
  }),
});

// Define collections with unified schemas
export const collections = {
  post: postCollection,
  excos: defineCollection({ type: "data", schema: excosSchema }),
  senators: defineCollection({ type: "data", schema: excosSchema }),
  jc: defineCollection({ type: "data", schema: excosSchema }),
  campaigns: defineCollection({ type: "content", schema: contentSchema }),
  outreaches: defineCollection({ type: "content", schema: contentSchema }),
  'zoom-conferences': defineCollection({ type: "content", schema: contentSchema }),
};


