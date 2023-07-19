import React from "react";
import { Article } from "@/api/newsapi-org/types";
import ArticleItem from "@/components/ArticleItem/ArticleItem";

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList = ({ articles }: ArticlesListProps) => {
  console.log("articles", articles);

  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem key={article.url} article={article} />
      ))}
    </ul>
  );
};

export default ArticlesList;
