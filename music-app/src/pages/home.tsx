import homeApi from "../api/home-api";
import { useEffect, useState } from "react";
import Banner from "../components/banner";
import { Section, HomeData } from "../utils/interfaces";
import ChartHome from "../components/chart-home";
import PlayList from "../components/playlist";
const Home: React.FC = () => {
  const [dataHome, setDataHome] = useState<HomeData>({
    playList: [],
    banner: {
      sectionId: "",
      items: [],
      title: "",
      viewType: "",
      link: "",
      sectionType: " ",
    },
    RTChart: {
      sectionId: "",
      items: [],
      sectionType: "",
    },
  });
  useEffect(() => {
    const getChartHome = async () => {
      const response = await homeApi.getDataHome();
      const filter: HomeData = {
        playList: [],
        banner: {
          sectionId: "",
          items: [],
          title: "",
          viewType: "",
          link: "",
          sectionType: " ",
        },
        RTChart: {
          sectionId: "",
          items: [],
          sectionType: "",
        },
      };
      response.data.items.forEach((data: Section) => {
        if (data.sectionType === "playlist") filter.playList.push(data);
        if (data.sectionType === "banner") filter.banner = { ...data };
        if (data.sectionType === "RTChart") filter.RTChart = { ...data };
      });
      setDataHome(filter);
    };
    getChartHome();
  }, []);
  return (
    <div>
      <div className="flex gap-[22px]">
        <Banner banners={dataHome.banner} />
        <ChartHome chart={dataHome.RTChart} />
      </div>
      {dataHome.playList.map((list, index: number) => {
        return <PlayList key={index} list={list} />;
      })}
    </div>
  );
};
export default Home;
