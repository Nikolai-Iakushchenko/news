import {getTopHeadlines} from "@/api/newsapi-org/top-headlines";

export default async function TopHeadlinesPage() {
  const topHeadlines = await getTopHeadlines();

  return (
    <section className="top-news">
      <ul>
        {topHeadlines.map(topHeadline => (<li key={topHeadline.url}>{topHeadline.title}</li>))}
      </ul>
    </section>
  )
}

