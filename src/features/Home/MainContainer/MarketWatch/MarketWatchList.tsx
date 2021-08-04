import { useAppDispatch } from "../../../../app/hooks";
import { openBuyOrderEntry,openSellOrderEntry } from "../../OrderEntry/orderEntrySlice";

import "../../style.css";

const MarketWatchList = () => {  
  const dispatch = useAppDispatch();
  function onBuyOrderEntryClick(){
    dispatch(openBuyOrderEntry());
  };
  function onSellOrderEntryClick(){
    dispatch(openSellOrderEntry());
  };
  return (
    <div className="mw_content" id="mw_content">
      <div
        style={{
          width: "300%",
          height: "100%",
          position: "absolute",
          left: "-455px",
        }}
      >
        <div
          id="mw_leftInnerView"
          className="mw_inner"
          style={{ width: "455px" }}
        ></div>
        <div
          id="mw_centralInnerView"
          className="mw_inner"
          style={{ width: "455px" }}
        >
          <div id="mw_block" className="mw_block" style={{ width: "455px" }}>
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
                <button className="btn_mw_overlay_2 btn_buy" title="BUY">
                  B
                </button>
                <button className="btn_mw_overlay_3 btn_sell" title="SELL">
                  S
                </button>
                <button
                  className="btn_mw_overlay_1 btn_detail"
                  title="Market Depth"
                ></button>
              </div>

              <div className="divLeftV_in">
                <div className="mysymbolname">
                  <span id="spnsymbol" title="SBIN-EQ">
                    SBIN-EQ
                  </span>
                  <br />
                  <span id="spnLtt" title="LTT">
                    0000-00-00 00:00:00
                  </span>
                </div>

                <div className="ltp_main">
                  <span
                    className="pt_sprd"
                    id="spnltp"
                    title="LTP"
                    style={{ color: "#ffffff" }}
                  >
                    0.00
                  </span>
                  <span className="pt_sprd" id="ltpDifference">
                    -432.65
                  </span>
                  <span className="pt_sprd" id="ltpPercent">
                    -100.00%
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
                NEQ
              </span>
            </div>
          </div>
          <div id="mw_block" className="mw_block" style={{ width: "455px" }}>
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
                <button className="btn_mw_overlay_2 btn_buy" title="BUY" onClick={onBuyOrderEntryClick}>
                  B
                </button>
                <button className="btn_mw_overlay_3 btn_sell" title="SELL" onClick={onSellOrderEntryClick}>
                  S
                </button>
                {/* <BuyOrderEntry/>
                <SellOrderEntry/> */}
                <button
                  className="btn_mw_overlay_1 btn_detail"
                  title="Market Depth"
                ></button>
              </div>

              <div className="divLeftV_in">
                <div className="mysymbolname">
                  <span id="spnsymbol" title="WIPRO-EQ">
                    WIPRO-EQ
                  </span>
                  <br />
                  <span id="spnLtt" title="LTT">
                    0000-00-00 00:00:00
                  </span>
                </div>

                <div className="ltp_main">
                  <span
                    className="pt_sprd"
                    id="spnltp"
                    title="LTP"
                    style={{ color: "#ffffff" }}
                  >
                    0.00
                  </span>
                  <span className="pt_sprd" id="ltpDifference">
                    -536.35
                  </span>
                  <span className="pt_sprd" id="ltpPercent">
                    -100.00%
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
                NEQ
              </span>
            </div>
          </div>
          <div id="mw_block" className="mw_block" style={{ width: "455px" }}>
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
                <button className="btn_mw_overlay_2 btn_buy" title="BUY">
                  B
                </button>
                <button className="btn_mw_overlay_3 btn_sell" title="SELL">
                  S
                </button>
                <button
                  className="btn_mw_overlay_1 btn_detail"
                  title="Market Depth"
                ></button>
              </div>

              <div className="divLeftV_in">
                <div className="mysymbolname">
                  <span id="spnsymbol" title="ITC-EQ">
                    ITC-EQ
                  </span>
                  <br />
                  <span id="spnLtt" title="LTT">
                    0000-00-00 00:00:00
                  </span>
                </div>

                <div className="ltp_main">
                  <span
                    className="pt_sprd"
                    id="spnltp"
                    title="LTP"
                    style={{ color: "#ffffff" }}
                  >
                    0.00
                  </span>
                  <span className="pt_sprd" id="ltpDifference">
                    -203.65
                  </span>
                  <span className="pt_sprd" id="ltpPercent">
                    -100.00%
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
                NEQ
              </span>
            </div>
          </div>
          <div id="mw_block" className="mw_block" style={{ width: "455px" }}>
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
                <button className="btn_mw_overlay_2 btn_buy" title="BUY">
                  B
                </button>
                <button className="btn_mw_overlay_3 btn_sell" title="SELL">
                  S
                </button>
                <button
                  className="btn_mw_overlay_1 btn_detail"
                  title="Market Depth"
                ></button>
              </div>

              <div className="divLeftV_in">
                <div className="mysymbolname">
                  <span id="spnsymbol" title="APLLTD 29 JUL FUT">
                    APLLTD 29 JUL FUT
                  </span>
                  <br />
                  <span id="spnLtt" title="LTT">
                    0000-00-00 00:00:00
                  </span>
                </div>

                <div className="ltp_main">
                  <span
                    className="pt_sprd"
                    id="spnltp"
                    title="LTP"
                    style={{ color: "#ffffff" }}
                  >
                    0.00
                  </span>
                  <span className="pt_sprd" id="ltpDifference">
                    -983.85
                  </span>
                  <span className="pt_sprd" id="ltpPercent">
                    -100.00%
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
                NFO
              </span>
            </div>
          </div>
          <div id="mw_block" className="mw_block" style={{ width: "455px" }}>
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
                <button className="btn_mw_overlay_2 btn_buy" title="BUY">
                  B
                </button>
                <button className="btn_mw_overlay_3 btn_sell" title="SELL">
                  S
                </button>
                <button
                  className="btn_mw_overlay_1 btn_detail"
                  title="Market Depth"
                ></button>
              </div>

              <div className="divLeftV_in">
                <div className="mysymbolname">
                  <span id="spnsymbol" title="SBIN 29 JUL FUT">
                    SBIN 29 JUL FUT
                  </span>
                  <br />
                  <span id="spnLtt" title="LTT">
                    0000-00-00 00:00:00
                  </span>
                </div>

                <div className="ltp_main">
                  <span
                    className="pt_sprd"
                    id="spnltp"
                    title="LTP"
                    style={{ color: "#ffffff" }}
                  >
                    0.00
                  </span>
                  <span className="pt_sprd" id="ltpDifference">
                    -434.85
                  </span>
                  <span className="pt_sprd" id="ltpPercent">
                    -100.00%
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
                NFO
              </span>
            </div>
          </div>
          <div id="mw_block" className="mw_block" style={{ width: "455px" }}>
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
                <button className="btn_mw_overlay_2 btn_buy" title="BUY">
                  B
                </button>
                <button className="btn_mw_overlay_3 btn_sell" title="SELL">
                  S
                </button>
                <button
                  className="btn_mw_overlay_1 btn_detail"
                  title="Market Depth"
                ></button>
              </div>

              <div className="divLeftV_in">
                <div className="mysymbolname">
                  <span id="spnsymbol" title="ACC 29 JUL FUT">
                    ACC 29 JUL FUT
                  </span>
                  <br />
                  <span id="spnLtt" title="LTT">
                    0000-00-00 00:00:00
                  </span>
                </div>

                <div className="ltp_main">
                  <span
                    className="pt_sprd"
                    id="spnltp"
                    title="LTP"
                    style={{ color: "#ffffff" }}
                  >
                    0.00
                  </span>
                  <span className="pt_sprd" id="ltpDifference">
                    -1992.30
                  </span>
                  <span className="pt_sprd" id="ltpPercent">
                    -100.00%
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
                NFO
              </span>
            </div>
          </div>
          <div id="mw_block" className="mw_block" style={{ width: "455px" }}>
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
                <button className="btn_mw_overlay_2 btn_buy" title="BUY">
                  B
                </button>
                <button className="btn_mw_overlay_3 btn_sell" title="SELL">
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
          <div id="mw_block" className="mw_block" style={{ width: "455px" }}>
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
                <button className="btn_mw_overlay_2 btn_buy" title="BUY">
                  B
                </button>
                <button className="btn_mw_overlay_3 btn_sell" title="SELL">
                  S
                </button>
                <button
                  className="btn_mw_overlay_1 btn_detail"
                  title="Market Depth"
                ></button>
              </div>

              <div className="divLeftV_in">
                <div className="mysymbolname">
                  <span id="spnsymbol" title="GBPINR 28 JUL FUT">
                    GBPINR 28 JUL FUT
                  </span>
                  <br />
                  <span id="spnLtt" title="LTT">
                    2021-07-06 16:59:59
                  </span>
                </div>

                <div className="ltp_main">
                  <span
                    className="pt_sprd"
                    id="spnltp"
                    title="LTP"
                    style={{ color: "#00bb7e" }}
                  >
                    103.4400
                  </span>
                  <span className="pt_sprd" id="ltpDifference">
                    0.28
                  </span>
                  <span className="pt_sprd" id="ltpPercent">
                    0.27%
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
          <div id="mw_block" className="mw_block" style={{ width: "455px" }}>
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
                <button className="btn_mw_overlay_2 btn_buy" title="BUY">
                  B
                </button>
                <button className="btn_mw_overlay_3 btn_sell" title="SELL">
                  S
                </button>
                <button
                  className="btn_mw_overlay_1 btn_detail"
                  title="Market Depth"
                ></button>
              </div>

              <div className="divLeftV_in">
                <div className="mysymbolname">
                  <span id="spnsymbol" title="USDINR 28 JUL FUT">
                    USDINR 28 JUL FUT
                  </span>
                  <br />
                  <span id="spnLtt" title="LTT">
                    0000-00-00 00:00:00
                  </span>
                </div>

                <div className="ltp_main">
                  <span
                    className="pt_sprd"
                    id="spnltp"
                    title="LTP"
                    style={{ color: "#ffffff" }}
                  >
                    0.0000
                  </span>
                  <span className="pt_sprd" id="ltpDifference">
                    -74.46
                  </span>
                  <span className="pt_sprd" id="ltpPercent">
                    -100.00%
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
        </div>
        <div
          id="mw_rightInnerView"
          className="mw_inner"
          style={{ width: "455px" }}
        ></div>
        <div id="mw_block" className="mw_direct" style={{ right: "470px" }}>
          <span className="blk_prv">
            {" "}
            <input type="button" id="blk_prv" disabled />{" "}
          </span>
          <span className="blk_nxt">
            {" "}
            <input type="button" id="blk_nxt" disabled />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarketWatchList;
