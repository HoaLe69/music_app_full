import { combineReducers } from "redux";
import songReducer from "./songReducer";
import songControlReducer from "./songControl";
import playListReducer from "./playListReducer"; 
import playReducer from "./playOrderReducer";

const rootReducer = combineReducers({
	song : songReducer,
	songControl : songControlReducer,
	playList : playListReducer,
	playOrder : playReducer
})
export default rootReducer
