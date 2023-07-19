import React from "react";

interface ArticleProps {
  params: { articleId: string };
}

const Article = ({ params }: ArticleProps) => {
  console.log("params.articleId", params.articleId);

  return <div>Article</div>;
};

export default Article;
