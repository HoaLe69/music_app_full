import Header from "../components/header";
import SideBar from "../components/menu";
import Player from "../components/player";

type Children = {
  children: React.ReactNode;
};

const Default = ({ children }: Children) => {
  return (
    <div className="h-[100vh] bg-dark text-white overflow-hidden">
      <div className="max-w-[1320px] mx-[auto] my-[0] px-[20px]">
        <Header />
        <div className="flex  mt-[25px]">
          <SideBar />
          <div className="flex-1 px-[20px] pb-[160px] ml-[35px] h-[calc(100vh-73px)] overflow-auto overflow-x-hidden">
            {children}
          </div>
        </div>
      </div>
      <Player />
    </div>
  );
};
export default Default;
