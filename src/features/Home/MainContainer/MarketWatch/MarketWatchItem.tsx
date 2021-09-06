import React, { useEffect } from "react";
import { Collapse } from "reactstrap";
import { GetSymbolDetails, SubscribeMarketDepth } from "../../../../app/api";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IDepthReq } from "../../../../types/IDepthReq";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import { ISubscribeDepth } from "../../../../types/ISubscribeDepth";
import { IGTTEntryProps } from "../../../../types/OrderEntry/IGTTEntryProps";
import { IOrderEntryProps } from "../../../../types/OrderEntry/IOrderEntryProps";
import HSSocket, { userWS } from "../../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
//import { sendUnsubReq, SubUnsubReq } from "../../../WebSocket/HSSocket1";
import { FetchSocketData } from "../../../WebSocket/WebSocketSlice";
import {
  openGTTEntry,
  setGTTEntryProps,
} from "../../GTTOrderEntry/gttEntrySlice";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";
import { chartContainer } from "../mainContainerSlice";
import {
  updateMarketDepth,
  UpdateTokenInfo,
} from "../MarketPicture/MarketPictureSlice";
import MarketDepth from "./MarketDepth";
import {
  FetchWatchListSymbol,
  hideMore,
  ShowMarketDepth,
  showMore,
} from "./MarketWatchSlice";
import Quote from "./Quote";
//import { userWS } from "./../../../WebSocket/HSSocket1";

export interface scriptInfoReq {
  scripArr: string[];
}
const MarketWatchItem = (props: {
  propMarketWatch: IMarketWatch;
  index: number;
}) => {
  const marketWatchState = useAppSelector(
    (state) => state.marketwatch.marketWatch
  );
  const OrderEntryState = useAppSelector((state) => state.orderEntry);
  const user = useAppSelector((state) => state.user);
  const [activeItem, setActiveItem] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [depth, setDepth] = React.useState(null);
  const { propMarketWatch } = props;
  const dispatch = useAppDispatch();
  const options = ["one", "two", "three"];

  useEffect(() => {
    //dispatch(setSymbollistindex(props.index));
    getSymbol();
    console.log(" MarketWatchItem useEffect");
  }, []);

  useEffect(() => {
    var a = dispatch(FetchSocketData(22));
  }, []);

  const OrderEntryProp = {
    token: "",
    exchange: "",
    quantity: 0,
    price: "",
    triggerprice: "",
    symbol: "",
  } as IOrderEntryProps;

  const GTTEntryProp = {
    token: "",
    exchange: "",
    quantity: 0,
    price: "",
    triggerprice: "",
    symbol: "",
  } as IGTTEntryProps;

  function onBuyOrderEntryClick(symbolInfo: IMarketWatchTokenInfo) {
    OrderEntryProp.token = symbolInfo.tok;
    OrderEntryProp.price = symbolInfo.ltp;
    OrderEntryProp.quantity = 1;
    OrderEntryProp.symbol = symbolInfo.sym;
    OrderEntryProp.exchange = symbolInfo.exSeg;
    OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openBuyOrderEntry());
  }
  function onSellOrderEntryClick(symbolInfo: IMarketWatchTokenInfo) {
    OrderEntryProp.token = symbolInfo.tok;
    OrderEntryProp.price = symbolInfo.ltp;
    OrderEntryProp.quantity = 1;
    OrderEntryProp.symbol = symbolInfo.sym;
    OrderEntryProp.exchange = symbolInfo.exSeg;
    OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openSellOrderEntry());
  }
  function onChartClick() {
    dispatch(chartContainer());
  }
  function RemoveSymbol(tokenInfo: IMarketWatchTokenInfo) {
    dispatch(UpdateTokenInfo(GetSymbolDetails()));

    dispatch(updateMarketDepth(SubscribeMarketDepth(0, 0)));

    //API Call update List & on success call dispatch
    // const RemoveFromWatch: IRemoveFromWatch = {
    //   mwName: propMarketWatch.mwName,
    //   scrips: removeValue(propMarketWatch.scrips, tokenInfo.scrips, "|"),
    //   id: tokenInfo.mwId,
    //   userId: "Test User",
    // };
    // dispatch(RemoveSymbolFromWatchlist(RemoveFromWatch));
    //Unsubscribe Depth API Call
    // if (symbol.showDepth) {
    //   const SubscribeDepth: ISubscribeDepth = {
    //     type: "dpu",
    //     scrips: symbol.scrips,
    //     id: propMarketWatch.id,
    //     channelnum: propMarketWatch.id,
    //   };
    //   UnsubscribeMarketDepth(SubscribeDepth);
    // }
  }
  function removeValue(list: string, value: string, separator: string) {
    separator = ",";
    var values = list.split(separator);
    for (var i = 0; i < values.length; i++) {
      if (values[i] == value) {
        values.splice(i, 1);
        return values.join(separator);
      }
    }
    return list;
  }
  function onDepthClick(index: number, symbol: IMarketWatchTokenInfo) {
    const DepthReq: IDepthReq = {
      id: propMarketWatch.id,
      index: index,
    };
    dispatch(ShowMarketDepth(DepthReq));

    if (!symbol.showDepth) {
      //subscribe Depth API Call
      const SubscribeDepth: ISubscribeDepth = {
        type: "dps",
        scrips: symbol.tok + "|" + symbol.exSeg,
        //id: propMarketWatch.id,
        channelnum: propMarketWatch.id + 1,
      };

      waitForSocketConnection(userWS, function () {
        userWS.send(JSON.stringify(SubscribeDepth));
      });
      // dispatch(
      //   getMarketDepthSuccess(SubscribeMarketDepth(propMarketWatch.id, index))
      // );
    } else {
      //Unsubscribe Depth API Call
      const SubscribeDepth: ISubscribeDepth = {
        type: "dpu",
        scrips: symbol.tok + "|" + symbol.exSeg,
        //id: propMarketWatch.id,
        channelnum: propMarketWatch.id + 1,
      };

      waitForSocketConnection(userWS, function () {
        userWS.send(JSON.stringify(SubscribeDepth));
      });
      //sendUnsubReq(SubscribeDepth);
      // UnsubscribeMarketDepth(SubscribeDepth);
    }
  }

  function getSymbol() {
    dispatch(
      FetchWatchListSymbol(
        propMarketWatch.scrips.split(","),
        user.sessionKey,
        props.index
      )
    );

    //subscribe Script API Call
    const subUnsubReq: SubUnsubReq = {
      type: "mws",
      scrips: propMarketWatch.scrips.replaceAll(",", "&"),
      channelnum: 1,
    };
    //if (userWS) {
    let req = JSON.stringify(subUnsubReq);
    // waitForSocketConnection(userWS, function () {
    //   userWS.send(req);
    // });

    //}
    waitForSocketConnection(userWS, function () {
      sendUnsubReq(subUnsubReq);
    });

    // dispatch(
    //   UpdateSymbolDetails(
    //     GetWatchListSymbolDetails(propMarketWatch.id, propMarketWatch.scrips)
    //   )
    // );
  }

  function onCreateGTTOrderClick(symbolInfo: IMarketWatchTokenInfo) {
    GTTEntryProp.token = symbolInfo.tok;
    GTTEntryProp.price = symbolInfo.ltp;
    GTTEntryProp.quantity = 1;
    GTTEntryProp.symbol = symbolInfo.sym;
    GTTEntryProp.exchange = symbolInfo.exSeg;
    GTTEntryProp.ltp = +symbolInfo.ltp;
    dispatch(setGTTEntryProps(GTTEntryProp));
    dispatch(openGTTEntry());
  }

  return (
    <tbody>
      {/* {propMarketWatch.SymbolList != null ? bindList : <div>No Data 2</div>} */}
      {propMarketWatch.SymbolList != null ? (
        propMarketWatch.SymbolList.map(
          (symbolInfo: IMarketWatchTokenInfo, nIncreament) => (
            //   <div>
            //     <div
            //       key={symbolInfo.scrips}
            //       id={String(nIncreament)}
            //       className="mw_block"
            //       style={{ width: "400px" }}
            //       onMouseLeave={() => {
            //         dispatch(hideMore(nIncreament));
            //       }}
            //     >
            //       <div className="popupCloseButton" title="Delete"></div>
            //       <div style={{ display: "none" }} className="mw_status">
            //         <ul>
            //           <li>
            //             <span id="spnEventStatus"></span>
            //           </li>
            //           <li>
            //             <span id="spnMarketStatus"></span>
            //           </li>
            //         </ul>
            //         <div className="status_pop">
            //           <span className="pre_game" id="spnEventStateTooltip"></span>
            //           <span className="open" id="spnMarketStateTooltip"></span>
            //         </div>
            //       </div>

            //       <div id="divLeftV" className="container_mw mw_team1">
            //         <div className="overlay_mw">
            //           <button
            //             className="btn_mw_overlay_2 btn_buy"
            //             title="Depth"
            //             onClick={() => onDepthClick(nIncreament, symbolInfo)}
            //           >
            //             D
            //           </button>
            //           <button
            //             className="btn_mw_overlay_2 btn_buy"
            //             title="Delete"
            //             onClick={() => RemoveSymbol(symbolInfo)}
            //           >
            //             Del
            //           </button>
            //           <button
            //             className="btn_mw_overlay_2 btn_buy"
            //             title="Chart(C )"
            //             onClick={onChartClick}
            //           >
            //             C
            //           </button>
            //           <button
            //             className="btn_mw_overlay_2 btn_buy"
            //             title="BUY"
            //             onClick={() => onBuyOrderEntryClick(symbolInfo)}
            //           >
            //             B
            //           </button>
            //           <button
            //             className="btn_mw_overlay_3 btn_sell"
            //             title="SELL"
            //             onClick={() => onSellOrderEntryClick(symbolInfo)}
            //           >
            //             S
            //           </button>
            //           <button
            //             className="btn_mw_overlay_3 btn_detail"
            //             title="More"
            //             onClick={() => {
            //               symbolInfo.showMore
            //                 ? dispatch(hideMore(nIncreament))
            //                 : dispatch(showMore(nIncreament));
            //             }}
            //           ></button>
            //         </div>

            //         {symbolInfo.showMore && (
            //           <input
            //             type="button"
            //             value="Create GTT"
            //             onClick={() => onCreateGTTOrderClick(symbolInfo)}
            //           />
            //         )}

            //         <div className="divLeftV_in">
            //           <div className="mysymbolname">
            //             <span id="spnsymbol" title={symbolInfo.trdSym}>
            //               {symbolInfo.sym}
            //             </span>
            //             <br />
            //             <span id="spnLtt" title="LTT">
            //               {symbolInfo.trdSym}
            //             </span>
            //           </div>

            //           <div className="ltp_main">
            //             <span
            //               className="pt_sprd"
            //               id="spnltp"
            //               title="LTP"
            //               style={{ color: "#00bb7e" }}
            //             >
            //               {symbolInfo.ltp}
            //             </span>
            //             <span className="pt_sprd" id="ltpDifference">
            //               {symbolInfo.cng}
            //             </span>
            //             <span className="pt_sprd" id="ltpPercent">
            //               {symbolInfo.nc}%
            //             </span>
            //           </div>
            //         </div>
            //         <span
            //           style={{ display: "none" }}
            //           className="mw_hold"
            //           id="spnPositionTakenLeftV"
            //         ></span>
            //       </div>

            //       <div id="divRightV" className="mw_team2">
            //         <span
            //           className="vertical-text"
            //           id="spnEventStateTooltip"
            //           title="Exchange"
            //         >
            //           {symbolInfo.exSeg}
            //         </span>
            //       </div>
            //     </div>
            //     {symbolInfo.showDepth &&
            //     symbolInfo.marketDepth != null &&
            //     symbolInfo.marketDepth != undefined ? (
            //       <Collapse in={symbolInfo.showDepth}>
            //         <div className="market-depth" style={{ display: "" }}>
            //           <MarketDepth
            //             index={nIncreament}
            //             depth={symbolInfo.marketDepth}
            //           ></MarketDepth>
            //           <Quote index={nIncreament} tokenInfo={symbolInfo}></Quote>
            //         </div>
            //       </Collapse>
            //     ) : (
            //       ""
            //     )}
            //     {/* {activeItem && activeIndex == nIncreament + 1
            //       ? onDepthClick1(nIncreament + 1)
            //       : ""} */}
            //   </div>
            <tr className="slideInDown-element" key={nIncreament}>
              <td>
                <img src="images/hdfc-logo.jpg" />
                <span>{symbolInfo.sym}</span>
              </td>
              <td className="price-box">
                <div className="lprice">
                  Rs.{symbolInfo.ltp == undefined ? "0.00" : symbolInfo.ltp}
                </div>
                <p className="text-green">
                  {symbolInfo.cng == undefined ? "0.00" : symbolInfo.cng} (
                  {symbolInfo.nc == undefined ? "0.00" : symbolInfo.nc}%)
                </p>
              </td>
            </tr>
          )
        )
      ) : (
        <tr className="slideInDown-element">
          <td>No Data</td>
        </tr>
      )}
    </tbody>
  );
};

export default MarketWatchItem;
