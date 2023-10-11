import { Link } from "react-router-dom";
import Song from "./song";
import { SongItf } from "../utils/interfaces";
import { Section } from "../utils/interfaces";

interface Props {
  chart: Section;
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
        {chart.items.slice(0, 3).map((song: SongItf, index: number) => {
          return <Song inforSong={song} key={index} />;
        })}
      </div>
    </div>
  );
};
export default ChartHome;
