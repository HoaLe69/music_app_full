import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlice";
import topReducer from "./topSlice";
import playListReducer from "./playListSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    top: topReducer,
    playList: playListReducer,
  },
});
