//const MainContainer = (props: IWatchListProps) => {
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import DematDetails from "../Account/DematDetails";
import UpdateMobileEmail from "../Account/UpdateMobileEmail";
import IPODetails from "../IPO/IPODetails";
import UpcomingIPODetails from "../IPO/UpcomingIPODetails";
import AccountSummary from "../PersonalDetails/AccountSummary";
import { PasswordSecurity } from "../PersonalDetails/PasswordSecurity";
import ProfileSummary from "../PersonalDetails/ProfileSummary";
import MainDashboard from "./Dashboard/MainDashboard";
import HoldingList from "./Holding/HoldingList";
import MarketWatch from "./MarketWatch/MarketWatchHeader";
import MarketWatchListContainer from "./MarketWatch/MarketWatchListContainer";
import MarketWatchPortfolio from "./MarketWatch/MarketWatchPortfolio";
import NetPositionList from "./NetPosition/NetPositionList";
import OrderList from "./OrderView/OrderList";
import RightContainer from "./RightContainer";
import TradeList from "./TradeView/TradeList";

const MainContainer = (props: any) => {
  const MenuClick = props;

  const personalContainer = useAppSelector((state) => state.personalContainer);

  const dispatch = useAppDispatch();
  function renderRightContainer() {
    // if (mainContainer.IsPersonal) {
    //   switch (personalContainer.initialState.rightContainer) {
    //     case 0:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <ProfileSummary></ProfileSummary>
    //         </div>
    //       );
    //     case 1:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <AccountSummary></AccountSummary>
    //         </div>
    //       );
    //     case 2:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <PasswordSecurity></PasswordSecurity>
    //         </div>
    //       );
    //     case 3:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <DematDetails></DematDetails>
    //         </div>
    //       );
    //     case 4:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <UpdateMobileEmail></UpdateMobileEmail>
    //         </div>
    //       );
    //     default:
    //       return (
    //         <div className="col-md-6 col-lg-8 col-xl-9">
    //           <ProfileSummary></ProfileSummary>
    //         </div>
    //       );
    //   }
    // }
  }

  useEffect(() => {
    window.addEventListener("beforeunload", onWindowCLose);
  }, []);

  function onWindowCLose() {
    //alert("Window closing");
    //dispatch(loggedout());
  }
  return (
    <div className="container-fluid" style={{ marginTop: "25px" }}>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="plate-2 fadeIn-element">
            <div className="b-listing">
              <MarketWatch></MarketWatch>
              <MarketWatchPortfolio nWatchList={1}></MarketWatchPortfolio>
              <MarketWatchListContainer></MarketWatchListContainer>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-8 col-xl-9">
          <RightContainer></RightContainer>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
