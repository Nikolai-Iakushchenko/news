import { getTopHeadlines } from "@/api/newsapi-org/top-headlines";
import classes from "./MainSection.module.css";
import { formatTime } from "@/utils/formatTime";

export default async function MainSection() {
  const articles = await getTopHeadlines();

  return (
    <section>
      <div>
        <h1 className={classes.mainSectionHeader}>Top headlines</h1>
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
