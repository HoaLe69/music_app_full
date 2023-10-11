import { ISong } from "../utils/interfaces";

const init: ISong[] = [];

interface Action {
  type: string;
  payload: [];
}
const playListReducer = (state = init, action: Action) => {
  switch (action.type) {
    case "CHOOSE_LIST": {
      return action.payload;
    }
    default:
      return state;
  }
};
export default playListReducer;
