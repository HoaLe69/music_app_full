import { useSelector, useDispatch } from "react-redux";
import { icon } from "../../../assets/icon";

interface Props {
  audio: HTMLAudioElement | null | undefined;
}

const PlayBtn: React.FC<Props> = (props) => {
  const isPlay: boolean = useSelector((state: any) => state.songControl.isPlay);
  const { audio } = props;
  const dispatch = useDispatch();
  const handleOnClickPlay = () => {
    dispatch({ type: "PLAY", payload: !isPlay });
    if (isPlay) audio?.pause();
    else audio?.play();
  };
  return (
    <div>
      <span
        className="block p-[10px] rounded-full bg-yellow cursor-pointer"
        onClick={handleOnClickPlay}
      >
        {isPlay ? icon.pause : icon.play}
      </span>
    </div>
  );
};
export default PlayBtn;
