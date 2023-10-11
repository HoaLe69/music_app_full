import { ISection } from "../utils/interfaces";
import { IBanner } from "../utils/interfaces";

interface Props {
  banners: ISection;
}

const Banner: React.FC<Props> = (props) => {
  const { items } = props.banners;
  return (
    <div className="h-[373px] w-[686px] rounded-[20px]  overflow-hidden relative">
      <div
        style={{ left: `0px`, transition: "all linear 1s" }}
        className="sliderWrap w-[10000%] h-full  relative"
      ></div>
    </div>
  );
};
export default Banner;
