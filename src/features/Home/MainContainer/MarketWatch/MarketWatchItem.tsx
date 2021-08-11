import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { useAppDispatch } from "../../../../app/hooks";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
} from "../../OrderEntry/orderEntrySlice";
import { chartContainer } from "../mainContainerSlice";

const MarketWatchItem = (props: { propMarketWatch: IMarketWatch }) => {
  const { propMarketWatch } = props;
  const dispatch = useAppDispatch();
  function onBuyOrderEntryClick() {
    dispatch(openBuyOrderEntry());
  }
  function onSellOrderEntryClick() {
    dispatch(openSellOrderEntry());
  }
  function onChartClick() {
    dispatch(chartContainer());
  }
  let itemExcArray = propMarketWatch.scrips.split(",");
  useEffect(() => {
    //dispatch(NetpositionSuccess(getNetpositionData()));
  }, []);

  function getSymbol() {
    itemExcArray = propMarketWatch.scrips.split(",");
    //let itemArray = itemExcArray.split
    //API fetch call
  }
  return (
    <div>
      {itemExcArray.map((row: any, nIncreament) => (
        <div
          id={String(nIncreament + 1)}
          className="mw_block"
          style={{ width: "455px" }}
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
                <span id="spnsymbol" title="EURINR 28 JUL FUT">
                  EURINR 28 JUL FUT
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
              NCD
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

MarketWatchItem.propTypes = {};

export default MarketWatchItem;