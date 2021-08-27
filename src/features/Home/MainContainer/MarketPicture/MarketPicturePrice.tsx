import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import "../../style.css";

const MarketPicturePrice = (props: { TokenInfo: IMarketWatchTokenInfo }) => {
  return (
    <div id="tblMarketPictureHeaderopenprice">
      <div>
        <div id="tblMarketPictureHeaderopenpriceId">
          {/* <div className="MarketPicturePricenew">
            <label>LTP:</label>
            <label style={{ color: "#00ff00" }}> 74.6775</label>
            <label className="clsexdate">Series / Expiry:</label>
            <label className="classNamemk"></label>
          </div> */}
          {/* <div className="MarketPicturePrice">
            <label>% Change: </label>
            <label
              style={{
                color: "#00ff00",
                padding: "0px 0px 0px 12px",
              }}
            >
              {" "}
              0.00{" "}
            </label>
            <label>Regular Lot: </label>
            <label className="classNamemk">0</label>
          </div> */}
          <div className="MarketPicturePrice">
            <label>Open:</label>
            <label className="classNamemk">74.4625</label>
            <label>High:</label>
            <label className="classNamemk">74.8125</label>
          </div>
          <div className="MarketPicturePrice">
            <label>Low:</label>
            <label className="classNamemk">{props.TokenInfo.lo}</label>
            <label>Close:</label>
            <label className="classNamemk">{props.TokenInfo.c}</label>
          </div>
          <div className="MarketPicturePrice">
            <label>Volume:</label>
            <label className="classNamemk"> {props.TokenInfo.v}</label>
            <label>Avg. Price:</label>
            <label className="classNamemk">{props.TokenInfo.ap}</label>
          </div>
          <div className="MarketPicturePrice">
            <label>LTQ:</label>
            <label className="classNamemk"> {props.TokenInfo.ltq}</label>
            <label>LTT:</label>
            <label className="classNamemk">{props.TokenInfo.ltt}</label>
          </div>
          {/* <div className="MarketPicturePrice">
            <label>LUT:</label>
            <label className="classNamemk">17:00:00 06JUL2021</label>
            <label> Open Interest:</label>
            <label className="classNamemk">1680225</label>
          </div> */}
          {/* <div className="MarketPicturePrice">
            <label>Strike Price:&gt;</label>
            <label className="classNamemk"> </label>
            <label>Option Type:</label>
            <label className="classNamemk"> </label>
          </div> */}
          <div className="MarketPicturePrice">
            <label>Lower Circuit:</label>
            <label className="classNamemk">{props.TokenInfo.lcl}</label>
            <label>Upper Circuit:</label>
            <label className="classNamemk">{props.TokenInfo.ucl}</label>
          </div>
          {/* <div className="MarketPicturePrice">
            <label>Tick Size:</label>
            <label className="classNamemk">0.0025</label>
            <label>Value (Lacs):</label>
            <label className="classNamemk">1585754.89</label>
          </div>
          <div className="MarketPicturePrice">
            <label>52 Weeks High:</label>
            <label className="classNamemk">0.0000</label>
            <label>52 Weeks Low:</label>
            <label className="classNamemk">0.0000</label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MarketPicturePrice;
