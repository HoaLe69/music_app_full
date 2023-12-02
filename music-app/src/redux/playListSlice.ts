import { createSlice } from "@reduxjs/toolkit";

const playListSlice = createSlice({
  name: "playList",
  initialState: {
    playListDetail: {
      isFetching: false,
      error: false,
      playListDetail: {},
    },
  },
  reducers: {
    getPlayListDetailStart: (state) => {
      state.playListDetail.isFetching = true;
    },
    getPlayListDetailSuccess: (state, action) => {
      state.playListDetail.isFetching = false;
      state.playListDetail.error = false;
      state.playListDetail.playListDetail = action.payload;
    },
    getPlayListDetailFailed: (state) => {
      state.playListDetail.error = true;
      state.playListDetail.isFetching = false;
    },
  },
});

export const {
  getPlayListDetailStart,
  getPlayListDetailFailed,
  getPlayListDetailSuccess,
} = playListSlice.actions;
export default playListSlice.reducer;
