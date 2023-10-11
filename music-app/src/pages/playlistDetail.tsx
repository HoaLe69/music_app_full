import { useParams } from "react-router-dom";
import zingApi from "../api/zing-api";
import { useEffect, useState } from "react";
import { PlaylistItf } from "../utils/interfaces";
import { icon } from "../assets/icon";
import { secondToDate } from "../utils/convertTime";
import ChartSong from "../components/chartSong";
import { useDispatch } from "react-redux";

const PlayListDetail = () => {
  const [playList, setPlayList] = useState<PlaylistItf>();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const getPlaylist = async () => {
      if (id) {
        const response = await zingApi.getPlaylistDetail(id);
        dispatch({ type: "CHOOSE_LIST", payload: response.data?.song?.items });
        setPlayList(response.data);
      }
    };
    getPlaylist();
  }, []);
  return (
    <div>
      <div className="flex gap-[27px]">
        <div className="w-[284px] rounded-[25px] relative overflow-hidden">
          <img src={playList?.thumbnailM} alt={playList?.aliasTitle} />
        </div>
        <div className="flex flex-col flex-1 justify-end gap-[20px]">
          <p className="text-green-blur text-[35px] font-bold">
            {playList?.title}
          </p>
          <p className="text-light text-[14px]">{playList?.description}</p>
          <p className="text-light text-[14px]">
            Playlist by <strong>{playList?.artistsNames}</strong>
          </p>
          <p className="text-light text-[14px]">
            Updated at {secondToDate(playList?.contentLastUpdate)}
          </p>
          <div className="flex gap-[9px] mt-[20px]">
            <button className="btn hover:scale-95 transition-all">
              <span className="p-[2px] rounded-full bg-yellow">
                {icon.play}
              </span>
              Play all
            </button>
            <button className="btn hover:cursor-not-allowed">
              <span>{icon.addPlaylist}</span>Add to collection
            </button>
            <span className="p-[12px] block flex items-center justify-center bg-white-7 rounded-full">
              {icon.heartFilled}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        {playList?.song?.items.map((song, index: number) => {
          return <ChartSong song={song} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};
export default PlayListDetail;
