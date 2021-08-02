import "../style.css";
import HoldingList from "./Holding/HoldingList";
import MarketPicture from "./MarketPicture/MarketPicture";
import MarketPictureDepth from "./MarketPicture/MarketPictureDepth";
import MarketPicturePrice from "./MarketPicture/MarketPicturePrice";
import MarketWatch from "./MarketWatch/MarketWatch";
import MarketWatchList from "./MarketWatch/MarketWatchList";
import MarketWatchPortfolio from "./MarketWatch/MarketWatchPortfolio";
import NetPositionList from "./NetPosition/NetPositionList";
const MainContainer = (props: any) => {
  const MenuClick = props;
  return (
    <div id="content">
      <div className="hdivided">
        <div className="mw_main mw_ver" id="mw_main">
          <MarketWatch></MarketWatch>
          <MarketWatchPortfolio></MarketWatchPortfolio>
          <MarketWatchList></MarketWatchList>
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
