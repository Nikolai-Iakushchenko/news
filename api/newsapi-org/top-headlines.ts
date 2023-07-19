import { API_KEY } from "@/api/newsapi-org/api-key";
import axios from "axios";
import { Article } from "@/api/newsapi-org/types";

export const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export const getTopHeadlines = async (): Promise<Article[]> => {
  const response = await axios.get(topHeadlinesUrl);

  if (response.data.status !== "ok") {
    console.log("response", response);
  }

  return response.data.articles;
};
