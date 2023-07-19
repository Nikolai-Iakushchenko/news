import { getTopHeadlines } from "@/api/newsapi-org/top-headlines";
import classes from "./MainSection.module.css";
import ArticlesList from "@/components/ArticlesList/ArticlesList";

export default async function MainSection() {
  const articles = await getTopHeadlines();

  return (
    <section>
      <div>
        <h1 className={classes.mainSectionHeader}>Top headlines</h1>
      </div>
      <ArticlesList articles={articles} />
    </section>
  );
}
