import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { closeOrderEntry } from "./orderEntrySlice";
import "./orderEntry.css";

const OrderEntryComp = () => {
  const dispatch = useAppDispatch();
  function onCancelClick()
  {
    dispatch(closeOrderEntry());
  }; 
  const orderEntryState = useAppSelector((state)=>state.orderEntry);
  return (
    <div className="order_window">      
      <h1>Order Entry {orderEntryState.nBuySell===1 ? "BUY" : "SELL"}</h1>
      <button className={"btn_mw_overlay_2 " + (orderEntryState.nBuySell === 1 ? "btn_buy" : "btn_Sell")}  style={{ backgroundColor: orderEntryState.nBuySell === 1 ? "blue" : "red"}}>{orderEntryState.nBuySell===1 ? "BUY" : "SELL"}</button>
      <span>
      <button onClick={onCancelClick}>Cancel</button>
      </span>
    </div>
  )
}

export default OrderEntryComp

