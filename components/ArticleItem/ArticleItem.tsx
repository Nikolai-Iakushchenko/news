import React from "react";
import classes from "@/components/main-section/MainSection.module.css";
import { formatTime } from "@/utils/formatTime";
import { Article } from "@/api/newsapi-org/types";
import Link from "next/link";

interface ArticleProps {
  article: Article;
  key: string;
}

const ArticleItem = ({ article }: ArticleProps) => {
  const ARTICLE_URL = article.url.substring(article.url.lastIndexOf("/"));

  console.log("article", article);

  return (
    <li key={article.url}>
      <Link href={`/${ARTICLE_URL}`}>
        <div className={classes.article}>
          <div className={classes.articleSection}>
            <div>
              <img src={article.urlToImage} alt={article.title} />
            </div>
            <div className={classes.articleTitle}>
              <h2>{article.title}</h2>
            </div>
          </div>
          <div className={classes.articleSection}>
            <div className={classes.articleDescription}>
              {article.description}
            </div>
            <time
              dateTime={article.publishedAt}
              className={classes.articlePublishedAt}
            >
              {formatTime(article.publishedAt)}
            </time>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ArticleItem;
