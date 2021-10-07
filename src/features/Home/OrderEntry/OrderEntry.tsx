import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  closeOrderEntry,
  selectProductCode,
  setQty,
  setPrice,
  setTriggerPrice,
  setValidityWindow,
  placeOrder,
  modifyOrder,
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
  IModjData,
  IOrderEntryRequest,
  IOrderModifyRequest,
} from "../../../types/Request/IOrderEntryRequest";
import { displayMessage } from "../../WebSocket/HSSocket1";

const OrderEntryComp = () => {
  const dispatch = useAppDispatch();
  function onCancelClick() {
    dispatch(closeOrderEntry());
  }
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const userState = useAppSelector((state) => state.user);
  function onFormSubmit() {
    if (orderEntryState.typeofOrder === 1) {
      const Jdata: IjData = {
        am: orderEntryState.variety === 2 ? "YES" : "NO",
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

        os: "WEB",
        dq: orderEntryState.disclosedQty.toString(),
        mp: "0",
      };

      const orderentryrequest: IOrderEntryRequest = {
        jKey: userState.sessionKey,
        jData: Jdata,
      };
      dispatch(placeOrder(orderentryrequest));
    } else {
      const JModdata: IModjData = {
        am: orderEntryState.variety === 2 ? "YES" : "NO",
        on: orderEntryState.on,
        vd: orderEntryState.vd,
        ot: orderEntryState.orderType,
        tk: orderEntryState.token,
        ts: orderEntryState.symbol,
        pr: orderEntryState.price,
        tp: orderEntryState.triggerprice,
        qt: orderEntryState.quantity.toString(),
        //es: orderEntryState.exchange,
        os: "WEB",
        dq: orderEntryState.disclosedQty.toString(),
      };

      const OrderModifyRequest: IOrderModifyRequest = {
        jKey: userState.sessionKey,
        jData: JModdata,
      };
      dispatch(modifyOrder(OrderModifyRequest));
    }
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
    // <div
    //   className="modal fade show"
    //   id="BuyWModal"
    //   data-tabindex="-1"
    //   role="dialog"
    //   aria-labelledby="exampleModalLabel"
    //   style={{ display: "block", paddingLeft: "4px" }}
    //   aria-modal="true"
    // >
    // <div className="modal-dialog" role="document">
    //   <div className="modal-content">
    //     <div className="modal-body">
    <form
      className={"order_window " + (orderEntryState.isBuy ? "buy" : "sell")}
      id="popUpBox"
      style={{ display: "block" }}
    >
      <div className="drag-handle"></div>
      <OrderEntryHeader />

      <section className="wrap">
        <OrderEntryVariety />
        <div className="body border-bottom">
          <div className="product_row">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                {/* <div className="su-radio-group"> */}
                <div
                  aria-label="Margin Intraday Squareoff: Requires lower margin. Has to be exited before market close."
                  data-balloon-pos="up"
                  data-balloon-length="large"
                  className="type su-radio-wrap"
                  onClick={() => onProductCodechange("I")}
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
                    value={"I"}
                    checked={orderEntryState.productCode === "I" ? true : false}
                    onChange={() => {}}
                  />
                  <label htmlFor="radio-206" className="su-radio-label">
                    Intraday <span>MIS</span>
                  </label>
                </div>
              </div>
              {orderEntryState.variety !== 1 && (
                <div className="col-sm-6 col-md-6">
                  <div
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
                </div>
              )}
              {/* </div> */}
            </div>
            <div className="fields">
              <div className="row">
                <div className="col-md-4">
                  <div className="form">
                    <input
                      type="text"
                      placeholder=""
                      className="form__input"
                      name="quantity"
                      step="1"
                      min="1"
                      value={orderEntryState.quantity}
                      required={true}
                      onChange={(e) => {
                        onQtyChange(e);
                      }}
                      id="quantity"
                    />
                    <label htmlFor="quantity" className="form__label">
                      Qty.
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form">
                    <input
                      type="text"
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
                      className="form__input"
                      id="price"
                    />
                    <label htmlFor="price" className="form__label">
                      Price
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form">
                    <input
                      type="text"
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
                      className="form__input"
                      id="trigprice"
                    />
                    <label htmlFor="trigprice" className="form__label">
                      Trigger price
                    </label>
                  </div>
                </div>
              </div>

              <OrderEntryType />
            </div>
            {orderEntryState.isValidityOpen && <OrderEntryValidity />}
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-6">
            <div className="margins">
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
          <div className="col-md-6 actions text-right">
            <button
              type="button"
              className="btn btn-primary submitbtn"
              onClick={onFormSubmit}
            >
              <span>{orderEntryState.isBuy === true ? "Buy" : "Sell"}</span>
            </button>
            <button
              type="button"
              className="btn btn-primary submitbtn-no"
              onClick={onCancelClick}
              data-dismiss="modal"
              aria-label="Close"
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </form>
    //{" "}
    //     </div>
    //     //{" "}
    //   </div>
    //   //{" "}
    // </div>
    //   </div>
  );
};

export default OrderEntryComp;
