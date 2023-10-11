import { ISection } from "../utils/interfaces";
import { ISong } from "../utils/interfaces";
import CardPlayList from "./cardlist";
interface Props {
  list: ISection;
}
const PlayList: React.FC<Props> = (props) => {
  const { list } = props;
  return (
    <div className="mt-[40px]">
      <h2 className="text-[24px] font-bold">{list.title}</h2>
      <div className="mt-[13px]">
        <div className="grid grid-cols-5 gap-[30px]">
          {list.items.map((card: ISong, index: number) => {
            return <CardPlayList cardData={card} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default PlayList;
