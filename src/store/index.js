import { configureStore } from "@reduxjs/toolkit";
import feedsReducer from "./reducer/feedsReducer";

const store = configureStore({
  reducer: {
    feedsReducer: feedsReducer,
  },
});

export default store;
