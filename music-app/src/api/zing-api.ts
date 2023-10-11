import axiosClient from "./axiosClient"
const zingApi = {
	getChart : () => {
		const url = '/charthome'
		return axiosClient.get(url) 
	},
	getPlaylistDetail : (id:string) => {
		const url = `detailplaylist?id=${id}`
		return axiosClient.get(url)
	}
}
export default zingApi
