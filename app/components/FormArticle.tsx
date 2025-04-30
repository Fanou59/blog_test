"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { addArticle } from "../utils/functions";
import { Article } from "../utils/schemaUtils";

export const FormArticle = () => {
  const { register, handleSubmit, reset } = useForm<Article>();
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      reset();
    },
  });

  const submitArticle: SubmitHandler<Article> = (data) => {
    const completeData = {
      ...data,
      updatedAt: new Date().toISOString(),
      categorie: "defaut",
      createdAt: new Date().toISOString(),
    };
    addMutation.mutate(completeData);
  };

  return (
    <form
      onSubmit={handleSubmit(submitArticle)}
      className="flex flex-col space-y-1 mt-3 items-center w-full"
    >
      <input
        type="text"
        {...register("title")}
        className="input input-primary"
        placeholder="Ajouter un titre"
      />
      <input
        type="text"
        {...register("author")}
        className="input input-primary"
        placeholder="Ajouter un auteur"
      />
      <textarea
        {...register("content")}
        className="textarea textarea-primary"
        placeholder="Ajouter un contenu"
      />
      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};
