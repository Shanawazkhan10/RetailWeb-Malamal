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
    if (e.target.value > orderEntryState.quantity) {
      e.target.setCustomValidity("Disclosed qty can`t be higher than qty.");
    } else {
      e.target.setCustomValidity("");
    }
    dispatch(setDisclosedQty(e.target.value));
  }
  return (
    <div id="collapse" className="row more">
      <div className="col-md-8">
        <div className="columns validity">
          <label>Validity</label>
          <div className="su-radio-group">
            <div
              // className={
              //   "mr-3" + (orderEntryState.validity === "DAY" ? " checked" : "")
              // }
              className="mr-3 checked"
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
              <label htmlFor="radio-273" className="su-radio-label">
                Day
              </label>
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
      </div>
      {orderEntryState.isDisclosedQtyVisible && (
        <div className="col-md-4 float-right">
          <div className="form">
            <input
              type="text"
              placeholder=""
              data-autocorrect="off"
              min="0"
              step="1"
              max={8}
              value={orderEntryState.disclosedQty}
              onChange={onDisclosedQtyChange}
              className="form__input"
              id="discqty"
            />
            <label htmlFor="discqty" className="form__label">
              Disclosed qty.
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderEntryValidity;
