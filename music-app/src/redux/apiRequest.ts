import axiosClient from "../api/axiosClient";
import { startGetData, getDataSuccess, getDataFailed } from "./homeSlice";

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
