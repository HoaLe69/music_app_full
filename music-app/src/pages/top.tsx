import topApi from "../api/top-api";
import { useState, useEffect } from "react";
import PlayList from "../components/playlist";
const Top: React.FC = () => {
  const [top, setTop] = useState([]);
  useEffect(() => {
    const getTop = async () => {
      const response = await topApi.getTop();
      setTop(response.data);
    };
    getTop();
  }, []);
  return (
    <div>
      <h1 className="text-[35px] font-black">Top 100</h1>
      {top.map((list, index: number) => {
        return <PlayList list={list} key={index} />;
      })}
    </div>
  );
};
export default Top;
