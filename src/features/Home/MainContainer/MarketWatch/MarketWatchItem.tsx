import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { useAppDispatch } from "../../../../app/hooks";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
} from "../../OrderEntry/orderEntrySlice";
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
} from "./MarketWatchSlice";
import MarketDepth from "./MarketDepth";

import { Collapse, Button, CardBody, Card } from "reactstrap";
import { IRemoveFromWatch } from "../../../../types/IRemoveFromWatch";
import { IDepthReq } from "../../../../types/IDepthReq";
import { ISubscribeDepth } from "../../../../types/ISubscribeDepth";
import {
  updateMarketDepth,
  UpdateTokenInfo,
} from "../MarketPicture/MarketPictureSlice";

export interface scriptInfoReq {
  scripArr: string[];
}
const MarketWatchItem = (props: { propMarketWatch: IMarketWatch }) => {
  const { propMarketWatch } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    getSymbol();
    console.log(" MarketWatchItem useEffect");
  }, []);

  function onBuyOrderEntryClick() {
    dispatch(openBuyOrderEntry());
  }
  function onSellOrderEntryClick() {
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
                style={{ width: "378px" }}
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
                      Depth
                    </button>
                    <button
                      className="btn_mw_overlay_2 btn_buy"
                      title="Delete"
                      onClick={() => RemoveSymbol(symbolInfo)}
                    >
                      D
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
                      onClick={onBuyOrderEntryClick}
                    >
                      B
                    </button>
                    <button
                      className="btn_mw_overlay_3 btn_sell"
                      title="SELL"
                      onClick={onSellOrderEntryClick}
                    >
                      S
                    </button>
                    <button
                      className="btn_mw_overlay_1 btn_detail"
                      title="Market Depth"
                    ></button>
                  </div>

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
