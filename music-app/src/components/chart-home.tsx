import { Link } from "react-router-dom";
import Song from "./song";
import { ISong } from "../utils/interfaces";
import { ISection } from "../utils/interfaces";

interface Props {
  chart: ISection;
}
const ChartHome: React.FC<Props> = (props) => {
  const { chart } = props;
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-bold">Top charts</h1>
        <Link to="/zingchart" className="hover:underline font-medium">
          See all
        </Link>
      </div>
      <div>
        {/* {chart.items.map((song: ISong, index: number) => { */}
        {/*   return <Song inforSong={song} key={index} />; */}
        {/* })} */}
      </div>
    </div>
  );
};
export default ChartHome;
