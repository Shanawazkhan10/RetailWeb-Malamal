import { IWatchListProps } from "../../../types/IWatchListProps";
import "../style.css";
import HoldingList from "./Holding/HoldingList";
import MarketPicture from "./MarketPicture/MarketPicture";

import MarketWatch from "./MarketWatch/MarketWatchHeader";
import MarketWatchListContainer from "./MarketWatch/MarketWatchListContainer";
import MarketWatchList from "./MarketWatch/MarketWatchListContainer";
import MarketWatchPortfolio from "./MarketWatch/MarketWatchPortfolio";
import NetPositionList from "./NetPosition/NetPositionList";
const MainContainer = (props: IWatchListProps) => {
  const MenuClick = props;
  return (
    <div id="content">
      <div className="hdivided">
        <div className="mw_main mw_ver" id="mw_main">
          <MarketWatch></MarketWatch>
          <MarketWatchPortfolio nWatchList={1}></MarketWatchPortfolio>
          <MarketWatchListContainer></MarketWatchListContainer>
        </div>
        <div className="con_bottom">
          <NetPositionList></NetPositionList>
          <HoldingList></HoldingList>
          {/* <MarketPicture></MarketPicture> */}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
