import { icon } from "../../../assets/icon";
import { useSelector, useDispatch } from "react-redux";

const NextBtn = () => {
  const dispatch = useDispatch();
  const playList = useSelector((state: any) => state.playList);
  const curentIndexSong = useSelector((state: any) => state.playOrder);
  const handleOnClickNextSong = () => {
    if (curentIndexSong !== playList.length) {
      dispatch({ type: "NEXT_SONG", payload: 1 });
    }
  };

  return (
    <span className="icon" onClick={handleOnClickNextSong}>
      {icon.playNext}
    </span>
  );
};
export default NextBtn;
