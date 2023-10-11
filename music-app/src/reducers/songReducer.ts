import { SongAudioItf } from "../utils/interfaces"
const init = {
}
interface Action {
	type : string,
	payload : SongAudioItf,
}
const songReducer = (state = init , action:Action) => {
	switch(action.type) {
		case 'CHOOSE_SONG' : {
			const newSong = { ...action.payload }
			return { ...newSong }
		}
		default : 
			return state
	}
}
export default songReducer
