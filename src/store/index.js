import { configureStore } from "@reduxjs/toolkit";
import feedsReducer from "./reducer/feedsReducer";
import photosReducer from "./reducer/photosReducer";

const store = configureStore({
  reducer: {
    feedsReducer: feedsReducer,
    photosReducer: photosReducer,
  },
});

export default store;
