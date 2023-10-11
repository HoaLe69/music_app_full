import PlayControl from "./control";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SongAudioItf, ISong } from "../../utils/interfaces";
import songApi from "../../api/song-api";

const Player = () => {
  return (
    <>
      {/* <PlayControl audio={audio.current} songDetail={songInfor} /> */}
      {/* <audio */}
      {/*   onEnded={handleOnTimeEnd} */}
      {/*   ref={audio} */}
      {/*   src={songInfor.audioSrc} */}
      {/*   autoPlay */}
      {/* ></audio> */}
    </>
  );
};
export default Player;
