import { getTopHeadlines } from "@/api/newsapi-org/top-headlines";
import classes from "./MainSection.module.css";

export default async function MainSection() {
  const articles = await getTopHeadlines();

  console.log("articles[0].source", articles[0].source);

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
                  {article.publishedAt}
                </time>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
