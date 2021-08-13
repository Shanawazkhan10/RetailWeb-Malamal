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
          <div className="instrument">
            <span className="transaction-type">
              {orderEntryState.isBuy ? "BUY" : "SELL"}
            </span>
            <span className="tradingsymbol">
              <span className="name">RELIANCE</span>
              <span className="exchange">NSE</span>
            </span>
            ×<span className="qty">1 Qty</span>
          </div>
        </div>
        {/* <div>
            <label className="switch">
                <input type="checkbox" onClick={toggleBuySell} checked={!orderEntryState.isBuy}/>
                <span className="slider round"></span>
            </label>
        </div> */}

        <div className="four columns text-right">
          <div className="wrap-right">
            <div className="nudge"></div>
            <div>
              <span data-balloon="Toggle Buy / Sell" data-balloon-pos="up">
                <div className="su-switch-group tx-toggle"  onClick={toggleBuySell} >
                  <input
                    id="switch-197"
                    type="checkbox"                    
                    className="su-switch"
                    value={orderEntryState.isBuy? "Buy":"Sell"}                                                           
                    checked={!orderEntryState.isBuy}
                    onChange={()=>{}}
                  />
                  <label
                    data-for="switch-197"
                    className="su-switch-control"
                  ></label>
                </div>
              </span>
              <a
                target="_blank"
                href="#"
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
