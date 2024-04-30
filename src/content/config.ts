import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

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

    metadata: metadataDefinition(),
  }),
});

const excos = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string().max(50, {
      message: "You must keep the name to 50 characters or less",
    }),
    serial: z.number(),
    position: z.string(),
    level: z.number().optional(),
    image: z.string().default('/assets/images/default_pic.jpg'),
    bio: z.string().optional(),
    // category: z.enum([
    //   "Automotive",
    //   "Home & Garden",
    //   "Fashion",
    //   "Electronics",
    //   "Toys",
    // ]),
  }),
});

const senators = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string().max(50, {
      message: "You must keep the name to 50 characters or less",
    }),
    serial: z.number(),
    position: z.string().optional(),
    level: z.number().optional(),
    image: z.string().default('/assets/images/default_pic.jpg'),
    bio: z.string().optional(),
    // category: z.enum([
    //   "Automotive",
    //   "Home & Garden",
    //   "Fashion",
    //   "Electronics",
    //   "Toys",
    // ]),
  }),
});

const jc = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string().max(50, {
      message: "You must keep the name to 50 characters or less",
    }),
    serial: z.number(),
    position: z.string().optional(),
    level: z.number().optional(),
    image: z.string().default('/assets/images/default_pic.jpg'),
    bio: z.string().optional(),
    // category: z.enum([
    //   "Automotive",
    //   "Home & Garden",
    //   "Fashion",
    //   "Electronics",
    //   "Toys",
    // ]),
  }),
});

const campaignCollection = defineCollection({
  // type: "content",
  schema: z.object({
    layout: z.string().optional(),
    date: z.string().optional(),
    mainImage: z.string().optional(),
    otherImages: z.array(z.string()).optional(),
    title: z.string(),
    serial: z.number().optional(),
    caption: z.string().optional(),
  }),
});



export const collections = {
  post: postCollection,
  excos,
  senators,
  jc,
  'campaign': campaignCollection
};


