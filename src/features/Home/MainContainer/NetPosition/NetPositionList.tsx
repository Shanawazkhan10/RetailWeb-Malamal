import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { INetPosition } from "../../../../types/INetposition";
import { IOrderEntryProps } from "../../../../types/OrderEntry/IOrderEntryProps";
import { userWS } from "../../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import {
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";
import { ShowDepthFromSearch } from "../MarketPicture/MarketPictureSlice";
import NetPosition from "./NetPosition";
import { fetchNetposition } from "./NetPositionSlice";

const NetPositionList = () => {
  //let NetpositionList: any[];
  var currentValue = 0;
  const NetpositionList = useSelector((state: RootState) => state.netposition);
  const user = useSelector((state: RootState) => state.user);
  //NetpositionList = Netposition.netposition;
  const dispatch = useAppDispatch();

  const OrderEntryProp = {
    token: "",
    exchange: "",
    quantity: 0,
    price: "",
    triggerprice: "",
    symbol: "",
  } as IOrderEntryProps;

  function OpenDepth() {
    dispatch(ShowDepthFromSearch(""));
  }

  useEffect(() => {
    //dispatch(NetpositionSuccess(getNetpositionData()));
    dispatch(fetchNetposition(user.sessionKey));
    getSymbol();
  }, []);

  function getSegmentName(seg: String) {
    switch (seg) {
      case "nse_cm":
        return "NSE";
        break;
      case "nse_fo":
        return "NFO";
        break;
      case "bse_cm":
        return "BSE";
        break;
      case "bse_fo":
        return "BFO";
        break;

      default:
        break;
    }
  }

  function getSymbol() {
    if (
      NetpositionList.netposition != undefined &&
      NetpositionList.netposition.netpositionList != undefined
    ) {
      //subscribe Script API Call
      const subUnsubReq: SubUnsubReq = {
        type: "mws",
        scrips: NetpositionList.netposition.netpositionList
          .map((x) => x.exSeg + "|" + x.tok)
          .join("&"),
        channelnum: 1,
      };

      waitForSocketConnection(userWS, function () {
        sendUnsubReq(subUnsubReq);
      });
    }
  }

  function getTotal() {
    NetpositionList.netposition.netpositionList.map(
      (x) => (currentValue = currentValue + Number(x.ltp))
    );
    return currentValue;
  }

  function renderSwitch(product: String) {
    switch (product) {
      case "CNC":
        return "orange";
      case "I":
        return "purple";
      case "NRML":
        return "blue";
      default:
        return "foo";
    }
  }

  function onSellOrderEntryClick(e: any, netposition: INetPosition) {
    e.preventDefault();
    OrderEntryProp.token = netposition.tok;
    //OrderEntryProp.price = symbolInfo.ltp;
    OrderEntryProp.quantity = Number(netposition.cfBuyQty); // symbolInfo.fldQty;
    OrderEntryProp.symbol = netposition.trdSym;
    OrderEntryProp.exchange = netposition.exSeg;
    //OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openSellOrderEntry());
  }

  return NetpositionList.netposition &&
    NetpositionList.netposition.netpositionList != undefined &&
    NetpositionList.netposition.netpositionList.length > 0 ? (
    // <div className="tab-label-content" id="tab1-content">
    //   <label data-for="tab1">Positions</label>
    <div className="tab-content">
      <div className="row mb-4">
        <div className="col-md-4">
          <h2>
            Positions ({NetpositionList.netposition.netpositionList.length})
          </h2>
        </div>
        <div className="col-md-8 text-right" id="searhnbtn">
          {/* <div className="input-group slideInDown-element m-0" id="search">
            <div>
              <span>
                <img src="images/search.svg" />
              </span>
            </div>
            <input type="text" placeholder="Search E.g. INFY" />
          </div> */}
          <div className="btnalign">
            <a href="#">
              <img
                src=""
                style={{
                  width: "15px",
                  height: "15px",
                  background: "rgba(106, 78, 238, 0.2)",
                  borderRadius: "3px",
                }}
              />{" "}
              Analytics
            </a>
          </div>
          <div className="btnalign">
            <a href="#">
              <img src="images/positions/download.svg" /> Download
            </a>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12">
          <table className="datatable table table-hover" id="PortfolioTable">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>
                  <input
                    id="check_all"
                    className="regular-checkbox"
                    type="checkbox"
                  />
                  <label data-for="check_all"></label>
                </th>
                <th style={{ width: "5%" }}>Product</th>
                <th style={{ width: "5%" }}>Exit</th>
                <th style={{ width: "30%" }}>Instrument</th>
                <th style={{ width: "5%" }}>Qty.</th>
                <th style={{ width: "5%" }}>Avg.</th>
                <th style={{ width: "5%" }}>LTP</th>
                <th style={{ width: "5%" }}>P&L</th>
                <th style={{ width: "5%" }}> Chg.</th>
              </tr>
            </thead>
            <tbody>
              {NetpositionList.netposition.netpositionList.map(
                (netposition: any) => (
                  <NetPosition
                    key={netposition.Token}
                    netposition={netposition}
                  />
                )
              )}
            </tbody>
            <tfoot>
              <tr className="odd_col">
                <td colSpan={3}>
                  <button className="btn btn-primary">Exit Position</button>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ textAlign: "center" }}>
                  <h4>Total</h4>
                </td>
                {/* <td ></td>
                <td></td> */}

                <td style={{ textAlign: "center" }}>
                  <h4>
                    {/* {NetpositionList.netposition?.netpositionList.map(
                      (netposition: INetPosition) => {
                        currentValue = currentValue + Number(netposition.PnL);
                      }
                    )}
                    {currentValue.toFixed(2)} */}
                    {NetpositionList.netposition != undefined
                      ? NetpositionList.netposition.currentValue.toLocaleString(
                          navigator.language,
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )
                      : "0.00"}
                  </h4>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4">
          <h2>
            Day's History ({NetpositionList.netposition.netpositionList.length})
          </h2>
        </div>
        <div className="col-md-8 text-right">
          {/* <div className="input-group slideInDown-element m-0" id="search">
            <div>
              <span>
                <img src="images/search.svg" />
              </span>
            </div>
            <input type="text" placeholder="Search E.g. INFY" />
          </div> */}
          <a href="#">
            <img src="images/positions/download.svg" /> Download
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="datatable table table-hover" id="PortfolioTable">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>

                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
            </thead>

            {/* Temporary bindng to netposition */}
            <tbody>
              {NetpositionList.netposition.netpositionList.map(
                (netposition: INetPosition) => (
                  <tr className="odd_col">
                    <td>
                      <input
                        className="regular-checkbox"
                        type="checkbox"
                        name="row-check"
                        value="1"
                        id="one"
                      />
                      <label data-for="one"></label>
                    </td>

                    <td>
                      <div className="nbox">
                        <p className={renderSwitch(netposition.prod)}>
                          {netposition.prod == "I"
                            ? "MIS"
                            : netposition.prod.toUpperCase()}
                        </p>
                      </div>
                    </td>
                    <td>
                      <h3>
                        {netposition.trdSym.split("-")[0]}
                        <span>{getSegmentName(netposition.exSeg)}</span>
                      </h3>
                    </td>

                    <td>{netposition.NetQty}</td>
                    <td>
                      {/* {Number(netposition.flBuyQty) == 0
                      ? Math.fround(
                          Number(netposition.sellAmt) /
                            Number(netposition.flSellQty)
                        ).toFixed(2)
                      : Math.fround(
                          Number(netposition.buyAmt) /
                            Number(netposition.flBuyQty)
                        ).toFixed(2)} */}
                      {netposition.AvgPrice != undefined
                        ? netposition.AvgPrice.toFixed(2)
                        : 0}
                    </td>
                    <td>{netposition.ltp}</td>
                    <td>
                      {netposition.PnL != undefined
                        ? netposition.PnL.toFixed(2)
                        : 0}
                    </td>
                    <td>
                      {netposition.Change != undefined
                        ? netposition.Change.toFixed(2)
                        : "0.00"}
                      %
                    </td>
                  </tr>
                )
              )}
            </tbody>
            <tfoot>
              <tr className="odd_col">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                <td style={{ textAlign: "center" }}>
                  <h4>Total</h4>
                </td>

                {/* <td></td>
                <td></td> */}
                <td style={{ textAlign: "center" }}>
                  <h4>
                    {NetpositionList.netposition != undefined
                      ? NetpositionList.netposition.currentValue.toFixed(2)
                      : "0.00"}
                  </h4>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  ) : (
    // </div>
    <div className="tab-content">
      <div>
        <p>You don't have any positions yet</p>
      </div>
      <br />
      <button type="button" className="button-blue" onClick={OpenDepth}>
        Get started
      </button>
    </div>
  );
};

export default NetPositionList;
