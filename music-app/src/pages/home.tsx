import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import Banner from "../components/banner";
import { ISection } from "../utils/interfaces";
import ChartHome from "../components/chart-home";
import PlayList from "../components/playlist";
import { getHomeData } from "../redux/apiRequest";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state: any) => state.home?.dataHomepage);
  const pending = useSelector((state: any) => state.home?.pending);
  useEffect(() => {
    getHomeData(dispatch);
  }, []);
  console.log(homeData.playlist);
  return (
    <>
      {pending ? (
        <div className="w-full flex justify-center">
          <ReactLoading type="spin" color="#fff" width="10%" height="10%" />
        </div>
      ) : (
        <div>
          <div className="flex gap-[22px]">
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
