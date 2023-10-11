import { icon } from "../assets/icon";
import { TimeConvert } from "../utils/convertTime";
import { SongItf } from "../utils/interfaces";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface Props {
  song: SongItf;
  top?: number;
  index?: number;
}
const ChartSong: React.FC<Props> = (props) => {
  const currentIndexSong = useSelector((state: any) => state.playOrder);
  const { song, top, index } = props;
  const dispatch = useDispatch();
  const handleOnClickSong = () => {
    dispatch({ type: "PLAY", payload: true });
    dispatch({ type: "JUMP_TO", payload: index });
  };
  return (
    <div
      className={`p-[10px] group my-[10px] flex items-center  bg-dark-37 rounded-[15px] hover:bg-white-44 ${
        currentIndexSong === index && "bg-white-44"
      }`}
    >
      {top && (
        <div
          className={`max-w-[60px] w-full text-[25px] font-black text-center ${
            top === 1 && "text-blue"
          } ${top === 2 && "text-green"} ${top === 3 && "text-red"}  `}
        >
          {top}
        </div>
      )}
      <div className="w-[50%] flex items-center">
        <div
          className="w-[39px] h-[39px] relative  cursor-pointer rounded-[8px] overflow-hidden"
          onClick={handleOnClickSong}
        >
          <div className="absolute grid place-items-center inset-0 bg-dark-5 hidden group-hover:grid">
            {icon.play}
          </div>
          <img src={song.thumbnail} alt="thumbnail song" />
        </div>
        <p className="font-semibold ml-[25px]">{song.title}</p>
      </div>
      <div className="flex-1 flex">
        <p className="w-[70%]">{song.artistsNames}</p>
        <p className="">{TimeConvert(song.duration)} </p>
      </div>
      <div className="ml-[auto]">{icon.more}</div>
    </div>
  );
};
export default ChartSong;
