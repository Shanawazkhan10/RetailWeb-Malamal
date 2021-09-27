import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IOrderResponse } from "../../../../types/Order/IOrderResponse";
import { ICancelOrderProps } from "../../../../types/OrderEntry/ICancelOrderProps";
import { IModifyOrderProps } from "../../../../types/OrderEntry/IModifyOrderProps";
import { IOrderEntryProps } from "../../../../types/OrderEntry/IOrderEntryProps";
import {
  ICanceljData,
  IOrderCancelRequest,
} from "../../../../types/Request/IOrderEntryRequest";
import {
  cancelOrder,
  openBuyOrderEntry,
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";

const OrderView = (props: { order: IOrderResponse }) => {
  const { order } = props;
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  //const dispatch = useAppDispatch();

  const OrderEntryProp = {
    token: "",
    exchange: "",
    quantity: 0,
    price: "",
    triggerprice: "",
    symbol: "",
  } as IOrderEntryProps;

  const ModifyOrderProp = {
    token: "",
    exchange: "",
    quantity: 0,
    price: "",
    triggerprice: "",
    symbol: "",
    on: "",
    vd: "",
  } as IModifyOrderProps;

  const [Menuflag, ShowMenu] = useState(false);

  function renderOrderStatus(product: String) {
    switch (product) {
      case "rejected":
        return "btn-reject";
      case "open":
        return "purple";
      case "complete":
        return "btn-complete";
      default:
        return "foo";
    }
  }

  function onBuyOrderEntryClick(
    e: any,
    symbolInfo: IOrderResponse,
    actiontype: string
  ) {
    e.preventDefault();
    ShowMenu(!Menuflag);
    OrderEntryProp.token = symbolInfo.tok;
    if (actiontype == "Repeat") {
      OrderEntryProp.price = symbolInfo.prc;
    } else if (actiontype == "Buy") {
      OrderEntryProp.price = symbolInfo.ltp;
    }
    OrderEntryProp.quantity = 1; //symbolInfo.fldQty;
    OrderEntryProp.symbol = symbolInfo.sym;
    OrderEntryProp.exchange = symbolInfo.exSeg;
    //OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openBuyOrderEntry());
  }

  function onSellOrderEntryClick(e: any, symbolInfo: IOrderResponse) {
    e.preventDefault();
    OrderEntryProp.token = symbolInfo.tok;
    //OrderEntryProp.price = symbolInfo.ltp;
    OrderEntryProp.quantity = 1; // symbolInfo.fldQty;
    OrderEntryProp.symbol = symbolInfo.sym;
    OrderEntryProp.exchange = symbolInfo.exSeg;
    //OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openSellOrderEntry());
  }

  function onModifyOrderClick(e: any, symbolInfo: IOrderResponse) {
    e.preventDefault();
    ModifyOrderProp.token = symbolInfo.tok;
    ModifyOrderProp.price = symbolInfo.prc;
    ModifyOrderProp.quantity = symbolInfo.qty;
    ModifyOrderProp.symbol = symbolInfo.sym;
    ModifyOrderProp.exchange = symbolInfo.exSeg;
    ModifyOrderProp.on = symbolInfo.nOrdNo;
    ModifyOrderProp.vd = symbolInfo.vldt;
    ModifyOrderProp.exchange = symbolInfo.exSeg;
    ModifyOrderProp.typeofOrder = 2;
    dispatch(setOrderEntryProps(ModifyOrderProp));
    if (symbolInfo.trnsTp == "B") {
      dispatch(openBuyOrderEntry());
    } else if (symbolInfo.trnsTp == "S") {
      dispatch(openSellOrderEntry());
    }
  }

  function onCancelOrderClick(e: any, symbolInfo: IOrderResponse) {
    e.preventDefault();

    const JModdata: ICanceljData = {
      am: "NO",
      on: symbolInfo.nOrdNo,
      ts: symbolInfo.sym,
    };

    const OrderCancelRequest: IOrderCancelRequest = {
      jKey: userState.sessionKey,
      jData: JModdata,
    };

    dispatch(cancelOrder(OrderCancelRequest));
  }

  return (
    <tbody>
      <tr className="odd_col">
        <td>{order.ordDtTm.split(" ")[1]}</td>
        <td>
          <div className="nbox">
            <p className={"b" + (order.trnsTp == "B" ? "buy" : "sell")}>
              {order.trnsTp == "B" ? "Buy" : "Sell"}
            </p>
          </div>
        </td>
        <td>
          <h3>
            {order.sym} <span>{order.exSeg.split("_")[0].toUpperCase()}</span>
          </h3>
          <div className={"watchlistbox" + (Menuflag ? " show" : "")}>
            <button
              type="button"
              className="btn btn-primary wmore dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={Menuflag}
              onClick={() => ShowMenu(!Menuflag)}
            ></button>
            <div
              className={"dropdown-menu" + (Menuflag ? " show" : "")}
              aria-labelledby="dropdownMenuButton"
            >
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => onBuyOrderEntryClick(e, order, "Buy")}
              >
                <img src="images/positions/add.svg" />
                Buy
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => onSellOrderEntryClick(e, order)}
              >
                <img src="images/positions/exit.svg" /> Sell
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => onBuyOrderEntryClick(e, order, "Repeat")}
              >
                <img src="images/positions/convert.svg" /> Repeat
              </a>
              {order.ordSt.toUpperCase() == "OPEN" ? (
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => onModifyOrderClick(e, order)}
                >
                  <img src="images/positions/exit.svg" /> Modify
                </a>
              ) : (
                <></>
              )}

              {order.ordSt.toUpperCase() == "OPEN" ? (
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => onCancelOrderClick(e, order)}
                >
                  <img src="images/positions/exit.svg" /> Cancel
                </a>
              ) : (
                <></>
              )}
              {/*  <a className="dropdown-item" href="#">
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
        <td>{order.prod}</td>
        <td>
          {order.fldQty}/{order.qty}
        </td>
        <td>{order.prc}</td>
        <td>
          <div className="nbox">
            <p className={renderOrderStatus(order.ordSt)}>
              {order.ordSt.toUpperCase()}
            </p>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default OrderView;
