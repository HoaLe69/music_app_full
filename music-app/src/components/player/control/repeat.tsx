import { icon } from "../../../assets/icon";
const RepeatBtn = () => {
  const isActive = false;
  return (
    <span className={`icon ${isActive && "text-yellow"}`}>{icon.playLoop}</span>
  );
};

export default RepeatBtn;
