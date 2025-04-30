import { ApiResponseSchema, Article } from "../utils/schemaUtils";

export const getArticles = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/articles");
  const data = await response.json();
  return ApiResponseSchema.parse(data);
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
  console.log(response);
  // Vérifiez si le serveur retourne un corps de réponse
  if (response.status !== 204) {
    try {
      return await response.json();
    } catch {
      // Si le serveur ne retourne pas de JSON, ne rien faire
      console.warn("Aucun contenu JSON retourné après suppression.");
    }
  }
};

export const formattedDate = (date: string) => {
  return new Date(date).toLocaleDateString("fr-FR");
};
