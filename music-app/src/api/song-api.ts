import axiosClient from "./axiosClient";

const songApi = {
  getSong: (id: string) => {
    const url = `/song?id=${id}`;
    return axiosClient.get(url);
  },
};
export default songApi;
