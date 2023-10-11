import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

interface Props {
  audio: HTMLAudioElement | null;
}
const TrackProgress: React.FC<Props> = (props) => {
  const { audio } = props;
  const dispatch = useDispatch();
  const [widthBar, setWidthBar] = useState<number>(0);
  const slider = useRef<HTMLDivElement>(null);
  const handleOnTimeUpdate = () => {
    if (audio) {
      const percent = (audio?.currentTime / audio?.duration) * 100;
      setWidthBar(percent);
    }
  };
  const handleOnClickTrackBar = (e: React.MouseEvent<HTMLDivElement>) => {
    if (slider?.current) {
      const trackWidth = slider?.current?.offsetWidth;
      const percent =
        ((e.clientX - slider?.current?.getBoundingClientRect().left) /
          trackWidth) *
        100;
      if (audio) {
        audio!.currentTime = (percent / 100) * audio?.duration;
        audio?.play();
        dispatch({ type: "PLAY", payload: true });
      }
      setWidthBar(percent);
    }
  };
  audio?.addEventListener("timeupdate", handleOnTimeUpdate);
  return (
    <div
      ref={slider}
      onClick={handleOnClickTrackBar}
      className="h-[4px] bg-white-4 group rounded-[50px] relative cursor-pointer"
    >
      <div
        className="absolute h-full bg-yellow rounded-[50px]"
        style={{ width: `${widthBar}%` }}
      >
        <div className="w-[12px] hidden h-[12px] group-hover:block bg-yellow rounded-full absolute right-0 translate-x-[50%] top-[50%] translate-y-[-50%] border-2 border-solid border-white"></div>
      </div>
    </div>
  );
};
export default TrackProgress;
