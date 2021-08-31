//const MainContainer = (props: IWatchListProps) => {
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import DematDetails from "../Account/DematDetails";
import UpdateMobileEmail from "../Account/UpdateMobileEmail";
import IPODetails from "../IPO/IPODetails";
import UpcomingIPODetails from "../IPO/UpcomingIPODetails";
import AccountSummary from "../PersonalDetails/AccountSummary";
import { PasswordSecurity } from "../PersonalDetails/PasswordSecurity";
import ProfileSummary from "../PersonalDetails/ProfileSummary";
import "../style.css";
import HoldingList from "./Holding/HoldingList";
import MarketWatch from "./MarketWatch/MarketWatchHeader";
import MarketWatchListContainer from "./MarketWatch/MarketWatchListContainer";
import MarketWatchPortfolio from "./MarketWatch/MarketWatchPortfolio";
import NetPositionList from "./NetPosition/NetPositionList";
import OrderList from "./OrderView/OrderList";
import TradeList from "./TradeView/TradeList";
import { useEffect } from "react";

const MainContainer = (props: any) => {
  const MenuClick = props;
  const mainContainer = useAppSelector((state) => state.mainContainer);
  // function renderRightContainer() {
  //   switch (mainContainer.rightContainer) {
  //     case 0:
  //       return (
  //         <div className="con_bottom">
  //           <NetPositionList></NetPositionList>
  //           <HoldingList></HoldingList>
  //           {/* <MarketPicture></MarketPicture> */}
  //         </div>
  //       );
  //     case 1:
  //       return (
  //         <div className="con_bottom">
  //           {/* <AdvancedChart></AdvancedChart> */}
  //         </div>
  //       );
  //     case 2:
  //       return (
  //         <div className="con_bottom">
  //           <HoldingList></HoldingList>
  //         </div>
  //       );
  //     case 3:
  //       return (
  //         <div className="con_bottom">
  //           <HoldingList></HoldingList>
  //         </div>
  //       );
  //     case 4:
  //       return (
  //         <div className="con_bottom">
  //           <OrderList></OrderList>
  //           <TradeList></TradeList>
  //         </div>
  //       );

  const personalContainer = useAppSelector((state) => state.personalContainer);

  const dispatch = useAppDispatch();
  function renderRightContainer() {
    if (mainContainer.IsPersonal) {
      switch (personalContainer.initialState.rightContainer) {
        case 0:
          return (
            <div className="con_bottom">
              <ProfileSummary></ProfileSummary>
            </div>
          );
        case 1:
          return (
            <div className="con_bottom">
              <AccountSummary></AccountSummary>
            </div>
          );
        case 2:
          return (
            <div className="con_bottom">
              <PasswordSecurity></PasswordSecurity>
            </div>
          );
        case 3:
          return (
            <div className="con_bottom">
              <DematDetails></DematDetails>
            </div>
          );
        case 4:
          return (
            <div className="con_bottom">
              <UpdateMobileEmail></UpdateMobileEmail>
            </div>
          );
        default:
          return (
            <div className="con_bottom">
              <ProfileSummary></ProfileSummary>
            </div>
          );
      }
    } else {
      switch (mainContainer.rightContainer) {
        case 0:
          return (
            <div className="con_bottom">
              <NetPositionList></NetPositionList>
              <HoldingList></HoldingList>
              {/* <MarketPicture></MarketPicture> */}
            </div>
          );
        case 1:
          return (
            <div className="con_bottom">
              {/* <AdvancedChart></AdvancedChart> */}
            </div>
          );
        case 2:
          return (
            <div className="con_bottom">
              <HoldingList></HoldingList>
            </div>
          );
        case 3:
          return (
            <div className="con_bottom">
              <NetPositionList></NetPositionList>
            </div>
          );
        case 4:
          return (
            <div className="con_bottom">
              <OrderList></OrderList>
              <TradeList></TradeList>
            </div>
          );
        case 6:
          return (
            <div className="con_bottom">
              <ProfileSummary></ProfileSummary>
            </div>
          );
        case 7:
          return (
            <div className="con_bottom">
              <IPODetails></IPODetails>
            </div>
          );
        case 8:
          return (
            <div className="con_bottom">
              <UpcomingIPODetails></UpcomingIPODetails>
            </div>
          );
        // case 9:
        //   return (
        //     <div className="con_bottom">
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
        <div className="mw_main mw_ver" id="mw_main">
          <MarketWatch></MarketWatch>
          <MarketWatchPortfolio nWatchList={1}></MarketWatchPortfolio>
          <MarketWatchListContainer></MarketWatchListContainer>
        </div>

        {renderRightContainer()}
        {/* {rendertempAccount()} */}
      </div>
    </div>
  );
};

export default MainContainer;
