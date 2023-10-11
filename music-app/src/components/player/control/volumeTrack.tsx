import { icon } from "../../../assets/icon";
import { useRef, useState } from "react";

interface Props {
  audio: HTMLAudioElement | null;
}

const Volume: React.FC<Props> = (props) => {
  const { audio } = props;
  const init = Number(localStorage.getItem("volume")) || 0.5;
  const [width, setWidth] = useState<number>(init * 100);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const slider = useRef<HTMLDivElement>(null);
  const handleOnClickVolume = (e: React.MouseEvent<HTMLDivElement>) => {
    if (slider?.current) {
      const trackWidth = slider?.current?.offsetWidth;
      const percent =
        ((e.clientX - slider?.current?.getBoundingClientRect().left) /
          trackWidth) *
        100;
      if (audio) {
        const audioVolume = percent / 100;
        if (audioVolume >= 0 && audioVolume <= 1) {
          audio!.volume = audioVolume;
        }
        localStorage.setItem("volume", JSON.stringify(audio?.volume));
      }
      setWidth(percent);
    }
  };
  const handleOnClickMuted = () => {
    const volume = localStorage.getItem("volume") || 0.5;
    setIsMuted(!isMuted);
    if (!isMuted) {
      setWidth(0);
      audio!.volume = 0;
    } else {
      setWidth(Number(volume) * 100);
      audio!.volume = Number(volume);
    }
  };

  return (
    <div className="flex items-center w-[10%] gap-[10px]">
      <span onClick={handleOnClickMuted} className="cursor-pointer">
        {isMuted ? icon.muteVolume : icon.volume}
      </span>
      <div
        className="track-wrap group"
        ref={slider}
        onClick={handleOnClickVolume}
      >
        <div
          className="absolute bg-yellow top-0 left-0 h-full rounded-[50px]"
          style={{ width: `${width}%` }}
        >
          <div className="h-[12px] hidden group-hover:block border-2 border-solid border-white w-[12px]  bg-yellow rounded-full absolute right-0 top-[50%] translate-y-[-50%] translate-x-[50%]"></div>
        </div>
      </div>
    </div>
  );
};
export default Volume;
