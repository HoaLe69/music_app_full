import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/banner";
import { ISection } from "../utils/interfaces";
import { BeatLoader } from "react-spinners";
import ChartHome from "../components/chart-home";
import PlayList from "../components/playlist";
import { getHomeData } from "../redux/apiRequest";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state: any) => state.home?.dataHomepage);
  const pending = useSelector((state: any) => state.home?.pending);
  useEffect(() => {
    getHomeData(dispatch);
  }, [dispatch]);
  return (
    <>
      {pending ? (
        <div className="w-full  flex justify-center">
          <BeatLoader color="#fff" />
        </div>
      ) : (
        <div>
          <div className="flex gap-[22px] flex-row ">
            <Banner banners={homeData.banner} />
            <ChartHome chart={homeData.RTChart} />
          </div>
          {homeData?.playlist.map((list: ISection, index: number) => {
            return <PlayList key={index} list={list} />;
          })}
        </div>
      )}
    </>
  );
};
export default Home;
