import { getTopHeadlines } from "@/api/newsapi-org/top-headlines";
import classes from "./MainSection.module.css";

export default async function MainSection() {
  const articles = await getTopHeadlines();

  return (
    <section>
      <div>
        <h1 className={classes.mainSectionHeader}>Top headlines</h1>
      </div>
      <ul>
        {articles.map(article => (<li className={classes.arcticleItem} key={article.url}>{article.title}</li>))}
      </ul>
    </section>
  );
}

