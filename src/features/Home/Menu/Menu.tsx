import { $CombinedState } from "redux";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { loggedout } from "../../Login/userSlice";
import {
  holdingContainer,
  orderContainer,
  myprofileContainer,
} from "../MainContainer/mainContainerSlice";
import { profileContainer } from "../PersonalDetails/PersonalDetailsSlice";

const Menu = () => {
  const menuContainer = useAppSelector((state) => state.menuContainer);

  const dispatch = useAppDispatch();

  function OnProfileMenu() {
    //To do changes for menu opening and closing

    const output = document.getElementById("menu");
    if (output) output.style.width = "0px";

    dispatch(myprofileContainer());
    dispatch(profileContainer());
  }

  function OnOrder() {
    const output = document.getElementById("menu");
    if (output) output.style.width = "0px";
    dispatch(orderContainer());
  }

  function OnHoldings() {
    const output = document.getElementById("menu");
    if (output) output.style.width = "0px";
    dispatch(holdingContainer());
  }

  function OnLogout() {
    dispatch(loggedout());
  }

  if (menuContainer.toggleflag) {
    return (
      <div className="pushy" id="menu" style={{ width: "500px" }}>
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
            {" "}
            <a id="menuMyProfile" onClick={OnProfileMenu}>
              <span></span>My Profile
            </a>
          </li>

          <li>
            {" "}
            <a id="menuOrderBook" onClick={OnOrder}>
              <span></span>Order Book
            </a>
          </li>

          <li>
            {" "}
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
