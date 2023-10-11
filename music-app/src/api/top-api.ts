import axiosClient from "./axiosClient"

const topApi = {
	getTop : () => {
		const url = '/top100'
		return axiosClient.get(url)
	}
}
export default topApi
