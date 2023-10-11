import { SongItf } from "../utils/interfaces";
import { Link } from "react-router-dom";

interface Props {
  cardData: SongItf;
}

const CardPlayList: React.FC<Props> = (props) => {
  const { cardData } = props;
  return (
    <div className="w-full cursor-pointer">
      <Link to={`/playlist/${cardData.encodeId}`}>
        <div className="rounded-[25px]  relative">
          <img
            className="rounded-[25px] hover:scale-[0.98] transition-scale duration-300"
            src={cardData.thumbnail}
            alt="thumbnail playlist"
          />
          <div
            className="absolute top-3  w-full h-full z-[-1] bg-cover rounded-xl blur-lg scale-110 transition-opacity duration-300 opacity-100 text-white"
            style={{
              backgroundImage: `url(${cardData.thumbnail})`,
            }}
          ></div>
        </div>
      </Link>
      {!cardData.sortDescription && (
        <p className="truncate mt-[4px] font-medium text-[15px]">
          {cardData.title}
        </p>
      )}
      <p className="threedot text-[13px] text-white-50 mt-[3px] font-medium">
        {cardData.sortDescription}
      </p>
    </div>
  );
};
export default CardPlayList;
