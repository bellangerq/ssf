import { z } from "zod";

/**
 * Format a date string into a readable date ("17 août 2022")
 * @param {string} dateString
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(dateString));
}

/**
 * Define content collection schema with Zod
 */
export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  author: z.enum(["Quentin Bellanger", "Florian Deblaise"])
});

export type PostAuthor = z.infer<typeof postSchema>["author"];
