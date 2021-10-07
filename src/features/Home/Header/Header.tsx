import { useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loggedout } from "../../Login/userSlice";
import {
  dashboardContainer,
  fundContainer,
  holdingContainer,
  myprofileContainer,
  orderContainer,
  positionContainer,
} from "../MainContainer/mainContainerSlice";
import { ToggleMenuContainer } from "../Menu/MenuBarSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const maincontainerState = useAppSelector((state) => state.mainContainer);
  const [flag, SetMenuflag] = useState(false);
  const history = useHistory();

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

  function onLogout(e: any) {
    e.preventDefault();
    dispatch(loggedout());
    history.push("/login");
  }

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top d-flex flex-row">
    //   <a className="navbar-brand" href="/Home">
    //     <img src="images/logo.png" alt="logo" />
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav">
    //       <li className="nav-item nav-search d-none d-lg-block ml-0">
    //         <HeaderIndices></HeaderIndices>
    //       </li>
    //     </ul>
    //     <ul className="navbar-nav ml-auto justify-content-end" id="menutxt">
    //       <li className="nav-item">
    //         <a
    //           className={
    //             "nav-link" +
    //             (maincontainerState.rightContainer === 0 ? " active" : "")
    //           }
    //           href=""
    //           onClick={onDashBoard}
    //         >
    //           Dashboard <span className="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a
    //           className={
    //             "nav-link" +
    //             (maincontainerState.rightContainer === 3 ||
    //             maincontainerState.rightContainer === 2
    //               ? " active"
    //               : "")
    //           }
    //           href=""
    //           onClick={onPositions}
    //         >
    //           Portfolio
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a
    //           className={
    //             "nav-link" +
    //             (maincontainerState.rightContainer === 4 ? " active" : "")
    //           }
    //           href=""
    //           onClick={onOrder}
    //         >
    //           Orders
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a
    //           className={
    //             "nav-link" +
    //             (maincontainerState.rightContainer === 5 ? " active" : "")
    //           }
    //           href=""
    //           onClick={onFunds}
    //         >
    //           Funds
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a
    //           className={
    //             "nav-link" +
    //             (maincontainerState.rightContainer === 6 ? " active" : "")
    //           }
    //           href=""
    //           onClick={onAccount}
    //         >
    //           Account
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className={"nav-link"} href="" onClick={onLogout}>
    //           Logout
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="navbar navbar-dark navbar-expand justify-content-center">
      <a className="navbar-brand" href="#">
        <img src="images/logo.svg" alt="logo" />
      </a>
      <div className="container-fluid">
        <ul className="navbar-nav nav-justified text-center" id="menutxt">
          <li className="nav-item">
            <a
              href="#"
              className={
                maincontainerState.rightContainer === 0
                  ? "active "
                  : "" + "nav-link d-flex flex-column"
              }
              onClick={onDashBoard}
            >
              <img
                className="d-block d-sm-none"
                src="images/close.svg"
                width="20"
              />
              <span className="d-none d-sm-inline">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="portfolio.html"
              className={
                maincontainerState.rightContainer === 2 ||
                maincontainerState.rightContainer === 3
                  ? "active "
                  : "" + "nav-link d-flex flex-column"
              }
              onClick={onPositions}
            >
              <img
                className="d-block d-sm-none"
                src="images/close.svg"
                width="20"
              />
              <span className="d-none d-sm-inline">portfolio</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="orders.html"
              className={
                maincontainerState.rightContainer === 4
                  ? "active "
                  : "" + "nav-link d-flex flex-column"
              }
              onClick={onOrder}
            >
              <img
                className="d-block d-sm-none"
                src="images/close.svg"
                width="20"
              />
              <span className="d-none d-sm-inline">orders</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={
                maincontainerState.rightContainer === 5
                  ? "active "
                  : "" + "nav-link d-flex flex-column"
              }
              onClick={onFunds}
            >
              <img
                className="d-block d-sm-none"
                src="images/close.svg"
                width="20"
              />
              <span className="d-none d-sm-inline">funds</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={
                maincontainerState.rightContainer === 6
                  ? "active "
                  : "" + "nav-link d-flex flex-column"
              }
              // onClick={onAccount}
            >
              <img
                className="d-block d-sm-none"
                src="images/close.svg"
                width="20"
              />
              <span className="d-none d-sm-inline">account</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link d-flex flex-column"
              onClick={onLogout}
            >
              <img
                className="d-block d-sm-none"
                src="images/close.svg"
                width="20"
              />
              <span className="d-none d-sm-inline">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
