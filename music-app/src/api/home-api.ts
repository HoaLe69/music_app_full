import axiosClient from "./axiosClient";

const homeApi = {
  getDataHome: () => {
    const url = "/home";
    return axiosClient.get(url);
  },
  getChartHome: () => {
    const url = "/charthome";
    return axiosClient.get(url);
  },
};
export default homeApi;
