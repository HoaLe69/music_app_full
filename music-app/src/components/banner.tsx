import { useEffect, useState } from "react";
import { ISection } from "../utils/interfaces";
import { IBanner } from "../utils/interfaces";

interface Props {
  banners: ISection;
}

const Banner: React.FC<Props> = (props) => {
  let { items } = props.banners;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items?.length) {
      const lastIndex = items.length - 1;
      if (index > lastIndex) setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const timmerId = setTimeout(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearTimeout(timmerId);
  }, [index]);

  return (
    <div className="h-[373px] w-[686px] rounded-[10px] flex   overflow-hidden relative">
      {items?.map((banner: IBanner, bannerIndex: number) => {
        let position = "nextSlide";
        if (bannerIndex === index) position = "activeSlide";
        if (
          bannerIndex === index - 1 ||
          (index === 0 && bannerIndex === items.length - 1)
        )
          position = "lastSlide";
        return (
          <img
            key={bannerIndex}
            className={`slide_image ${position}`}
            src={banner.banner}
            alt="banner"
          />
        );
      })}
    </div>
  );
};
export default Banner;
