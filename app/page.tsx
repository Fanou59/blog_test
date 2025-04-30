"use cient";
import { DisplayListArticles } from "./components/DisplayListArticles";

import { FormArticle } from "./components/FormArticle";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-3xl text-center mb-3">Welcome on board !</p>
      <DisplayListArticles />
      <FormArticle />
    </div>
  );
}
