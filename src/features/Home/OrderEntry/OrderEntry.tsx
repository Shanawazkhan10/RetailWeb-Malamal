import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  closeOrderEntry,
  selectProductCode,
  setQty,
  setPrice,
  setTriggerPrice,
  setValidityWindow,
} from "./orderEntrySlice";
import "./orderEntry.css";
import OrderEntryHeader from "./OrderEntryHeader";
import "balloon-css";
import OrderEntryVariety from "./OrderEntryVariety";
import OrderEntryType from "./OrderEntryType";
import OrderEntryValidity from "./OrderEntryValidity";

interface IOrderentryInput {
  token: number;
  quantity: number;
  price: number;
  triggerprice: number;
}

const OrderEntryComp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IOrderentryInput>();

  const dispatch = useAppDispatch();
  function onCancelClick() {
    dispatch(closeOrderEntry());
  }
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const onSubmit: SubmitHandler<IOrderentryInput> = (data) => {
    console.log(data);
  };

  function onProductCodechange(value: any) {
    dispatch(selectProductCode(value));
  }
  function onQtyChange(e: any) {
    dispatch(setQty(e.target.value));
  }
  function onPriceChange(e: any) {
    dispatch(setPrice(e.target.value));
  }
  function onTriggerPriceChange(e: any) {
    dispatch(setTriggerPrice(e.target.value));
  }
  function onMoreClick(e:any) {
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
                onClick={() => onProductCodechange(0)}
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
                  value={0}
                  checked={orderEntryState.productCode === 0 ? true : false}
                  onChange={() => {}}
                />
                <label data-for="radio-206" className="su-radio-label">
                  Intraday <span>MIS</span>
                </label>
              </div>
              {orderEntryState.variety !== 1 && (
                <div
                  className="type four columns su-radio-wrap"
                  aria-label="CashNCarry: Longterm investment. Requires full upfront margin."
                  data-balloon-pos="up"
                  data-balloon-length="large"
                  onClick={() => onProductCodechange(1)}
                >
                  <input
                    id="radio-259"
                    type="radio"
                    name="product"
                    title="CashNCarry: Longterm investment. Requires full upfront margin."
                    data-label="Longterm <span>CNC</span>"
                    className="su-radio"
                    value={1}
                    checked={orderEntryState.productCode === 1 ? true : false}
                    onChange={() => {}}
                  />
                  <label data-for="radio-259" className="su-radio-label">
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
                    {...register('quantity', { required: true, maxLength: 8,min:1,max:999999 })}
                    type="number"
                    placeholder=""
                    data-autocorrect="off"
                    min="1"
                    step="1"
                    value={orderEntryState.qty}
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
                    {...register('price', { required: true, maxLength: 8,min:1,max:999999 })}
                    type="number"
                    placeholder=""
                    data-autocorrect="off"
                    min="0.05"
                    step="0.05"
                    size={8}
                    disabled={!orderEntryState.isPriceEnabled}
                    value={orderEntryState.price}
                    onChange={(e) => {
                      onPriceChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="four columns trigger">
                <div className="no su-input-group su-static-label disabled">
                  <label className="su-input-label">Trigger price</label>
                  <input
                    {...register('triggerprice', { required: true, maxLength: 8,min:1,max:999999 })}
                    type="number"
                    placeholder=""
                    data-autocorrect="off"
                    min="0"
                    step="0.05"
                    size={8}
                    disabled={!orderEntryState.isTriggerPriceEnabled}
                    value={orderEntryState.triggerprice}
                    onChange={(e) => {
                      onTriggerPriceChange(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <a href="" onClick={onMoreClick} className="text-xsmall more-options">
                  <span aria-label="More options" data-balloon-pos="up">
                    {orderEntryState.isValidityOpen ? "Hide": "More"}
                     <span className={"icon" + (orderEntryState.isValidityOpen? " icon-chevron-up": " icon-chevron-down")}></span>
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
                <a href="#" aria-label="Refresh" data-balloon-pos="up">
                  <span className="reload-margin icon icon-reload"></span>
                </a>
              </div>
            </div>
            <div className="six columns text-right actions">
              <button type="submit" className="submit">
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
