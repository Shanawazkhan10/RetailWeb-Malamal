import { parse } from "querystring";
import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { INetPosition } from "../../../../types/INetposition";
import { NetpositionSummary } from "../../../../types/INetpositionSummary";
import { IOrderResponse } from "../../../../types/Order/IOrderResponse";
import { IOrderEntryProps } from "../../../../types/OrderEntry/IOrderEntryProps";
import { IPosition } from "../../../../types/Position/IPosition";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";

const NetPositionV = (props: { netposition: INetPosition }) => {
  const { netposition } = props;
  const dispatch = useAppDispatch();
  const OrderEntryProp = {
    token: "",
    exchange: "",
    quantity: 0,
    price: "",
    triggerprice: "",
    symbol: "",
  } as IOrderEntryProps;

  const NetpositionList = useSelector((state: RootState) => state.netposition);

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

  function onBuyOrderEntryClick(
    e: any,
    symbolInfo: IOrderResponse,
    actiontype: string
  ) {
    e.preventDefault();
    OrderEntryProp.token = symbolInfo.tok;
    if (actiontype == "Repeat") {
      OrderEntryProp.price = symbolInfo.prc;
    } else if (actiontype == "Buy") {
      OrderEntryProp.price = symbolInfo.ltp;
    }
    OrderEntryProp.quantity = 1; //symbolInfo.fldQty;
    OrderEntryProp.symbol = symbolInfo.trdSym;
    OrderEntryProp.exchange = symbolInfo.exSeg;
    //OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openBuyOrderEntry());
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

  return (
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
            {netposition.prod == "I" ? "MIS" : netposition.prod.toUpperCase()}
          </p>
        </div>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary exitbtn"
          onClick={(e) => onSellOrderEntryClick(e, netposition)}
        ></button>
      </td>
      <td>
        <h3>
          {netposition.trdSym}
          <span>{getSegmentName(netposition.exSeg)}</span>
        </h3>
        <div className="watchlistbox">
          <button
            type="button"
            className="btn btn-primary wmore dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => onSellOrderEntryClick(e, netposition)}
            >
              <img src="images/positions/exit.svg" /> Exit
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/add.svg" /> Add
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/convert.svg" /> Convert
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/info.svg" /> Info
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/create-gtt.svg" /> Create GTT
              <span>/ GTC</span>
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/market-depth.svg" /> Market depth
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/chart.svg" /> Chart
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/watchlist.svg" /> Add to marketwatch
            </a>
            <a className="dropdown-item" href="#">
              <img
                src=""
                style={{
                  width: "15px",
                  height: "15px",
                  background: "rgba(106, 78, 238, 0.2)",
                  borderRadius: "3px",
                }}
              />
              Fundamentals
            </a>
            <a className="dropdown-item" href="#">
              <img
                src=""
                style={{
                  width: "15px",
                  height: "15px",
                  background: "rgba(106, 78, 238, 0.2)",
                  borderRadius: "3px",
                }}
              />
              Technicals
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/alert.svg" /> Set Alerts
            </a>
          </div>
        </div>
      </td>

      <td>
        {Number(netposition.flBuyQty) == 0
          ? netposition.flSellQty
          : netposition.flBuyQty}
      </td>
      <td>
        {/* {Number(netposition.flBuyQty) == 0
          ? Math.fround(
              Number(netposition.sellAmt) / Number(netposition.flSellQty)
            ).toFixed(2)
          : Math.fround(
              Number(netposition.buyAmt) / Number(netposition.flBuyQty)
            ).toFixed(2)} */}
        {netposition.AvgPrice != undefined
          ? netposition.AvgPrice.toFixed(2)
          : 0}
      </td>

      <td>{netposition.ltp}</td>
      <td>
        {/* {netposition.ltp != undefined
          ? Math.fround(
              parseFloat(netposition.ltp) - parseFloat(netposition.buyAmt)
            ).toFixed(2)
          : "0.00"} */}
        {netposition.PnL != undefined ? netposition.PnL.toFixed(2) : 0}
      </td>
      <td>
        {netposition.ltp != undefined
          ? Math.fround(
              parseFloat(netposition.buyAmt) /
                (parseFloat(netposition.ltp) - parseFloat(netposition.buyAmt))
            ).toFixed(2)
          : "0.00"}
        %
      </td>
    </tr>
  );
};

export default NetPositionV;
