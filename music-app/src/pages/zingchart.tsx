import ChartSong from '../components/chartSong'
import zingApi from '../api/zing-api'
import { useEffect , useState } from 'react'
import { SongItf } from '../utils/interfaces'
const ZingChart:React.FC = () => {
	const [charts , setChart] = useState([])
	useEffect(() => {
		const getChart = async () => {
			const response = await zingApi.getChart()
			if (response && response.data) {
				console.log(response)
				setChart(response.data.RTChart.items)
			}
		}
		getChart()
	} , [])
	return ( <div >
		{ charts.map((song:SongItf , index:number) => {
			return <ChartSong top={index + 1} key={song.encodeId} song={song} />
		}) }
			</div> )
}
export default ZingChart
