import { IWatchListProps } from "../../../types/IWatchListProps";
import HoldingList from "./Holding/HoldingList";
import MarketPicture from "./MarketPicture/MarketPicture";

import MarketWatch from "./MarketWatch/MarketWatchHeader";
import MarketWatchListContainer from "./MarketWatch/MarketWatchListContainer";
import MarketWatchList from "./MarketWatch/MarketWatchListContainer";
import MarketWatchPortfolio from "./MarketWatch/MarketWatchPortfolio";
import NetPositionList from "./NetPosition/NetPositionList";
//const MainContainer = (props: IWatchListProps) => {

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
// import AdvancedChart from "../Chart/AdvancedChart";
import OrderView from "./OrderView/Order";
import OrderList from "./OrderView/OrderList";
import TradeList from "./TradeView/TradeList";
import ProfileSummary from "../PersonalDetails/ProfileSummary";
import { ChangePassword } from "../../Login/ChangePassword";
import AccountSummary from "../PersonalDetails/AccountSummary";
import { PasswordSecurity } from "../PersonalDetails/PasswordSecurity";
import DematDetails from "../Account/DematDetails";
import UpdateMobileEmail from "../Account/UpdateMobileEmail";
import IPODetails from "../IPO/IPODetails";
import UpcomingIPODetails from "../IPO/UpcomingIPODetails";
import { useEffect } from "react";
import { loggedout } from "../../Login/userSlice";
import MainDashboard from "./Dashboard/MainDashboard";

const MainContainer = (props: any) => {
  const MenuClick = props;
  const mainContainer = useAppSelector((state) => state.mainContainer);

  const personalContainer = useAppSelector((state) => state.personalContainer);

  const dispatch = useAppDispatch();
  function renderRightContainer() {
    if (mainContainer.IsPersonal) {
      switch (personalContainer.initialState.rightContainer) {
        case 0:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <ProfileSummary></ProfileSummary>
            </div>
          );
        case 1:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <AccountSummary></AccountSummary>
            </div>
          );
        case 2:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <PasswordSecurity></PasswordSecurity>
            </div>
          );
        case 3:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <DematDetails></DematDetails>
            </div>
          );
        case 4:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <UpdateMobileEmail></UpdateMobileEmail>
            </div>
          );
        default:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <ProfileSummary></ProfileSummary>
            </div>
          );
      }
    } else {
      switch (mainContainer.rightContainer) {
        case 0:
          return <MainDashboard></MainDashboard>;
        case 1:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              {/* <AdvancedChart></AdvancedChart> */}
            </div>
          );
        case 2:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <HoldingList></HoldingList>
            </div>
          );
        case 3:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <NetPositionList></NetPositionList>
            </div>
          );
        case 4:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <OrderList></OrderList>
              <TradeList></TradeList>
            </div>
          );
        case 6:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <ProfileSummary></ProfileSummary>
            </div>
          );
        case 7:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <IPODetails></IPODetails>
            </div>
          );
        case 8:
          return (
            <div className="col-md-6 col-lg-8 col-xl-9">
              <UpcomingIPODetails></UpcomingIPODetails>
            </div>
          );
        // case 9:
        //   return (
        //     <div className="col-md-6 col-lg-8 col-xl-9">
        //       <MarketPicture></MarketPicture>
        //     </div>
        //   );
        default:
          return null;
      }
    }
  }

  useEffect(() => {
    window.addEventListener("beforeunload", onWindowCLose);
  }, []);

  function onWindowCLose() {
    //alert("Window closing");
    //dispatch(loggedout());
  }
  return (
    <div id="content">
      <div className="hdivided" style={{ display: "flex" }}>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <MarketWatch></MarketWatch>
          {/*}  <MarketWatchPortfolio nWatchList={1}></MarketWatchPortfolio>
          <MarketWatchListContainer></MarketWatchListContainer>
        </div> */}
        </div>
        {renderRightContainer()}
        {/* {rendertempAccount()} */}
      </div>
    </div>
  );
};

export default MainContainer;
