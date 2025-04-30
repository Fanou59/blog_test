import { z } from "zod";

// Validation personnalisée pour les dates ISO 8601 avec décalage horaire
const isoDateTime = z.string().refine((value) => !isNaN(Date.parse(value)), {
  message: "Invalid datetime",
});

export const ArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  createdAt: isoDateTime,
  categorie: z.string(),
  updatedAt: isoDateTime,
});

export const ApiResponseSchema = z.object({
  member: z.array(ArticleSchema),
});

export type Article = z.infer<typeof ArticleSchema>;
