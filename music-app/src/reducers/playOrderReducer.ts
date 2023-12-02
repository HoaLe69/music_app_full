interface Action {
  type: string;
  payload: number;
}
const playReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case "NEXT_SONG": {
      return state + action.payload;
    }
    case "PRE_SONG": {
      return state - action.payload;
    }
    case "JUMP_TO": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default playReducer;
