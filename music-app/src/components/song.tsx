import { icon } from "../assets/icon";
import { SongItf } from "../utils/interfaces";

interface Props {
  inforSong: SongItf;
}

const Song: React.FC<Props> = (props) => {
  const { inforSong } = props;
  return (
    <div className="h-[96px] mt-[14px] transition ease-in duration-100 group hover:opacity-[0.8] cursor-pointer flex bg-dark-bold items-center rounded-[20px] p-[17px]">
      <div className="w-[63px] rounded-[10px] overflow-hidden relative">
        <div className="absolute place-items-center inset-0 bg-dark-5 hidden group-hover:grid">
          {icon.play}
        </div>
        <img src={inforSong.thumbnail} alt="thumbnail song" />
      </div>
      <div className="ml-[14px]">
        <span className="text-[17px] block">{inforSong.title}</span>
        <span className="text-[12px] text-white-50">
          {inforSong.artists.reduce((acc, curr, index: number) => {
            return index === 0 ? acc + curr.name : acc + " , " + curr.name;
          }, "")}
        </span>
      </div>
      <div className="w-[37px] h-[37px] border-[2px] border-white-11 grid place-items-center rounded-full ml-[auto]">
        {icon.heart}
      </div>
    </div>
  );
};
export default Song;
