import {getTopHeadlines} from "@/api/newsapi-org/top-headlines";
import classes from "./MainSection.module.css"

export default async function MainSection() {
  const articles = await getTopHeadlines();

  return (
    <section className="top-news">
      <ul>
        {articles.map(article => (<li className={classes.arcticleItem} key={article.url}>{article.title}</li>))}
      </ul>
    </section>
  )
}

