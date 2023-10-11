interface Action {
  type: string;
  payload: boolean;
}

interface Init {
  isPlay: boolean;
  isRepeat: boolean;
  isPlayRandom: boolean;
}

const init: Init = {
  isPlay: false,
  isRepeat: false,
  isPlayRandom: false,
};

const songControlReducer = (state = init, action: Action) => {
  switch (action.type) {
    case "REPEAT": {
      const newConfig = { ...state };
      return { ...newConfig, isRepeat: action.payload };
    }
    case "PLAY": {
      const newConfig = { ...state };
      return { ...newConfig, isPlay: action.payload };
    }
    default:
      return state;
  }
};
export default songControlReducer;
