# Adding a Content Category

This file walks you through how to safely add a category for a piece of content. Whether it is a Blog post, Tidbit, Project, etc.

---

## 1. Register the collection in `content.config.ts`

Create a new base schema using Zod:

```ts
const baseContentType = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  lede: z.string(),
});
```

Add a new collection using your base schema:

```ts
const contentTypeCategoryOne = defineCollection({
  loader: glob({
    base: "./src/content/content-type-1",
    pattern: "**/*.{md,mdx}",
  }),
  schema: baseContentType,
});
```

Then add it to the exports:

```ts
export const collections = {
  blog,
  tidbitsHtml,
  tidbitsCss,
  tidbitsAudio,
  tidbitsJs,
};
```

---

## 2. Create the content folder

Add a new folder under `src/content/`. Prefix it with the name of the base content schema:

```
src/content/content-{category}/
```

For example: `src/content/posts-music/`

---

## 3. Add content

Create `.md` files inside your new folder. Every file must include the fields defined in the schema:

```md
---
title: Your Title
lede: A short lede.
pubDate: 2026-01-01
tags: ["tag1", "tag2"]
---

Your content here.
```

---

## 4. Add it to `CATEGORY_MAP` in `[category]/index.astro`

Inside `getStaticPaths`, add a new entry to `CATEGORY_MAP`:

```ts
const CATEGORY_MAP = {
  tidbitsHtml: "html",
  tidbitsCss: "css",
  tidbitsAudio: "audio",
  tidbitsJs: "js", // add this
} as const;
```

If one doesn't exist for the content type, you will have to build a new one.

---

## 5. Add it to your collections array in `lib.js`

Each content type has its own collections array. Add the new category to the relevant one:

```js
export const CONTENT_COLLECTIONS = [
  "tidbitsHtml",
  "tidbitsCss",
  "tidbitsAudio",
  "tidbitsJs", // add this
];
```

---

## 6. Add it to your component's frontmatter

If you are building components, list your categories in the frontmatter so they are easily queryable:

```astro
---
import type { CollectionEntry } from 'astro:content';

type ContentCats = 'tidbitsHtml' | 'tidbitsCss' | 'tidbitsAudio' | 'contentCategory';

type Props = {
  content: CollectionEntry<ContentCats>;
};

const { content } = Astro.props;
const { title, lede, tags, pubDate } = content.data;
---
```

---

## Summary Checklist

- [ ] New folder under `src/content/content-{category}/`
- [ ] Collection registered in `content.config.ts`
- [ ] Added to `collections` export in `content.config.ts`
- [ ] Added to `CATEGORY_MAP` in `[category]/index.astro`
- [ ] Added to collections array in `lib.js`
- [ ] At least one `.md` file with valid frontmatter
- [ ] Component frontmatter updated with new category type
