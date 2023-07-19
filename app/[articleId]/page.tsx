import React from "react";
import { getTopHeadlines } from "@/api/newsapi-org/top-headlines";
import classes from "./styles.module.css";
import { formatTime } from "@/utils/formatTime";

interface ArticleProps {
  params: { articleId: string };
}

const ArticleDetails = async ({ params }: ArticleProps) => {
  const articles = await getTopHeadlines();
  const currentArticle = articles.find((article) => {
    return article.title === decodeURIComponent(params.articleId);
  });

  if (currentArticle) {
    return (
      <div>
        <h2 className={classes.title}>{currentArticle.title}</h2>
        <div>
          <img src={currentArticle.urlToImage} alt={currentArticle.title} />
        </div>
        <p>{currentArticle.content}</p>
        <br />

        <p>{currentArticle.description}</p>
        <time className={classes.time} dateTime={currentArticle.publishedAt}>
          {formatTime(currentArticle.publishedAt)}
        </time>
      </div>
    );
  }
};

export default ArticleDetails;
