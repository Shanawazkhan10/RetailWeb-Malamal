import { useState } from "react";
import { useAppSelector,useAppDispatch } from "../../../app/hooks";
import { openBuyOrderEntry, openSellOrderEntry } from "./orderEntrySlice";



const OrderEntryHeader = () => {
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  //const [buysellToggle, setBuySellToggle] = useState(orderEntryState.isBuy ? false : true);
  const toggleBuySell = () => {
    //setBuySellToggle(buysellToggle ? false : true);    
    dispatch(orderEntryState.isBuy ? openSellOrderEntry():openBuyOrderEntry());    
  };
  const dispatch= useAppDispatch();  
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
        <div>
            <label className="switch">
                <input type="checkbox" onClick={toggleBuySell} checked={!orderEntryState.isBuy}/>
                <span className="slider round"></span>
            </label>

          {/* <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
            
          </label> */}
        </div>
      </div>
    </div>
  );
};

export default OrderEntryHeader;
