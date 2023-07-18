import { configureStore } from "@reduxjs/toolkit";
import { articlesSlice } from "@/store/articles";

export const store = configureStore({
  reducer: {
    [articlesSlice.name]: articlesSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
