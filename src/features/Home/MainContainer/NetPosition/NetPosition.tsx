import { parse } from "querystring";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { INetPosition } from "../../../../types/INetposition";
import { NetpositionSummary } from "../../../../types/INetpositionSummary";
import { IOrderResponse } from "../../../../types/Order/IOrderResponse";
import { IOrderEntryProps } from "../../../../types/OrderEntry/IOrderEntryProps";
import { IPosition } from "../../../../types/Position/IPosition";
import {
  FetchSymbol,
  openBuyOrderEntry,
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";

const NetPositionV = (props: { netposition: INetPosition }) => {
  const { netposition } = props;
  const [Menuflag, ShowMenu] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

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

  function OpenOrderEntry(
    e: any,
    symbolInfo: INetPosition,
    Actiontype: string
  ) {
    e.preventDefault();

    if (Actiontype == "E") {
      if (symbolInfo.NetQty > 0) {
        onSellOrderEntryClick(symbolInfo);
      } else {
        onBuyOrderEntryClick(symbolInfo);
      }
    } else {
      if (symbolInfo.NetQty > 0) {
        onBuyOrderEntryClick(symbolInfo);
      } else {
        onSellOrderEntryClick(symbolInfo);
      }
    }
  }

  function onBuyOrderEntryClick(netposition: INetPosition) {
    var scripInfo = netposition.exSeg + "|" + netposition.tok;
    OrderEntryProp.token = netposition.tok;

    OrderEntryProp.price = netposition.ltp;

    OrderEntryProp.quantity = 1; //symbolInfo.fldQty;
    OrderEntryProp.symbol = netposition.trdSym;
    OrderEntryProp.exchange = netposition.exSeg;
    //OrderEntryProp.ltp = symbolInfo.ltp;

    dispatch(FetchSymbol(scripInfo.split(","), user.sessionKey));
    setTimeout(function () {
      dispatch(setOrderEntryProps(OrderEntryProp));
      dispatch(openBuyOrderEntry());
    }, 300);
  }

  function onSellOrderEntryClick(netposition: INetPosition) {
    var scripInfo = netposition.exSeg + "|" + netposition.tok;
    OrderEntryProp.token = netposition.tok;
    OrderEntryProp.price = netposition.ltp;
    OrderEntryProp.quantity = Number(netposition.cfBuyQty); // symbolInfo.fldQty;
    OrderEntryProp.symbol = netposition.trdSym;
    OrderEntryProp.exchange = netposition.exSeg;
    //OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(FetchSymbol(scripInfo.split(","), user.sessionKey));
    setTimeout(function () {
      dispatch(setOrderEntryProps(OrderEntryProp));
      dispatch(openSellOrderEntry());
    }, 300);
  }

  function SetMenuflag(e: any) {
    e.preventDefault();
    if (e._reactName == "onMouseOver") {
      if (Menuflag == true) {
        ShowMenu(false);
      }
    } else {
      ShowMenu(!Menuflag);
    }
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
          onClick={(e) => OpenOrderEntry(e, netposition, "E")}
        ></button>
      </td>
      <td>
        <h3>
          {netposition.trdSym}
          <span>{getSegmentName(netposition.exSeg)}</span>
        </h3>
        <div className={"watchlistbox" + (Menuflag ? " show" : "")}>
          <button
            type="button"
            className="btn btn-primary wmore dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={(e) => SetMenuflag(e)}
            onMouseOver={(e) => SetMenuflag(e)}
          ></button>
          <div
            className={"dropdown-menu" + (Menuflag ? " show" : "")}
            aria-labelledby="dropdownMenuButton"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => OpenOrderEntry(e, netposition, "E")}
            >
              <img src="images/positions/exit.svg" /> Exit
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => OpenOrderEntry(e, netposition, "A")}
            >
              <img src="images/positions/add.svg" /> Add
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/convert.svg" /> Convert
            </a>
            {/*<a className="dropdown-item" href="#">
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
            </a> */}
          </div>
        </div>
      </td>

      <td>{Math.abs(netposition.NetQty)}</td>
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
        {netposition.Change != undefined
          ? netposition.Change.toFixed(2)
          : "0.00"}
        %
      </td>
    </tr>
  );
};

export default NetPositionV;
