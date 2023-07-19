import React from "react";
import classes from "@/components/main-section/MainSection.module.css";
import { formatTime } from "@/utils/formatTime";
import { Article } from "@/api/newsapi-org/types";

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.url}>
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
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
