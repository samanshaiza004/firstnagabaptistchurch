import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const events = defineCollection({
  loader: file("src/data/events.json"),
  schema: z.object({
    title: z.string().min(1),
    dateLabel: z.string().min(1),
    timeKind: z.enum(["seasonal", "label", "none"]),
    timeLabel: z.string().optional(),
    location: z.string().min(1),
    description: z.string().min(1),
    recurring: z.boolean(),
    month: z.number().int().min(1).max(12).nullable().optional(),
    day: z.number().int().min(1).max(31).nullable().optional(),
    year: z.number().int().optional(),
    order: z.number().int().nonnegative(),
  }),
});

const people = defineCollection({
  loader: file("src/data/people.json"),
  schema: z.object({
    name: z.string().min(1),
    role: z.string().min(1),
    category: z.string().min(1),
    bio: z.string().min(1),
    imageKey: z.string().min(1),
    group: z.enum(["leadership", "trustee", "ministry"]),
    order: z.number().int().nonnegative(),
  }),
});

const ministries = defineCollection({
  loader: file("src/data/ministries.json"),
  schema: z.object({
    name: z.string().min(1),
    icon: z.enum(["music", "heart"]),
    leaderId: z.string().min(1),
    members: z.array(z.string().min(1)),
    order: z.number().int().nonnegative(),
  }),
});

const gallery = defineCollection({
  loader: file("src/data/gallery.json"),
  schema: z.object({
    title: z.string().min(1),
    caption: z.string().min(1),
    alt: z.string().min(1),
    imageKey: z.string().min(1),
    category: z.enum(["Baptism", "Church Family", "Church History", "Culture", "Worship"]),
    event: z.object({ id: z.string().min(1), title: z.string().min(1), dateLabel: z.string().min(1), location: z.string().min(1) }),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = { events, people, ministries, gallery };
