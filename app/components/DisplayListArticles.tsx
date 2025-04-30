"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getArticles, formattedDate, deleteArticle } from "../utils/functions";
import { ListArticles } from "./ListArticles";

export const DisplayListArticles = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  const handleDeleteArticle = (id: number) => {
    deleteMutation.mutate(id);
  };

  if (error) return <div>échec du chargement</div>;
  if (isLoading) return <div>chargement...</div>;
  if (!data) return <div>Aucune donnée disponible...</div>;
  return (
    <>
      <div className="flex flex-col space-y-2 w-full items-center">
        {data.member.map((article) => {
          return (
            <ListArticles
              key={article.id}
              id={article.id}
              createdAt={formattedDate(article.createdAt)}
              title={article.title}
              author={article.author}
              onDelete={handleDeleteArticle}
            >
              {deleteMutation.variables === article.id ? (
                <span className="loading loading-spinner text-primary"></span>
              ) : (
                "Delete"
              )}
            </ListArticles>
          );
        })}
      </div>
    </>
  );
};
