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
import { GetWatchListSymbolDetails } from "../../../../app/api";
import { UpdateSymbolDetails } from "./MarketWatchSlice";
import MarketDepth from "./MarketDepth";
//import Collapse from "react-bootstrap/Collapse";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const MarketWatchItem = (props: { propMarketWatch: IMarketWatch }) => {
  const [activeItem, setActiveItem] = React.useState(false);
  const { propMarketWatch } = props;
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   getSymbol();
  //   console.log(" MarketWatchItem useEffect");
  // }, []);

  function onBuyOrderEntryClick() {
    dispatch(openBuyOrderEntry());
  }
  function onSellOrderEntryClick() {
    dispatch(openSellOrderEntry());
  }
  function onChartClick() {
    dispatch(chartContainer());
  }
  //function onDepthClick1(index: number) {

  function onDepthClick1(index: number) {
    //setActiveItem(!activeItem);
    let result = (
      <Collapse in={activeItem} key={index}>
        {/* <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div> */}
        <div className="market-depth" style={{ display: "" }}>
          <div className="depth-table">
            <div className="row">
              <table className="six columns buy">
                <thead>
                  <tr>
                    <th className="order-price">
                      <span>Bid</span>{" "}
                    </th>{" "}
                    <th className="orders">Orders</th>{" "}
                    <th className="text-right quantity">Qty.</th>
                  </tr>
                </thead>{" "}
                <tbody>
                  <tr>
                    <td className="rate">2691.85</td>{" "}
                    <td className="orders">1</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(65, 132, 243, 0.1) 1.46199%, transparent 1.46199%);",
                      }}
                    >
                      6
                    </td>
                  </tr>
                  <tr>
                    <td className="rate">2691.80</td>{" "}
                    <td className="orders">9</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(65, 132, 243, 0.1) 100%, transparent 100%)",
                      }}
                    >
                      343
                    </td>
                  </tr>
                  <tr>
                    <td className="rate">2691.60</td>{" "}
                    <td className="orders">7</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(65, 132, 243, 0.1) 60.8187%, transparent 60.8187%);",
                      }}
                    >
                      209
                    </td>
                  </tr>
                  <tr>
                    <td className="rate">2691.40</td>{" "}
                    <td className="orders">1</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(65, 132, 243, 0.1) 5%, transparent 5%);",
                      }}
                    >
                      1
                    </td>
                  </tr>
                  <tr>
                    <td className="rate">2691.35</td>{" "}
                    <td className="orders">2</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(65, 132, 243, 0.1) 8.18713%, transparent 8.18713%);",
                      }}
                    >
                      29
                    </td>
                  </tr>
                </tbody>{" "}
                <tfoot>
                  <tr>
                    <td>Total</td>{" "}
                    <td colSpan={2} className="text-right">
                      1,11,454
                    </td>{" "}
                  </tr>
                </tfoot>
              </table>
              <table className="six columns sell">
                <thead>
                  <tr>
                    <th className="order-price">
                      {" "}
                      <span>Offer</span>
                    </th>{" "}
                    <th className="orders">Orders</th>{" "}
                    <th className="text-right quantity">Qty.</th>
                  </tr>
                </thead>{" "}
                <tbody>
                  <tr>
                    <td className="rate">2692.35</td>{" "}
                    <td className="orders">2</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(255, 87, 34, 0.1) 20.9302%, transparent 20.9302%);",
                      }}
                    >
                      28
                    </td>
                  </tr>
                  <tr>
                    <td className="rate">2692.40</td>{" "}
                    <td className="orders">2</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(255, 87, 34, 0.1) 8.52713%, transparent 8.52713%);",
                      }}
                    >
                      12
                    </td>
                  </tr>
                  <tr>
                    <td className="rate">2692.85</td>{" "}
                    <td className="orders">3</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(255, 87, 34, 0.1) 100%, transparent 100%);",
                      }}
                    >
                      130
                    </td>
                  </tr>
                  <tr>
                    <td className="rate">2692.90</td>{" "}
                    <td className="orders">1</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(255, 87, 34, 0.1) 87.5969%, transparent 87.5969%);",
                      }}
                    >
                      114
                    </td>
                  </tr>
                  <tr>
                    <td className="rate">2692.95</td>{" "}
                    <td className="orders">1</td>{" "}
                    <td
                      className="text-right quantity"
                      style={{
                        background:
                          "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%);",
                      }}
                    >
                      1
                    </td>
                  </tr>
                </tbody>{" "}
                <tfoot>
                  <tr>
                    <td>Total</td>{" "}
                    <td colSpan={2} className="text-right">
                      2,59,574
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>{" "}
            <div className="depth-toggle">
              {" "}
              <a href="" className="text-center">
                <span className="icon icon-chevron-down"></span> View 20 depth
              </a>
            </div>
          </div>{" "}
          <div className="ohlc">
            <div className="row">
              <div className="six columns">
                <label>Open</label> <span className="value">2662.00</span>
              </div>{" "}
              <div className="six columns">
                <label>High</label> <span className="value">2707.70</span>
              </div>
            </div>{" "}
            <div className="row">
              <div className="six columns">
                <label>Low</label> <span className="value">2662.00</span>
              </div>{" "}
              <div className="six columns">
                <label>Prev. Close</label>{" "}
                <span className="value">2668.75</span>
              </div>
            </div>{" "}
            <div className="row">
              <div className="six columns">
                <label>Volume</label> <span className="value">9,26,331</span>
              </div>{" "}
              <div className="six columns">
                <label>Avg. price</label> <span className="value">2695.70</span>
              </div>
            </div>{" "}
            <div className="row">
              <div className="six columns">
                <label>LTQ</label> <span className="value">1</span>
              </div>{" "}
              <div className="six columns">
                <label>LTT</label>{" "}
                <span className="value">2021-08-13 10:31:03</span>
              </div>
            </div>
            <div className="row">
              <div className="six columns">
                <label>Lower circuit</label>{" "}
                <span className="value">2401.90</span>
              </div>{" "}
              <div className="six columns">
                <label>Upper circuit</label>{" "}
                <span className="value">2935.60</span>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    );
    return result;
  }
  function onDepthClick(index: number) {
    //dispatch(chartContainer());
    setActiveItem(!activeItem);
    // <DepthItem
    //   title="Circulars"
    //   setActiveItem={setActiveItem}
    //   index={index}
    //   activeItem={activeItem}
    // ></DepthItem>;
  }

  function DepthItem(props: any) {
    const expanded = props.activeItem === props.index;
    const cls = "sidebar-nav-menu-item " + (expanded ? "item-active" : "");
    return (
      <div className="market-depth" style={{ display: "" }}>
        <div className="depth-table">
          <div className="row">
            <table className="six columns buy">
              <thead>
                <tr>
                  <th className="order-price">
                    <span>Bid</span>{" "}
                  </th>{" "}
                  <th className="orders">Orders</th>{" "}
                  <th className="text-right quantity">Qty.</th>
                </tr>
              </thead>{" "}
              <tbody>
                <tr>
                  <td className="rate">2691.85</td>{" "}
                  <td className="orders">1</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(65, 132, 243, 0.1) 1.46199%, transparent 1.46199%);",
                    }}
                  >
                    6
                  </td>
                </tr>
                <tr>
                  <td className="rate">2691.80</td>{" "}
                  <td className="orders">9</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(65, 132, 243, 0.1) 100%, transparent 100%)",
                    }}
                  >
                    343
                  </td>
                </tr>
                <tr>
                  <td className="rate">2691.60</td>{" "}
                  <td className="orders">7</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(65, 132, 243, 0.1) 60.8187%, transparent 60.8187%);",
                    }}
                  >
                    209
                  </td>
                </tr>
                <tr>
                  <td className="rate">2691.40</td>{" "}
                  <td className="orders">1</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(65, 132, 243, 0.1) 5%, transparent 5%);",
                    }}
                  >
                    1
                  </td>
                </tr>
                <tr>
                  <td className="rate">2691.35</td>{" "}
                  <td className="orders">2</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(65, 132, 243, 0.1) 8.18713%, transparent 8.18713%);",
                    }}
                  >
                    29
                  </td>
                </tr>
              </tbody>{" "}
              <tfoot>
                <tr>
                  <td>Total</td>{" "}
                  <td colSpan={2} className="text-right">
                    1,11,454
                  </td>{" "}
                </tr>
              </tfoot>
            </table>
            <table className="six columns sell">
              <thead>
                <tr>
                  <th className="order-price">
                    {" "}
                    <span>Offer</span>
                  </th>{" "}
                  <th className="orders">Orders</th>{" "}
                  <th className="text-right quantity">Qty.</th>
                </tr>
              </thead>{" "}
              <tbody>
                <tr>
                  <td className="rate">2692.35</td>{" "}
                  <td className="orders">2</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(255, 87, 34, 0.1) 20.9302%, transparent 20.9302%);",
                    }}
                  >
                    28
                  </td>
                </tr>
                <tr>
                  <td className="rate">2692.40</td>{" "}
                  <td className="orders">2</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(255, 87, 34, 0.1) 8.52713%, transparent 8.52713%);",
                    }}
                  >
                    12
                  </td>
                </tr>
                <tr>
                  <td className="rate">2692.85</td>{" "}
                  <td className="orders">3</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(255, 87, 34, 0.1) 100%, transparent 100%);",
                    }}
                  >
                    130
                  </td>
                </tr>
                <tr>
                  <td className="rate">2692.90</td>{" "}
                  <td className="orders">1</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(255, 87, 34, 0.1) 87.5969%, transparent 87.5969%);",
                    }}
                  >
                    114
                  </td>
                </tr>
                <tr>
                  <td className="rate">2692.95</td>{" "}
                  <td className="orders">1</td>{" "}
                  <td
                    className="text-right quantity"
                    style={{
                      background:
                        "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%);",
                    }}
                  >
                    1
                  </td>
                </tr>
              </tbody>{" "}
              <tfoot>
                <tr>
                  <td>Total</td>{" "}
                  <td colSpan={2} className="text-right">
                    2,59,574
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>{" "}
          <div className="depth-toggle">
            {" "}
            <a href="" className="text-center">
              <span className="icon icon-chevron-down"></span> View 20 depth
            </a>
          </div>
        </div>{" "}
        <div className="ohlc">
          <div className="row">
            <div className="six columns">
              <label>Open</label> <span className="value">2662.00</span>
            </div>{" "}
            <div className="six columns">
              <label>High</label> <span className="value">2707.70</span>
            </div>
          </div>{" "}
          <div className="row">
            <div className="six columns">
              <label>Low</label> <span className="value">2662.00</span>
            </div>{" "}
            <div className="six columns">
              <label>Prev. Close</label> <span className="value">2668.75</span>
            </div>
          </div>{" "}
          <div className="row">
            <div className="six columns">
              <label>Volume</label> <span className="value">9,26,331</span>
            </div>{" "}
            <div className="six columns">
              <label>Avg. price</label> <span className="value">2695.70</span>
            </div>
          </div>{" "}
          <div className="row">
            <div className="six columns">
              <label>LTQ</label> <span className="value">1</span>
            </div>{" "}
            <div className="six columns">
              <label>LTT</label>{" "}
              <span className="value">2021-08-13 10:31:03</span>
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label>Lower circuit</label>{" "}
              <span className="value">2401.90</span>
            </div>{" "}
            <div className="six columns">
              <label>Upper circuit</label>{" "}
              <span className="value">2935.60</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function bindList() {
    console.log("calling bindList");
    propMarketWatch.SymbolList.map(
      (symbolInfo: IMarketWatchTokenInfo, nIncreament) => (
        <div
          key={nIncreament}
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
      )
    );
  }
  //let itemExcArray = propMarketWatch.scrips.split(",");
  useEffect(() => {
    //dispatch(NetpositionSuccess(getNetpositionData()));
    getSymbol();
    console.log(" MarketWatchItem useEffect");
  }, []);

  function getSymbol() {
    dispatch(
      UpdateSymbolDetails(
        GetWatchListSymbolDetails(propMarketWatch.id, propMarketWatch.scrips)
      )
    ); //DUmmy Call for actual call send token info
  }

  return (
    <div>
      {/* {propMarketWatch.SymbolList != null ? bindList : <div>No Data 2</div>} */}
      {propMarketWatch.SymbolList != null ? (
        propMarketWatch.SymbolList.map(
          (symbolInfo: IMarketWatchTokenInfo, nIncreament) => (
            <div>
              <div
                key={nIncreament}
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
                      onClick={() => onDepthClick(nIncreament + 1)}
                      // onClick={() => onDepthClick(nIncreament + 1)}
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
              {/* <Collapse in={activeItem}>
                <MarketDepth
                  setActiveItem={setActiveItem}
                  index={nIncreament + 1}
                  activeItem={activeItem}
                ></MarketDepth>
              </Collapse> */}
              {activeItem ? onDepthClick1(nIncreament + 1) : ""}
            </div>
          )
        )
      ) : (
        <div>No Data 2</div>
      )}
      {/* <MarketDepth></MarketDepth> */}
    </div>
  );
};

MarketWatchItem.propTypes = {};

export default MarketWatchItem;
