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

const MainContainer = (props: any) => {
  const MenuClick = props;
  const mainContainer = useAppSelector((state) => state.mainContainer);
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
      default:
        return null;
    }
  }
  return (
    <div id="content">
      <div className="hdivided">
        <div className="mw_main mw_ver" id="mw_main">
          <MarketWatch></MarketWatch>
          <MarketWatchPortfolio nWatchList={1}></MarketWatchPortfolio>
          <MarketWatchListContainer></MarketWatchListContainer>
        </div>
        {renderRightContainer()}
      </div>
    </div>
  );
};

export default MainContainer;
