import { icon } from "../assets/icon";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="bg-dark-bold flex flex-col h-[max-content] gap-[30px] w-[52px] items-center rounded-[32px] py-[25px]">
      <NavLink to="/">{icon.home}</NavLink>
      <NavLink to="/zingchart">{icon.zingchart}</NavLink>
      <NavLink to="/top">{icon.top}</NavLink>
    </div>
  );
};
export default SideBar;
