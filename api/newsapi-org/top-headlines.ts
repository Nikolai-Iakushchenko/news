import { API_KEY } from "@/api/newsapi-org/api-key";
import axios from "axios";

export interface TopHeadlines {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export const getTopHeadlines = async (): Promise<TopHeadlines[]> => {
  const response = await axios.get(topHeadlinesUrl);

  if (response.data.status !== "ok") {
    console.log("response", response);
  }

  return response.data.articles;
};
