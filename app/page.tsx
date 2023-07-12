import {getTopHeadlines} from "@/api/newsapi-org/top-headlines";

export default async function Home() {
  const topHeadlines = await getTopHeadlines();

  console.log("topHeadlines", topHeadlines);

  return (
    <main>
      <ul>
        {topHeadlines.map(topHeadline => (<li key={topHeadline.url}>{topHeadline.title}</li>))}
      </ul>
    </main>
  )
}

