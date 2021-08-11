import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { loggedout } from "../../Login/userSlice";
import {
  holdingContainer,
  orderContainer,
} from "../MainContainer/mainContainerSlice";

const Menu = () => {
  const dispatch = useAppDispatch();

  function OnOrder() {
    dispatch(orderContainer());
  }

  function OnHoldings() {
    dispatch(holdingContainer());
  }

  function OnLogout() {
    dispatch(loggedout());
  }

  const menuContainer = useAppSelector((state) => state.menuContainer);

  if (menuContainer.toggleflag) {
    return (
      <div className="pushy" id="menu" style={{ right: "0px" }}>
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
            <a id="menuMyProfile">
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
