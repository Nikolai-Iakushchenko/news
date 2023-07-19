import React from "react";

interface ArticleProps {
  params: { articleId: string };
}

const ArticleDetails = ({ params }: ArticleProps) => {
  console.log("params.articleId", params.articleId);

  return <div>ArticleDetails</div>;
};

export default ArticleDetails;
