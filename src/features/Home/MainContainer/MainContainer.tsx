import { IWatchListProps } from "../../../types/IWatchListProps";
import "../style.css";
import HoldingList from "./Holding/HoldingList";
import MarketPicture from "./MarketPicture/MarketPicture";

import MarketWatch from "./MarketWatch/MarketWatchHeader";
import MarketWatchListContainer from "./MarketWatch/MarketWatchListContainer";
import MarketWatchList from "./MarketWatch/MarketWatchListContainer";
import MarketWatchPortfolio from "./MarketWatch/MarketWatchPortfolio";
import NetPositionList from "./NetPosition/NetPositionList";
//const MainContainer = (props: IWatchListProps) => {

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import AdvancedChart from "../Chart/AdvancedChart";
import OrderView from "./OrderView/Order";
import OrderList from "./OrderView/OrderList";
import TradeList from "./TradeView/TradeList";
import Menu from "../Menu/Menu";
import ProfiePhoto from "../PersonalDetails/ProflePhoto";
import PersonalDetails from "../PersonalDetails/ProfileSummary";
import DematDetails from "../PersonalDetails/DematDetails";
import NetPositionV from "./NetPosition/NetPosition";
import AccountSummary from "../PersonalDetails/AccountSummary";

const MainContainer = (props: any) => {
  const MenuClick = props;
  const mainContainer = useAppSelector((state) => state.mainContainer);

  const personalContainer = useAppSelector((state) => state.personalContaner);

  function rendertempAccount() {
    switch (personalContainer.rightContainer) {
      case 0:
        return (
          <div className="con_bottom">
            <PersonalDetails></PersonalDetails>
          </div>
        );
      case 1:
        return (
          <div className="con_bottom">
            <DematDetails></DematDetails>
          </div>
        );
      case 2:
        return (
          <div className="con_bottom">
            <AccountSummary></AccountSummary>
          </div>
        );
    }
  }

  function renderRightContainer() {
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
            <AdvancedChart></AdvancedChart>
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
            <PersonalDetails></PersonalDetails>
          </div>
        );
      case 7:
        return (
          <div className="con_bottom">
            <DematDetails></DematDetails>
          </div>
        );

      default:
        return null;
    }
  }
  return (
    <div id="content">
      <div className="hdivided" style={{ display: "flex" }}>
        <div className="mw_main mw_ver" id="mw_main">
          <MarketWatch></MarketWatch>
          <MarketWatchPortfolio nWatchList={1}></MarketWatchPortfolio>
          <MarketWatchListContainer></MarketWatchListContainer>
        </div>
        {/* {renderRightContainer()} */}
        {rendertempAccount()}
        {/* <div className="con_bottom">
          <PersonalDetails></PersonalDetails>
        </div> */}
      </div>
    </div>
  );
};

export default MainContainer;
