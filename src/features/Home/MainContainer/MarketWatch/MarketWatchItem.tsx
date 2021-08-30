import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";
import {
  openGTTEntry,
  setGTTEntryProps,
} from "../../GTTOrderEntry/gttEntrySlice";
import { chartContainer } from "../mainContainerSlice";

import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import {
  GetSymbolDetails,
  GetWatchListSymbolDetails,
  RemoveTokenfromWatchlist,
  SubscribeMarketDepth,
} from "../../../../app/api";
import {
  FetchWatchListSymbol,
  getMarketDepthSuccess,
  RemoveSymbolFromWatchlist,
  ShowMarketDepth,
  UpdateSymbolDetails,
  hideMore,
  showMore,
} from "./MarketWatchSlice";
import MarketDepth from "./MarketDepth";

import { Collapse, Button, CardBody, Card } from "reactstrap";
import { IRemoveFromWatch } from "../../../../types/IRemoveFromWatch";
import { IDepthReq } from "../../../../types/IDepthReq";
import { ISubscribeDepth } from "../../../../types/ISubscribeDepth";
import { IOrderEntryProps } from "../../../../types/IOrderEntryProps";
import { IGTTEntryProps } from "../../../../types/IGTTEntryProps";
import {
  updateMarketDepth,
  UpdateTokenInfo,
} from "../MarketPicture/MarketPictureSlice";

export interface scriptInfoReq {
  scripArr: string[];
}
const MarketWatchItem = (props: { propMarketWatch: IMarketWatch }) => {
  const marketWatchState = useAppSelector(
    (state) => state.marketwatch.marketWatch
  );
  const OrderEntryState = useAppSelector((state) => state.orderEntry);
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
    OrderEntryProp.token = symbolInfo.tk;
    OrderEntryProp.price = symbolInfo.ltp;
    OrderEntryProp.quantity = 1;
    OrderEntryProp.symbol = symbolInfo.sym;
    OrderEntryProp.exchange = symbolInfo.exch;
    OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openBuyOrderEntry());
  }
  function onSellOrderEntryClick(symbolInfo: IMarketWatchTokenInfo) {
    OrderEntryProp.token = symbolInfo.tk;
    OrderEntryProp.price = symbolInfo.ltp;
    OrderEntryProp.quantity = 1;
    OrderEntryProp.symbol = symbolInfo.sym;
    OrderEntryProp.exchange = symbolInfo.exch;
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
      // const SubscribeDepth: ISubscribeDepth = {
      //   type: "dps",
      //   scrips: symbol.scrips,
      //   id: propMarketWatch.id,
      //   channelnum: propMarketWatch.id,
      // };
      dispatch(
        getMarketDepthSuccess(SubscribeMarketDepth(propMarketWatch.id, index))
      );
    } else {
      //Unsubscribe Depth API Call
      // const SubscribeDepth: ISubscribeDepth = {
      //   type: "dpu",
      //   scrips: symbol.scrips,
      //   id: propMarketWatch.id,
      //   channelnum: propMarketWatch.id,
      // };
      // UnsubscribeMarketDepth(SubscribeDepth);
    }
  }
  function getSymbol() {
    //API call to bind Token info (Scrip Info Request)
    // var scrpitArray:string[]=propMarketWatch.scrips.split(",");
    //  const scriptInfoReq:scriptInfoReq {
    //   scripArr:scrpitArray
    // }
    dispatch(FetchWatchListSymbol(propMarketWatch.scrips.split(",")));
    // dispatch(
    //   UpdateSymbolDetails(
    //     GetWatchListSymbolDetails(propMarketWatch.id, propMarketWatch.scrips)
    //   )
    // );
  }

  function onCreateGTTOrderClick(symbolInfo: IMarketWatchTokenInfo) {
    GTTEntryProp.token = symbolInfo.tk;
    GTTEntryProp.price = symbolInfo.ltp;
    GTTEntryProp.quantity = 1;
    GTTEntryProp.symbol = symbolInfo.sym;
    GTTEntryProp.exchange = symbolInfo.exch;
    GTTEntryProp.ltp = +symbolInfo.ltp;
    dispatch(setGTTEntryProps(GTTEntryProp));
    dispatch(openGTTEntry());
  }

  return (
    <div>
      {/* {propMarketWatch.SymbolList != null ? bindList : <div>No Data 2</div>} */}
      {propMarketWatch.SymbolList != null ? (
        propMarketWatch.SymbolList.map(
          (symbolInfo: IMarketWatchTokenInfo, nIncreament) => (
            <div>
              <div
                key={symbolInfo.scrips}
                id={String(nIncreament)}
                className="mw_block"
                style={{ width: "400px" }}
                onMouseLeave={() => {
                  dispatch(hideMore(nIncreament));
                }}
              >
                <div className="popupCloseButton" title="Delete"></div>
                <div style={{ display: "none" }} className="mw_status">
                  <ul>
                    <li>
                      <span id="spnEventStatus"></span>
                    </li>
                    <li>
                      <span id="spnMarketStatus"></span>
                    </li>
                  </ul>
                  <div className="status_pop">
                    <span className="pre_game" id="spnEventStateTooltip"></span>
                    <span className="open" id="spnMarketStateTooltip"></span>
                  </div>
                </div>

                <div id="divLeftV" className="container_mw mw_team1">
                  <div className="overlay_mw">
                    <button
                      className="btn_mw_overlay_2 btn_buy"
                      title="Depth"
                      onClick={() => onDepthClick(nIncreament, symbolInfo)}
                    >
                      D
                    </button>
                    <button
                      className="btn_mw_overlay_2 btn_buy"
                      title="Delete"
                      onClick={() => RemoveSymbol(symbolInfo)}
                    >
                      Del
                    </button>
                    <button
                      className="btn_mw_overlay_2 btn_buy"
                      title="Chart(C )"
                      onClick={onChartClick}
                    >
                      C
                    </button>
                    <button
                      className="btn_mw_overlay_2 btn_buy"
                      title="BUY"
                      onClick={() => onBuyOrderEntryClick(symbolInfo)}
                    >
                      B
                    </button>
                    <button
                      className="btn_mw_overlay_3 btn_sell"
                      title="SELL"
                      onClick={() => onSellOrderEntryClick(symbolInfo)}
                    >
                      S
                    </button>
                    <button
                      className="btn_mw_overlay_3 btn_detail"
                      title="More"
                      onClick={() => {
                        symbolInfo.showMore
                          ? dispatch(hideMore(nIncreament))
                          : dispatch(showMore(nIncreament));
                      }}
                    ></button>
                  </div>

                  {symbolInfo.showMore && (
                    <input
                      type="button"
                      value="Create GTT"
                      onClick={() => onCreateGTTOrderClick(symbolInfo)}
                    />
                  )}

                  <div className="divLeftV_in">
                    <div className="mysymbolname">
                      <span id="spnsymbol" title={symbolInfo.sym}>
                        {symbolInfo.sym}
                      </span>
                      <br />
                      <span id="spnLtt" title="LTT">
                        2021-07-06 16:59:58
                      </span>
                    </div>

                    <div className="ltp_main">
                      <span
                        className="pt_sprd"
                        id="spnltp"
                        title="LTP"
                        style={{ color: "#00bb7e" }}
                      >
                        88.5100
                      </span>
                      <span className="pt_sprd" id="ltpDifference">
                        0.05
                      </span>
                      <span className="pt_sprd" id="ltpPercent">
                        0.06%
                      </span>
                    </div>
                  </div>
                  <span
                    style={{ display: "none" }}
                    className="mw_hold"
                    id="spnPositionTakenLeftV"
                  ></span>
                </div>

                <div id="divRightV" className="mw_team2">
                  <span
                    className="vertical-text"
                    id="spnEventStateTooltip"
                    title="Exchange"
                  >
                    {symbolInfo.exch}
                  </span>
                </div>
              </div>
              {symbolInfo.showDepth &&
              symbolInfo.marketDepth != null &&
              symbolInfo.marketDepth != undefined ? (
                <Collapse in={symbolInfo.showDepth}>
                  <MarketDepth
                    index={nIncreament}
                    depth={symbolInfo.marketDepth}
                    tokenInfo={symbolInfo}
                  ></MarketDepth>
                </Collapse>
              ) : (
                ""
              )}
              {/* {activeItem && activeIndex == nIncreament + 1
                ? onDepthClick1(nIncreament + 1)
                : ""} */}
            </div>
          )
        )
      ) : (
        <div>No Data 2</div>
      )}
    </div>
  );
};

export default MarketWatchItem;
