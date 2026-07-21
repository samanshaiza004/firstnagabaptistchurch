import { defineArrayMember, defineField, defineType } from "sanity";

const requiredText = (label: string, name: string, rows = 2) => defineField({
  name, title: label, type: "text", rows,
  validation: (rule) => rule.required().min(2).max(rows > 2 ? 2000 : 400),
});

export const seo = defineType({
  name: "seo", title: "Search and sharing", type: "object",
  fields: [
    defineField({ name: "title", title: "Page title", type: "string", validation: (rule) => rule.required().min(10).max(65) }),
    defineField({ name: "description", title: "Search description", type: "text", rows: 3, validation: (rule) => rule.required().min(40).max(170) }),
    defineField({ name: "socialImage", title: "Social sharing image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required().max(180) })] }),
  ],
});

export const callToAction = defineType({
  name: "callToAction", title: "Link", type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required().min(2).max(40) }),
    defineField({ name: "href", title: "Destination", type: "string", description: "Use a site path such as /contact, a mailto: link, or a full https:// URL.", validation: (rule) => rule.required().custom((value) => !value || /^(\/|https:\/\/|mailto:)/.test(value) ? true : "Use /, https://, or mailto:" ) }),
  ],
});

export const hero = defineType({
  name: "hero", title: "Page introduction", type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (rule) => rule.required().max(60) }),
    defineField({ name: "title", title: "Heading", type: "string", validation: (rule) => rule.required().min(3).max(100) }),
    requiredText("Description", "description", 3),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (rule) => rule.required(), fields: [defineField({ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required().min(8).max(180) })] }),
  ],
});

export const richText = defineType({
  name: "richText", title: "Formatted text", type: "array",
  of: [defineArrayMember({
    type: "block",
    styles: [
      { title: "Paragraph", value: "normal" },
      { title: "Subheading", value: "h3" },
    ],
    lists: [{ title: "Bulleted list", value: "bullet" }, { title: "Numbered list", value: "number" }],
    marks: {
      decorators: [{ title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" }],
      annotations: [{
        name: "link", title: "Link", type: "object",
        fields: [defineField({ name: "href", title: "URL", type: "url", validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto"] }) })],
      }],
    },
  })],
});
