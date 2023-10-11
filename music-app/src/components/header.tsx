import { icon } from "../assets/icon";
const Header: React.FC = () => {
  return (
    <header className="flex h-[73px] items-center">
      <div className="w-[52px] flex justify-center">{icon.logo}</div>
      <div className="flex px-[20px] items-center ml-[35px]">
        {icon.search}
        <input
          type="text"
          placeholder="Search"
          className="bg-dark text-[14px] text-white-25 px-[20px]"
          name="search"
          id="search"
        />
      </div>
    </header>
  );
};
export default Header;
