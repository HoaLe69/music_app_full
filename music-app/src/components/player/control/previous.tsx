import { icon } from "../../../assets/icon";
import { useSelector, useDispatch } from "react-redux";

const PreviousBtn = () => {
  const dispatch = useDispatch();
  const currentSongIndex = useSelector((state: any) => state.playOrder);

  const handleOnClickPreviousSong = () => {
    if (currentSongIndex !== 0) {
      dispatch({ type: "PRE_SONG", payload: 1 });
    }
  };
  return (
    <span className="icon" onClick={handleOnClickPreviousSong}>
      {icon.playBack}
    </span>
  );
};

export default PreviousBtn;
