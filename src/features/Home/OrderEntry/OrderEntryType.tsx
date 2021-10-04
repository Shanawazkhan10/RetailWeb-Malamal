import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setMarketOrder,
  setLimitOrder,
  setSLOrder,
  setSLMOrder,
  setValidityWindow,
} from "./orderEntrySlice";

const OrderEntryType = () => {
  function onMoreClick(e: any) {
    e.preventDefault();
    dispatch(setValidityWindow());
  }
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const dispatch = useAppDispatch();
  return (
    <div className="row">
      <div className="col-md-4">
        <a
          href="#collapse"
          id="toggle"
          onClick={onMoreClick}
          className="nav-toggle"
        >
          {orderEntryState.isValidityOpen ? "Hide" : "More"}
          {/* <span
                              className={
                                "icon" +
                                (orderEntryState.isValidityOpen
                                  ? " icon-chevron-up"
                                  : " icon-chevron-down")
                              }
                            ></span> */}
        </a>
      </div>
      <div className="col-md-4">
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
              checked={orderEntryState.orderType === "MKT" ? true : false}
              onChange={() => {}}
            />
            <label htmlFor="radio-212" className="su-radio-label">
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
              checked={orderEntryState.orderType === "L" ? true : false}
              onChange={() => {}}
            />
            <label htmlFor="radio-213" className="su-radio-label">
              Limit
            </label>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="su-radio-group text-right order-type float-right">
          <div
            aria-disabled="true"
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
              checked={orderEntryState.orderType === "SL" ? true : false}
              onChange={() => {}}
            />
            <label htmlFor="radio-215" className="su-radio-label">
              SL
            </label>
          </div>
          <div
            className="su-radio-wrap"
            tooltip-pos="down"
            aria-label="Buy at market price with stoploss"
            data-balloon-pos="down"
            onClick={() => dispatch(setSLMOrder())}

            // disabled={orderEntryState.variety === 1 ? true : false}
          >
            <input
              id="radio-216"
              type="radio"
              name="orderType"
              title="Buy at market price with stoploss"
              data-label="SL-M"
              className="su-radio"
              value="SL-M"
              checked={orderEntryState.orderType === "SL-M" ? true : false}
              onChange={() => {}}
            />
            <label htmlFor="radio-216" className="su-radio-label">
              SL-M
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEntryType;
