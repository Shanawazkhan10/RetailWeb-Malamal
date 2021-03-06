import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { loggedout } from "../../Login/userSlice";
import {
  holdingContainer,
  myprofileContainer,
  ipoContainer,
} from "../MainContainer/mainContainerSlice";
import { profileContainer } from "../PersonalDetails/PersonalDetailsSlice";
import { ToggleMenuContainer } from "./MenuBarSlice";
import "./Menu.css";

//import { closemenuContainer } from "./MenuBarSlice";

const Menu = () => {
  const menuContainer = useAppSelector((state) => state.menuContainer);

  const dispatch = useAppDispatch();

  function OnProfileMenu() {
    //To do changes for menu opening and closing
    dispatch(ToggleMenuContainer(false));
    dispatch(myprofileContainer());
    dispatch(profileContainer());
  }

  function OnIPO() {
    // const output = document.getElementById("menu");
    // if (output) output.style.width = "0px";
    dispatch(ToggleMenuContainer(false));
    dispatch(ipoContainer());
  }

  function OnHoldings() {
    dispatch(ToggleMenuContainer(false));
    dispatch(holdingContainer());
  }

  function OnLogout() {
    dispatch(ToggleMenuContainer(false));
    dispatch(loggedout());
  }

  if (menuContainer.toggleflag) {
    return (
      <div className="pushy" id="menu" style={{ width: "500px", zIndex: 9999 }}>
        <ul>
          <li>
            <div className="profile_info">
              <span data-clicked="true" className="menu_bk"></span>
              <div className="menu_pro_in">
                <span className="user_ico"></span>
                <span className="user_name">User</span>
                <span className="user_info"></span>
              </div>

              <strong id="BettorID"></strong>
              <small id="BettorStatus"></small>
            </div>
          </li>
          <li>
            <a id="menuMyProfile" onClick={OnProfileMenu}>
              <span></span>My Profile
            </a>
          </li>

          <li>
            <a id="menuIPO" onClick={OnIPO}>
              <span></span>IPO
            </a>
          </li>

          <li>
            <a id="menuHoldings" onClick={OnHoldings}>
              <span></span>Holdings
            </a>
          </li>

          <li id="menuAbout">
            <a id="menuAbout">
              <span></span>About
            </a>
          </li>
          <li>
            <div className="view_classNameic"></div>
          </li>
          <li id="menuLogout">
            <a id="menuLogOut" onClick={OnLogout}>
              <span></span>Logout
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Menu;
