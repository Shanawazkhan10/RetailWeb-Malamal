import { MouseEvent } from "react";
import CSS from "csstype";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  dashboardContainer,
  orderContainer,
  holdingContainer,
  positionContainer,
} from "../MainContainer/mainContainerSlice";
import { showmenuContainer } from "../Menu/MenuBarSlice";
import { socket1 } from "./../../WebSocket/Socket";
import HSSocket from "../../WebSocket/HSSocket";

const ContainerStyle: CSS.Properties = {
  display: "flex",
};

const WatchStyle: CSS.Properties = {
  float: "left",
  margin: "0px 100px 0px 0px",
};

const Header = () => {
  const dispatch = useAppDispatch();

  const [flag, SetMenuflag] = useState(false);

  dispatch(showmenuContainer(flag));

  function onDashBoard() {
    dispatch(dashboardContainer());
  }

  function onOrder() {
    dispatch(orderContainer());
  }

  function onHoldings() {
    dispatch(holdingContainer());
  }

  function onPositions() {
    dispatch(positionContainer());
  }

  return (
    <header id="header">
      <div className="wegas-logo">
        <a id="ancLogo"></a>
      </div>
      <div id="SearchBarIndex">
        <div className="sec-search">
          <div className="sec-search-in">
            {/* <input id="srchname" type="text" autocomplete="off" placeholder="Search eg: gold mcx, infy bse, nifty fut" className="ui-autocomplete-input"></input> */}
          </div>
        </div>
      </div>

      <div id="container" style={ContainerStyle}>
        <div id="hrwatch_id" className="hrwatch" style={WatchStyle}>
          <span className="hrw_img"></span>
          <ul>
            <li className="block">
              <span id="spnBlockValue">5,15,896.60</span>
              <span>Blocked Margin</span>
            </li>
            <li className="avail">
              <span id="spnTotUtilizeValue">99,99,94,84,102.40</span>
              <span>Available Margin</span>
            </li>

            <li className="limit">
              <span id="spnLimitValue">99,99,99,99,999.00</span>
              <span>Funds Deposited</span>
            </li>
            <li className="limit">
              {/* <button
                className="btn_mw_overlay_2 btn_buy"
                title="Chart(C )"
                onClick={() => socket1()}
              /> */}
              <HSSocket></HSSocket>
            </li>
          </ul>
        </div>
        <div
          id="hrnavmenu"
          className="hrnavmenu"
          style={{
            fontFamily: "sans-serif",
            fontSize: "small",
            marginTop: "20px",
          }}
        >
          <ul>
            <li
              className="dashboard"
              style={{ float: "left", marginRight: "5rem" }}
            >
              <a href="#" onClick={onDashBoard} style={{ color: "orange" }}>
                <span id="spnDashBoard">Dashboard</span>
              </a>
            </li>

            <li
              className="orders"
              style={{ float: "left", marginRight: "5rem" }}
            >
              <a href="#" onClick={onOrder} style={{ color: "orange" }}>
                <span id="spnOrders">Orders</span>
              </a>
            </li>

            <li
              className="holdings"
              style={{ float: "left", marginRight: "5rem" }}
            >
              <a href="#" onClick={onHoldings} style={{ color: "orange" }}>
                <span id="spnHoldings">Holdings</span>
              </a>
            </li>

            <li
              className="positions"
              style={{ float: "left", marginRight: "5rem" }}
            >
              <a href="#" onClick={onPositions} style={{ color: "orange" }}>
                <span id="spnPositions">Positions</span>
              </a>
            </li>
            <button
              id="btnMenu"
              title="Menu"
              style={{
                float: "right",
                height: "30px",
                width: "30px",
                marginRight: "15rem",
              }}
              onClick={() => SetMenuflag(!flag)}
            ></button>
          </ul>
        </div>
      </div>

      <ul id="ml-auto_id" className="nav ml-auto">
        <li className="nav-item dropdown nw_note">
          <a className="nav-link msg_panel">
            <i></i>
          </a>
          <div
            className="dropdown-menu navbar-dropdown dropdown-menu-right"
            aria-labelledby="notificationDropdown"
          >
            <div className="dropdown-header">
              <h6 className="dropdown-title">Notifications</h6>
            </div>
            <div className="dropdown-body">
              <div className="dropdown-list">
                <small className="name">Storage Full</small>{" "}
                <small className="content-text">
                  Server storage almost full
                </small>
              </div>
              <div className="dropdown-list">
                <small className="name">Upload Completed</small>{" "}
                <small className="content-text">
                  3 Files uploded successfully
                </small>
              </div>
              <div className="dropdown-list">
                <small className="name">Authentication Required</small>{" "}
                <small className="content-text">
                  Please verify your password to continue using cloud services
                </small>
              </div>
            </div>
            <div className="dropdown-footer">
              <a href="#">View All</a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link sett-panel">
            <i></i>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link help-panel">
            <i></i>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
