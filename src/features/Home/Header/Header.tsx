import CSS from "csstype";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  dashboardContainer,
  orderContainer,
  holdingContainer,
  positionContainer,
  myprofileContainer,
} from "../MainContainer/mainContainerSlice";
import { ToggleMenuContainer } from "../Menu/MenuBarSlice";
import "./Header.css";
import MenuImage from "../../../assets/menu-ico.png";
//import { showmenuContainer } from "../Menu/MenuBarSlice";
import HSSocket from "../../WebSocket/HSSocket";

const Header = () => {
  const dispatch = useAppDispatch();
  const maincontainerState = useAppSelector((state) => state.mainContainer);
  const [flag, SetMenuflag] = useState(false);

  dispatch(ToggleMenuContainer(flag));

  function onDashBoard(e: any) {
    e.preventDefault();
    dispatch(dashboardContainer());
  }

  function onOrder(e: any) {
    e.preventDefault();
    dispatch(orderContainer());
  }

  function onHoldings(e: any) {
    e.preventDefault();
    dispatch(holdingContainer());
  }

  function onFunds(e: any) {
    e.preventDefault();
    dispatch(fundContainer());
  }

  function onPositions(e: any) {
    e.preventDefault();
    dispatch(positionContainer());
  }

  function onAccount(e: any) {
    e.preventDefault();
    dispatch(myprofileContainer());
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/Home">
        <img src="images/logo.png" alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item nav-search d-none d-lg-block ml-0">
            <div className="marketlive">
              <div className="niftymain">
                <div className="nname">Nifty 50</div>
                <div className="pgreen">10121.40</div>
                <div className="mpercent">0.27%</div>
              </div>
              <div className="sensexmain">
                <div className="nname">Sensex</div>
                <div className="pred">32998.65</div>
                <div className="mpercent">0.23%</div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto justify-content-end" id="menutxt">
          <li className="nav-item">
            <a
              className={
                "nav-link" +
                (maincontainerState.rightContainer === 0 ? " active" : "")
              }
              href=""
              onClick={onDashBoard}
            >
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link" +
                (maincontainerState.rightContainer === 3 ? " active" : "")
              }
              href=""
              onClick={onPositions}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link" +
                (maincontainerState.rightContainer === 4 ? " active" : "")
              }
              href=""
              onClick={onOrder}
            >
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link" +
                (maincontainerState.rightContainer === 5 ? " active" : "")
              }
              href=""
              onClick={onFunds}
            >
              Funds
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                "nav-link" +
                (maincontainerState.rightContainer === 6 ? " active" : "")
              }
              href=""
              onClick={onAccount}
            >
              Account
            </a>
          </li>

          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>  */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
function fundContainer(): any {
  throw new Error("Function not implemented.");
}
