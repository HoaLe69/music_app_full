import PlayControl from "./control";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SongAudioItf, SongItf } from "../../utils/interfaces";
import songApi from "../../api/song-api";

const Player = () => {
  const dispatch = useDispatch();
  const audio = useRef<HTMLAudioElement | null>(null);

  const songInfor: SongAudioItf = useSelector((state: any) => state.song);
  const playList: SongItf[] = useSelector((state: any) => state.playList);
  const isRepeat = useSelector((state: any) => state.songControl.isRepeat);
  const currentSongIndex = useSelector((state: any) => state.playOrder);

  const handleOnTimeEnd = () => {
    if (isRepeat) {
      audio?.current?.play();
    }
  };
  useEffect(() => {
    if (playList.length > 0) {
      const { encodeId, title, thumbnail, duration, artistsNames, hasLyric } =
        playList[currentSongIndex];
      const getSong = async () => {
        const response = await songApi.getSong(encodeId);
        const songInformation = {
          audioSrc: response?.data[128],
          vip: response?.data[320],
          title,
          thumbnail,
          duration,
          artistsNames,
          hasLyric,
        };
        dispatch({ type: "PLAY", payload: true });
        dispatch({ type: "CHOOSE_SONG", payload: songInformation });
      };
      getSong();
    }
  }, [currentSongIndex, dispatch, playList]);
  return (
    <>
      <PlayControl audio={audio.current} songDetail={songInfor} />
      <audio
        onEnded={handleOnTimeEnd}
        ref={audio}
        src={songInfor.audioSrc}
        autoPlay
      ></audio>
    </>
  );
};
export default Player;
