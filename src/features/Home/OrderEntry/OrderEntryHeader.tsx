import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { openBuyOrderEntry, openSellOrderEntry } from "./orderEntrySlice";

const OrderEntryHeader = () => {
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  //const [buysellToggle, setBuySellToggle] = useState(orderEntryState.isBuy ? false : true);
  const toggleBuySell = () => {
    //setBuySellToggle(buysellToggle ? false : true);
    dispatch(
      orderEntryState.isBuy ? openSellOrderEntry() : openBuyOrderEntry()
    );
  };
  const dispatch = useAppDispatch();
  return (
    <div className="header">
      <div className="row">
        <div className="eight columns">
          <div className="instrument mb-2">
            <span
              className={
                "transaction-type" + (orderEntryState.isBuy ? " buy" : " sell")
              }
            >
              {orderEntryState.isBuy ? "BUY" : "SELL"}
            </span>
            <span className="tradingsymbol">
              <span className="name mr-1">
                {orderEntryState.symbol.split("-")[0].toUpperCase()}
              </span>
              <span className="exchange">
                {orderEntryState.exchange.split("_")[0].toUpperCase()}
              </span>
            </span>
            ×<span className="qty">{orderEntryState.quantity} Qty</span>
          </div>
          <div className="instrument">
            {/* DM: BSE ltp to fetch */}
            {/* <div className="d-inline-block">
              <input type="radio" id="day" name="day" value="day" checked />
              <label htmlFor="day">BSE: 1,577.30</label>
            </div> */}
            <div className="d-inline-block ml-2">
              <input type="radio" id="day" name="day" value="day" checked />
              <label data-for="day">NSE: {orderEntryState.ltp}</label>
            </div>
          </div>
        </div>

        <div className="four columns text-right">
          <div className="wrap-right">
            <div className="nudge"></div>
            <div>
              <span data-balloon="Toggle Buy / Sell" data-balloon-pos="up">
                <div
                  className="su-switch-group tx-toggle"
                  onClick={toggleBuySell}
                >
                  <input
                    id="switch-197"
                    type="checkbox"
                    className="su-switch"
                    value={orderEntryState.isBuy ? "Buy" : "Sell"}
                    checked={!orderEntryState.isBuy}
                    onChange={() => {}}
                  />
                  <label
                    htmlFor="switch-197"
                    className="su-switch-control"
                  ></label>
                </div>
              </span>
              <a
                target="_blank"
                href=""
                className="info"
                data-balloon="Help"
                data-balloon-pos="up"
              >
                <span className="icon icon-info"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEntryHeader;
