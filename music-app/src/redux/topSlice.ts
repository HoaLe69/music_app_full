import { createSlice } from "@reduxjs/toolkit";

const topSlice = createSlice({
  name: "top",
  initialState: {
    getPlayListTop: {
      isFetching: false,
      error: false,
      playListTop: [],
    },
    getZingChart: {
      isFetching: false,
      error: false,
      chart: [],
    },
  },
  reducers: {
    getZingChartStart: (state) => {
      state.getZingChart.isFetching = true;
    },
    getZingChartSuccess: (state, action) => {
      state.getZingChart.isFetching = false;
      state.getZingChart.error = false;
      state.getZingChart.chart = action.payload;
    },
    getZingChartFailed: (state) => {
      state.getZingChart.isFetching = false;
      state.getZingChart.error = true;
    },
    getPlayListTopStart: (state) => {
      state.getPlayListTop.isFetching = true;
    },
    getPlayListTopSuccess: (state, action) => {
      state.getPlayListTop.isFetching = false;
      state.getPlayListTop.error = false;
      state.getPlayListTop.playListTop = action.payload;
    },
    getPlayListTopFailed: (state) => {
      state.getPlayListTop.isFetching = false;
      state.getPlayListTop.error = true;
    },
  },
});

export const {
  getZingChartStart,
  getZingChartFailed,
  getZingChartSuccess,
  getPlayListTopStart,
  getPlayListTopFailed,
  getPlayListTopSuccess,
} = topSlice.actions;
export default topSlice.reducer;
