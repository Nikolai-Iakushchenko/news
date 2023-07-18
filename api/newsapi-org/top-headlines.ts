import { API_KEY } from "@/api/newsapi-org/api-key";
import axios from "axios";
import { NEWSAPI_DOMAIN } from "@/api/newsapi-org/constants";

export interface Article {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export const topHeadlinesUrl = `https://${NEWSAPI_DOMAIN}/v2/top-headlines?country=us&apiKey=${API_KEY}`;

// export const getTopHeadlines = async (): Promise<Article[]> => {
//   const response = await axios.get(topHeadlinesUrl);
//
//   if (response.data.status !== "ok") {
//     console.log("response", response);
//   }
//
//   return response.data.articles;
// };
