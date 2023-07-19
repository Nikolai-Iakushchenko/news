import { Article } from "@/api/newsapi-org/top-headlines";
import { createSlice } from "@reduxjs/toolkit";

export interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [],
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
});

const { reducer } = articlesSlice;
export default reducer;
