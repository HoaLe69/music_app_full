import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    dataHomepage: { banner: {}, playlist: [], RTChart: {} },
    pending: false,
    error: false,
  },
  reducers: {
    getDataSuccess: (state, action) => {
      state.dataHomepage = action.payload;
      state.pending = false;
      state.error = false;
    },
    getDataFailed: (state) => {
      state.pending = false;
      state.error = true;
    },
    startGetData: (state) => {
      state.pending = true;
    },
  },
});
export const { startGetData, getDataSuccess, getDataFailed } =
  homeSlice.actions;

export default homeSlice.reducer;
