import React from "react";
import { getTopHeadlines } from "@/api/newsapi-org/top-headlines";
import classes from "./styles.module.css";
import { formatTime } from "@/utils/formatTime";
import Link from "next/link";

interface ArticleProps {
  params: { articleId: string };
}

const ArticleDetails = async ({ params }: ArticleProps) => {
  const articles = await getTopHeadlines();
  const currentArticle = articles.find((article) => {
    return article.title === decodeURIComponent(params.articleId);
  });

  if (!currentArticle) {
    return <p>Oops! Article is not found</p>;
  }

  if (currentArticle) {
    return (
      <div>
        <h2 className={classes.title}>{currentArticle.title}</h2>
        <div className={classes.image}>
          <img src={currentArticle.urlToImage} alt={currentArticle.title} />
        </div>
        <p className={classes.content}>{currentArticle.content}</p>
        <time className={classes.time} dateTime={currentArticle.publishedAt}>
          {formatTime(currentArticle.publishedAt)}
        </time>
        <div className={classes.backHome}>
          <Link href={"/"}>&#8592; Back to Home</Link>
        </div>
      </div>
    );
  }
};

export default ArticleDetails;
