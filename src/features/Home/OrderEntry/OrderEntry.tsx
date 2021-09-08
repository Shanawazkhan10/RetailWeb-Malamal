import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  closeOrderEntry,
  selectProductCode,
  setQty,
  setPrice,
  setTriggerPrice,
  setValidityWindow,
  placeOrder,
} from "./orderEntrySlice";
import "./orderEntry.css";
import OrderEntryHeader from "./OrderEntryHeader";
import "balloon-css";
import OrderEntryVariety from "./OrderEntryVariety";
import OrderEntryType from "./OrderEntryType";
import OrderEntryValidity from "./OrderEntryValidity";
import { IOrderEntryProps } from "../../../types/OrderEntry/IOrderEntryProps";
import {
  IjData,
  IOrderEntryRequest,
} from "../../../types/Request/IOrderEntryRequest";

const OrderEntryComp = () => {
  const dispatch = useAppDispatch();
  function onCancelClick() {
    dispatch(closeOrderEntry());
  }
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const userState = useAppSelector((state) => state.user);
  function onFormSubmit() {
    const Jdata: IjData = {
      am: "NO",
      es: orderEntryState.exchange,
      pc: orderEntryState.productCode,
      pr: orderEntryState.price,
      ot: orderEntryState.orderType,
      qt: orderEntryState.quantity.toString(),
      rt: orderEntryState.validity,
      tk: orderEntryState.token,
      tp: orderEntryState.triggerprice,
      ts: orderEntryState.symbol,
      tt: orderEntryState.isBuy ? "B" : "S",
      //ig: "",
      os: "WEB",
      dq: orderEntryState.disclosedQty.toString(),
    };

    const orderentryrequest: IOrderEntryRequest = {
      jKey: userState.sessionKey,
      jData: Jdata,
    };
    dispatch(placeOrder(orderentryrequest));
  }

  function onProductCodechange(value: string) {
    dispatch(selectProductCode(value));
  }
  function onQtyChange(e: any) {
    dispatch(setQty(e.target.value));
  }
  function onPriceChange(e: any) {
    dispatch(setPrice(e.target.value));
  }
  function onTriggerPriceChange(e: any) {
    if (e.target.value > orderEntryState.price) {
      e.target.setCustomValidity("Trigger Price can`t be greater than Price.");
    } else {
      e.target.setCustomValidity("");
    }
    dispatch(setTriggerPrice(e.target.value));
  }
  function onMoreClick(e: any) {
    e.preventDefault();
    dispatch(setValidityWindow());
  }

  return (
    <form
      className={"order_window " + (orderEntryState.isBuy ? "buy" : "sell")}
    >
      <div className="drag-handle"></div>
      <OrderEntryHeader />

      <section className="wrap">
        <OrderEntryVariety />
        <div className="body">
          <div className="product_row">
            <div className="su-radio-group">
              <div
                className={
                  "type four columns su-radio-wrap" +
                  (orderEntryState.variety === 1 ? " disabled" : "")
                }
                aria-label="Margin Intraday Squareoff: Requires lower margin. Has to be exited before market close."
                data-balloon-pos="up"
                data-balloon-length="large"
                onClick={() => onProductCodechange("MIS")}
              >
                <input
                  id="radio-206"
                  type="radio"
                  name="product"
                  data-label="Intraday <span>MIS</span>"
                  className={
                    "su-radio" +
                    (orderEntryState.variety === 1 ? " disabled" : "")
                  }
                  value={"MIS"}
                  checked={orderEntryState.productCode === "MIS" ? true : false}
                  onChange={() => {}}
                />
                <label htmlFor="radio-206" className="su-radio-label">
                  Intraday <span>MIS</span>
                </label>
              </div>
              {orderEntryState.variety !== 1 && (
                <div
                  className="type four columns su-radio-wrap"
                  aria-label="CashNCarry: Longterm investment. Requires full upfront margin."
                  data-balloon-pos="up"
                  data-balloon-length="large"
                  onClick={() => onProductCodechange("CNC")}
                >
                  <input
                    id="radio-259"
                    type="radio"
                    name="product"
                    title="CashNCarry: Longterm investment. Requires full upfront margin."
                    data-label="Longterm <span>CNC</span>"
                    className="su-radio"
                    value={"CNC"}
                    checked={
                      orderEntryState.productCode === "CNC" ? true : false
                    }
                    onChange={() => {}}
                  />
                  <label htmlFor="radio-259" className="su-radio-label">
                    Longterm <span>CNC</span>
                  </label>
                </div>
              )}
            </div>
          </div>
          <div className="fields">
            <div className="row">
              <div className="four columns quantity">
                <div className="no su-input-group su-static-label">
                  <label className="su-input-label su-visible">Qty.</label>
                  <input
                    type="number"
                    placeholder=""
                    name="quantity"
                    step="1"
                    min="1"
                    value={orderEntryState.quantity}
                    required={true}
                    onChange={(e) => {
                      onQtyChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="four columns price">
                <div className="no su-input-group su-static-label disabled">
                  <label className="su-input-label su-visible">Price</label>
                  <input
                    type="number"
                    placeholder=""
                    min="0.05"
                    step="0.05"
                    size={8}
                    name="price"
                    disabled={!orderEntryState.isPriceEnabled}
                    value={orderEntryState.price}
                    onChange={(e) => {
                      onPriceChange(e);
                    }}
                    required={true}
                  />
                </div>
              </div>
              <div className="four columns trigger">
                <div className="no su-input-group su-static-label disabled">
                  <label className="su-input-label">Trigger price</label>
                  <input
                    type="number"
                    placeholder=""
                    data-autocorrect="off"
                    min="0"
                    step="0.05"
                    name="triggerprice"
                    size={8}
                    disabled={!orderEntryState.isTriggerPriceEnabled}
                    value={orderEntryState.triggerprice}
                    onChange={(e) => {
                      onTriggerPriceChange(e);
                    }}
                    required={true}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <a
                  href=""
                  onClick={onMoreClick}
                  className="text-xsmall more-options"
                >
                  <span aria-label="More options" data-balloon-pos="up">
                    {orderEntryState.isValidityOpen ? "Hide" : "More"}
                    <span
                      className={
                        "icon" +
                        (orderEntryState.isValidityOpen
                          ? " icon-chevron-up"
                          : " icon-chevron-down")
                      }
                    ></span>
                  </span>
                </a>
              </div>
              <OrderEntryType />
            </div>
          </div>
          {orderEntryState.isValidityOpen && <OrderEntryValidity />}
        </div>
        <footer className="footer">
          <div className="row">
            <div className="six columns">
              <div className="row margins">
                <span className="label">
                  Margin required
                  <a
                    target="_blank"
                    href="#"
                    className="info"
                    aria-label="Margin calculation explained"
                    data-balloon-pos="up"
                  >
                    <span className="icon icon-info"></span>
                  </a>
                </span>
                <span className="margin-value">₹299.95</span>
                <a href="" aria-label="Refresh" data-balloon-pos="up">
                  <span className="reload-margin icon icon-reload"></span>
                </a>
              </div>
            </div>
            <div className="six columns text-right actions">
              <button type="button" className="submit" onClick={onFormSubmit}>
                <span>{orderEntryState.isBuy === true ? "Buy" : "Sell"}</span>
              </button>
              <button
                type="button"
                className="button-outline cancel"
                onClick={onCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </footer>
      </section>
    </form>
  );
};

export default OrderEntryComp;
