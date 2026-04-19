import { defineContentConfig, defineCollection } from "@nuxt/content";
import { postSchema } from "./app/utils";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: postSchema
    })
  }
});
