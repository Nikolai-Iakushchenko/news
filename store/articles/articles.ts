import { Article, topHeadlinesUrl } from "@/api/newsapi-org/top-headlines";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@/store/store";

export interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [],
};

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async () => {
    try {
      const response = await axios.get(topHeadlinesUrl);
      const articles = response.data;

      return articles;
    } catch (error) {
      console.log("Failed to get articles from API", error);
      return error;
    }
  },
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.fulfilled, (state, action) => action.payload);
  },
});

export const selectArticles = (state: RootState) => {
  return state.articles.articles;
};

export const selectMemoizedArticles = createSelector(
  selectArticles,
  (articles) => {
    return articles;
  },
);

const { reducer } = articlesSlice;
export default reducer;
