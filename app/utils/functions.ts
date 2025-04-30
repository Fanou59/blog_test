import { ApiResponseSchema, Article } from "../utils/schemaUtils";

export const getArticles = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/articles");
  const data = await response.json();
  return ApiResponseSchema.parse(data);
};

export const formattedDate = (date: string) => {
  return new Date(date).toLocaleDateString("fr-FR");
};

export const addArticle = async (newArticle: Article) => {
  const response = await fetch("http://127.0.0.1:8000/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify(newArticle),
  });
  if (!response.ok) {
    throw new Error("Problème de réseau");
  }
  return response.json();
};

export const deleteArticle = async (id: number) => {
  const response = await fetch(`http://127.0.0.1:8000/api/articles/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la suppression de l'article");
  }
  return response.json();
};
