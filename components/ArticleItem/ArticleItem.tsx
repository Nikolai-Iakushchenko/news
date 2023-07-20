import React from "react";
import { formatTime } from "@/utils/formatTime";
import { Article } from "@/api/newsapi-org/types";
import Link from "next/link";
import classes from "./ArticleItem.module.css";

interface ArticleProps {
  article: Article;
  key: string;
}

const ArticleItem = ({ article }: ArticleProps) => {
  const ARTICLE_URL = encodeURI(article.title);

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
