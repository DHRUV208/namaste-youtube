import { useDispatch } from "react-redux";
import { HAMBURGER_MENU, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { toggleMenu } from "../utils/slices/appSlice";
import SearchBarSuggesstions from "./SearchBarSuggesstions";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="p-5 m-2 shadow-lg grid grid-flow-col">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src={HAMBURGER_MENU}
        />
        <img className="h-12 -my-2 m-2" alt="youtube_logo" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-10 px-10">
        <SearchBarSuggesstions />
      </div>
      <div>
        <img className="h-8" alt="user_icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
