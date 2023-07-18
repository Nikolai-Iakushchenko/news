import { combineReducers } from "redux";
import articlesReducer from "./articles/articles";

export const rootReducer = combineReducers({
  articles: articlesReducer,
});
