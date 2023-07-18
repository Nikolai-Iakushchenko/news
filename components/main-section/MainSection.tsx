"use client";

import classes from "./MainSection.module.css";
import { formatTime } from "@/utils/formatTime";
import { useEffect } from "react";
import { getArticles, selectArticles } from "@/store/articles/articles";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/hooks";

export default function MainSection() {
  const dispatch = useAppDispatch();
  const articles = useSelector(selectArticles);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <section>
      <div>
        <h1 className={classes.mainSectionHeader}>Top headlines!</h1>
      </div>
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
    </section>
  );
}
