import { useEffect } from "react";
import PlayList from "../components/playlist";
import { getTopData } from "../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const Top: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(
    (state: any) => state.top.getPlayListTop.isFetching,
  );
  const playListTop = useSelector(
    (state: any) => state.top.getPlayListTop.playListTop,
  );

  useEffect(() => {
    getTopData(dispatch);
  }, []);
  return (
    <>
      {pending ? (
        <div className="flex justify-center">
          <BeatLoader color="#fff" />
        </div>
      ) : (
        <div>
          <h1 className="text-[35px] font-black">Top 100</h1>
          {playListTop?.data?.map((list: any, index: number) => {
            return <PlayList list={list} key={index} />;
          })}
        </div>
      )}
    </>
  );
};
export default Top;
