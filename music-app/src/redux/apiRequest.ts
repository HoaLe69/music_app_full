import axiosClient from "../api/axiosClient";
import { startGetData, getDataSuccess, getDataFailed } from "./homeSlice";
import {
  getPlayListDetailFailed,
  getPlayListDetailStart,
  getPlayListDetailSuccess,
} from "./playListSlice";
import {
  getPlayListTopFailed,
  getPlayListTopStart,
  getPlayListTopSuccess,
  getZingChartFailed,
  getZingChartStart,
  getZingChartSuccess,
} from "./topSlice";

// api homepage
//@ts-ignore
export const getHomeData = async (dispatch) => {
  const url = "/home";
  dispatch(startGetData());
  try {
    const response = await axiosClient.get(url);
    if (response && response.data) {
      const type = ["banner", "playlist", "RTChart"];
      //@ts-ignore
      const dataFilter = response.data.items.filter((section) => {
        return type.includes(section.sectionType);
      });
      const dataHome = dataFilter.reduce(
        (acc: any, currData: any) => {
          if (currData.sectionType === "playlist")
            return { ...acc, playlist: [...acc.playlist, currData] };
          return { ...acc, [currData.sectionType]: currData };
        },
        {
          banner: {},
          playlist: [],
          RTChart: {},
        },
      );
      dispatch(getDataSuccess(dataHome));
    } else {
      dispatch(getDataFailed());
    }
  } catch (e) {
    dispatch(getDataFailed());
  }
};
// get top page data
// @ts-ignore
export const getTopData = async (dispatch) => {
  dispatch(getPlayListTopStart());
  try {
    const url = "/top100";
    const res = await axiosClient.get(url);
    dispatch(getPlayListTopSuccess(res));
  } catch (err) {
    console.log(err);
    dispatch(getPlayListTopFailed());
  }
};
// get zing chart
// @ts-ignore
export const getZingChart = async (dispatch) => {
  dispatch(getZingChartStart());
  try {
    const url = "/charthome";
    const res = await axiosClient.get(url);
    dispatch(getZingChartSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getZingChartFailed());
  }
};

// get play list detail
// @ts-ignore
export const getPlayListDetail = async (dispatch, idPlayList) => {
  dispatch(getPlayListDetailStart());
  try {
    const url = `/detailplaylist?id=${idPlayList}`;
    const res = await axiosClient.get(url);
    dispatch(getPlayListDetailSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getPlayListDetailFailed());
  }
};
