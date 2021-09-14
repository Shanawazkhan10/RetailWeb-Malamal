import React, { Fragment, useEffect } from "react";
import { Collapse } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IDepthReq } from "../../../../types/IDepthReq";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import { ISubscribeDepth } from "../../../../types/ISubscribeDepth";
import { IGTTEntryProps } from "../../../../types/OrderEntry/IGTTEntryProps";
import { IOrderEntryProps } from "../../../../types/OrderEntry/IOrderEntryProps";
import { IUpdateWatchlist } from "../../../../types/WatchList/IUpdateWatchList";
import { userWS } from "../../../WebSocket/HSSocket";
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
import MarketDepth from "./MarketDepth";
import {
  DeleteWatchlist,
  FetchWatchListSymbol,
  hideMore,
  setRemovedSymbol,
  ShowMarketDepth,
  showMore,
  UpdateWatchlist,
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
  let selectedList: number;
  selectedList = marketWatchState.nSelectedWatchList;
  let selectlistname: string;
  selectlistname = marketWatchState.sSelectedWatchList;
  const OrderEntryState = useAppSelector((state) => state.orderEntry);
  const user = useAppSelector((state) => state.user);
  const [activeItem, setActiveItem] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [depth, setDepth] = React.useState(null);
  const { propMarketWatch } = props;
  const dispatch = useAppDispatch();
  const options = ["one", "two", "three"];

  useEffect(() => {
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
  function RemoveSymbol(symbol: IMarketWatchTokenInfo) {
    dispatch(setRemovedSymbol(symbol.tok));

    //API Call update List & on success call dispatch
    const updateWatchlist: IUpdateWatchlist = {
      mwName: propMarketWatch.mwName,
      scrips: removeValue(
        propMarketWatch.scrips,
        symbol.exSeg + "|" + symbol.tok,
        ","
      ),
    };
    dispatch(UpdateWatchlist(updateWatchlist, user.sessionKey));
    //Unsubscribe Depth API Call
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
        scrips: symbol.exSeg + "|" + symbol.tok,
        channelnum: propMarketWatch.id + 1,
      };

      waitForSocketConnection(userWS, function () {
        userWS.send(JSON.stringify(SubscribeDepth));
      });
    } else {
      //Unsubscribe Depth API Call
      const SubscribeDepth: ISubscribeDepth = {
        type: "dpu",
        scrips: symbol.exSeg + "|" + symbol.tok,
        channelnum: propMarketWatch.id + 1,
      };

      waitForSocketConnection(userWS, function () {
        userWS.send(JSON.stringify(SubscribeDepth));
      });
    }
  }

  function getSymbol() {
    //API call to bind Token info (Scrip Info Request)

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

    //}
    // waitForSocketConnection(userWS, function () {
    //   sendUnsubReq(subUnsubReq);
    // });

    // dispatch(
    //   UpdateSymbolDetails(
    //     GetWatchListSymbolDetails(propMarketWatch.id, propMarketWatch.scrips)
    //   )
    // );
  }

  function onCreateGTTOrderClick(symbolInfo: IMarketWatchTokenInfo, e: any) {
    e.preventDefault();
    GTTEntryProp.token = symbolInfo.tok;
    GTTEntryProp.price = symbolInfo.ltp;
    GTTEntryProp.quantity = 1;
    GTTEntryProp.symbol = symbolInfo.sym;
    GTTEntryProp.exchange = symbolInfo.exSeg;
    GTTEntryProp.ltp = +symbolInfo.ltp;
    dispatch(setGTTEntryProps(GTTEntryProp));
    dispatch(openGTTEntry());
  }

  const fundamentalStyle = {
    width: "15px",
    height: "15px",
    background: "rgba(106, 78, 238, 0.2)",
    borderRadius: "3px",
  };

  return (
    <Fragment>
      <tbody>
        {/* {propMarketWatch.SymbolList != null ? bindList : <div>No Data 2</div>} */}
        {propMarketWatch.SymbolList != null &&
        propMarketWatch.SymbolList != [] ? (
          propMarketWatch.SymbolList.map(
            (symbolInfo: IMarketWatchTokenInfo, nIncreament) => (
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
              <tr
                className="slideInDown-element"
                key={nIncreament}
                onMouseLeave={() => {
                  dispatch(hideMore(nIncreament));
                }}
              >
                <td>
                  <img src="images/hdfc-logo.jpg" />
                  <span>{symbolInfo.sym}</span>
                </td>
                <td className="price-box">
                  <div className="watchlistbox">
                    <button
                      type="button"
                      className="btn btn-primary wbuy"
                      title="BUY"
                      onClick={() => onBuyOrderEntryClick(symbolInfo)}
                    >
                      B
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary wsell"
                      title="SELL"
                      onClick={() => onSellOrderEntryClick(symbolInfo)}
                    >
                      S
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary wmarketdepth"
                      title="Depth"
                      onClick={() => onDepthClick(nIncreament, symbolInfo)}
                    ></button>
                    <button
                      type="button"
                      className="btn btn-primary wchart"
                      title="Chart(C )"
                      onClick={onChartClick}
                    ></button>
                    <button
                      type="button"
                      className="btn btn-primary wdelete"
                      title="Delete"
                      onClick={() => RemoveSymbol(symbolInfo)}
                    ></button>
                    <button
                      type="button"
                      className="btn btn-primary wmore dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      title="More"
                      onClick={() => {
                        symbolInfo.showMore
                          ? dispatch(hideMore(nIncreament))
                          : dispatch(showMore(nIncreament));
                      }}
                    ></button>

                    <div
                      className={
                        "dropdown-menu" + (symbolInfo.showMore ? " show" : "")
                      }
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="">
                        <img src="images/watchlist/pin.svg" /> Pin
                      </a>
                      <a
                        className="dropdown-item"
                        href=""
                        onClick={(e) => onCreateGTTOrderClick(symbolInfo, e)}
                      >
                        <img src="images/watchlist/create-gtt.svg" /> Create GTT
                      </a>
                      <a className="dropdown-item" href="">
                        <img src="images/watchlist/chart.svg" /> Chart
                      </a>
                      <a className="dropdown-item" href="">
                        <img src="" style={fundamentalStyle} /> Fundamentals
                      </a>
                      <a className="dropdown-item" href="">
                        <img src="" style={fundamentalStyle} /> Technicals
                      </a>
                      <a className="dropdown-item" href="">
                        <img src="images/watchlist/alert.svg" /> Set Alerts
                      </a>
                    </div>
                  </div>
                  <div
                    className={
                      "lprice" +
                      (Number(symbolInfo.nc) > 0
                        ? " text-green"
                        : Number(symbolInfo.nc) < 0
                        ? " text-red"
                        : "")
                    }
                  >
                    {symbolInfo.ltp == undefined ? "0.00" : symbolInfo.ltp}
                  </div>
                  <p>
                    {symbolInfo.cng == undefined ? "0.00" : symbolInfo.cng} (
                    {symbolInfo.nc == undefined ? "0.00" : symbolInfo.nc}%)
                  </p>
                </td>

                {symbolInfo.showDepth &&
                symbolInfo.marketDepth != null &&
                symbolInfo.marketDepth != undefined ? (
                  <Collapse in={symbolInfo.showDepth}>
                    <div className="market-depth" style={{ display: "" }}>
                      <MarketDepth
                        index={nIncreament}
                        depth={symbolInfo.marketDepth}
                        tokenInfo={symbolInfo}
                      ></MarketDepth>
                      <Quote index={nIncreament} tokenInfo={symbolInfo}></Quote>
                    </div>
                  </Collapse>
                ) : (
                  ""
                )}
              </tr>
            )
          )
        ) : (
          <tr className="slideInDown-element">
            <td>No Data</td>
          </tr>
        )}
      </tbody>
    </Fragment>
  );
};

export default MarketWatchItem;
