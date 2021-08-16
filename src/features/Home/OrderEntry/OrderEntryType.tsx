import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setMarketOrder,
  setLimitOrder,
  setSLOrder,
  setSLMOrder,
} from "./orderEntrySlice";

const OrderEntryType = () => {
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="four columns price">
        <div className="su-radio-group order-type">
          <div
            className="su-radio-wrap"
            tooltip-pos="down"
            aria-label="Buy at market price"
            data-balloon-pos="down"
            onClick={() => dispatch(setMarketOrder())}
          >
            <input
              id="radio-212"
              type="radio"
              name="orderType"
              title="Buy at market price"
              data-label="Market"
              className="su-radio"
              value="MARKET"
              checked={orderEntryState.orderType === 0 ? true : false}
              onChange={()=>{}}
            />
            <label data-for="radio-212" className="su-radio-label">
              Market
            </label>
          </div>
          <div
            className="su-radio-wrap"
            tooltip-pos="down"
            aria-label="Buy at a preferred price"
            data-balloon-pos="down"
            onClick={() => dispatch(setLimitOrder())}
          >
            <input
              id="radio-213"
              type="radio"
              name="orderType"
              title="Buy at a preferred price"
              data-label="Limit"
              className="su-radio"
              value="LIMIT"
              checked={orderEntryState.orderType === 1 ? true : false}
              onChange={()=>{}}
            />
            <label data-for="radio-213" className="su-radio-label">
              Limit
            </label>
          </div>
        </div>
      </div>
      <div className="four columns trigger">
        <div className="su-radio-group text-right order-type">
          <div
            className="su-radio-wrap"
            tooltip-pos="down"
            aria-label="Buy at a preferred price with a stoploss"
            data-balloon-pos="down"
            onClick={() => dispatch(setSLOrder())}
          >
            <input
              id="radio-215"
              type="radio"
              name="orderType"
              title="Buy at a preferred price with a stoploss"
              data-label="SL"
              className="su-radio"
              value="SL"
              checked={orderEntryState.orderType === 2 ? true : false}
              onChange={()=>{}}
            />
            <label data-for="radio-215" className="su-radio-label">
              SL
            </label>
          </div>
          <div
            className="su-radio-wrap"
            tooltip-pos="down"
            aria-label="Buy at market price with stoploss"
            data-balloon-pos="down"
            onClick={() => dispatch(setSLMOrder())}
          >
            <input
              id="radio-216"
              type="radio"
              name="orderType"
              title="Buy at market price with stoploss"
              data-label="SL-M"
              className="su-radio"
              value="SL-M"
              checked={orderEntryState.orderType === 3 ? true : false}
              onChange={()=>{}}
            />
            <label data-for="radio-216" className="su-radio-label">
              SL-M
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEntryType;
