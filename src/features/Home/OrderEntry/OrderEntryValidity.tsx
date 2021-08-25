import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setDayValidity,
  setIOCValidity,
  setDisclosedQty,
} from "./orderEntrySlice";

const OrderEntryValidity = () => {
  const dispatch = useAppDispatch();
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  function onDisclosedQtyChange(e: any) {
    dispatch(setDisclosedQty(e.target.value));
  }
  return (
    <div className="row more">
      <div className="eight columns validity">
        <label>Validity</label>
        <div className="su-radio-group">
          <div
            className={
              "su-radio-wrap " +
              (orderEntryState.validity === "DAY" ? " checked" : "")
            }
            aria-label="Regular day order"
            data-balloon-pos="up"
            onClick={() => dispatch(setDayValidity())}
          >
            <input
              id="radio-273"
              type="radio"
              name="validity"
              title="Regular day order"
              className="su-radio"
              value={0}
              checked={orderEntryState.validity === "DAY" ? true : false}
              onChange={() => {}}
            />
            <label className="su-radio-label">Day</label>
          </div>
          {orderEntryState.isIOCVisible && (
            <div
              className={
                "su-radio-wrap " +
                (orderEntryState.validity === "IOC" ? " checked" : "")
              }
              aria-label="Immediate or Cancel"
              data-balloon-pos="up"
              onClick={() => dispatch(setIOCValidity())}
            >
              <input
                id="radio-274"
                type="radio"
                name="validity"
                title="Immediate or Cancel"
                className="su-radio"
                value={1}
                checked={orderEntryState.validity === "IOC" ? true : false}
                onChange={() => {}}
              />
              <label htmlFor="radio-274" className="su-radio-label">
                Immediate or Cancel <span>IOC</span>
              </label>
            </div>
          )}
        </div>
      </div>
      {orderEntryState.isDisclosedQtyVisible && (
        <div className="four columns">
          <div className="no su-input-group su-static-label">
            <label className="su-input-label">Disclosed qty.</label>{" "}
            <input
              type="number"
              placeholder=""
              data-autocorrect="off"
              min="0"
              step="1"
              max={8}
              value={orderEntryState.disclosedQty}
              onChange={onDisclosedQtyChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderEntryValidity;
