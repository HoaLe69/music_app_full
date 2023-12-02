import ChartSong from "../components/chartSong";
import { useEffect } from "react";
import { ISong } from "../utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { getZingChart } from "../redux/apiRequest";
import { BeatLoader } from "react-spinners";

const ZingChart: React.FC = () => {
  const dispatch = useDispatch();
  const charts = useSelector((state: any) => state.top.getZingChart.chart);
  const pending = useSelector(
    (state: any) => state.top.getZingChart.isFetching,
  );
  useEffect(() => {
    getZingChart(dispatch);
  }, []);
  return (
    <>
      {pending ? (
        <div className="flex justify-center">
          <BeatLoader color="#fff" />
        </div>
      ) : (
        <div>
          {charts?.RTChart?.items?.map((song: ISong, index: number) => {
            return (
              <ChartSong top={index + 1} key={song.encodeId} song={song} />
            );
          })}
        </div>
      )}
    </>
  );
};
export default ZingChart;
