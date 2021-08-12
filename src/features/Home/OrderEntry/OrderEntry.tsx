import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { closeOrderEntry, selectProductCode } from "./orderEntrySlice";
import "./orderEntry.css";
import OrderEntryHeader from "./OrderEntryHeader";

interface IOrderentryInput {
  token: number;
  quantity: number;
  price: number;
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
  return (
    <form
      className={"order_window " + (orderEntryState.isBuy ? "buy" : "sell")}
    >
      <div className="drag-handle"></div>
      <OrderEntryHeader />

      <section className="wrap">
        <div className="variety">
          <div className="su-radio-group">
            <div
              className={
                "type su-radio-wrap" +
                (orderEntryState.productCode === 0 ? " checked" : "")
              }
              data-balloon="Regular order"
              data-balloon-pos="up"
              onClick={() => onProductCodechange(0)}
            >
              <input
                id="radio-181"
                type="radio"
                name="variety"
                title="Regular order"
                data-label="Regular"
                className="su-radio"
                value="0"
              />
              <label className="su-radio-label">Regular</label>
            </div>
            <div
              className={
                "type su-radio-wrap" +
                (orderEntryState.productCode === 1 ? " checked" : "")
              }
              data-balloon="Cover order"
              data-balloon-pos="up"
              onClick={() => onProductCodechange(1)}
            >
              <input
                id="radio-181"
                type="radio"
                name="variety"
                title="Cover order"
                data-label="Cover"
                className="su-radio"
                value="1"
              />
              <label className="su-radio-label">Cover</label>
            </div>
            <div
              className={
                "type su-radio-wrap" +
                (orderEntryState.productCode === 2 ? " checked" : "")
              }
              data-balloon="AMO order"
              data-balloon-pos="up"
              onClick={() => onProductCodechange(2)}
            >
              <input
                id="radio-181"
                type="radio"
                name="variety"
                title="AMO order"
                data-label="Cover"
                className="su-radio"
                value="2"
              />
              <label className="su-radio-label">AMO</label>
            </div>
          </div>
        </div>

        <div className="body">
          <div className="product_row">
            <div className="su-radio-group">
              <div
                className="type four columns su-radio-wrap checked"
                data-balloon="Margin Intraday Squareoff: Requires lower margin. Has to be exited before market close."
                data-balloon-pos="up"
                data-balloon-length="large"
              >
                <input
                  id="radio-206"
                  type="radio"
                  name="product"
                  title="Margin Intraday Squareoff: Requires lower margin. Has to be exited before market close."
                  data-label="Intraday <span>MIS</span>"
                  className="su-radio"
                  value="MIS"
                />
                <label data-for="radio-206" className="su-radio-label">
                  Intraday <span>MIS</span>
                </label>
              </div>
              <div
                className="type four columns su-radio-wrap"
                data-balloon="CashNCarry: Longterm investment. Requires full upfront margin."
                data-balloon-pos="up"
                data-balloon-length="large"
              >
                <input
                  id="radio-259"
                  type="radio"
                  name="product"
                  title="CashNCarry: Longterm investment. Requires full upfront margin."
                  data-label="Longterm <span>CNC</span>"
                  className="su-radio"
                  value="CNC"
                />
                <label data-for="radio-259" className="su-radio-label">
                  Longterm <span>CNC</span>
                </label>
              </div>
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
                    data-autocorrect="off"
                    min="1"
                    step="1"
                    data-autofocus="autofocus"
                    data-nativeerror="true"
                    data-staticlabel="true"
                    data-animate="true"
                    data-label="Qty."
                    data-rules="[object Object],[object Object],[object Object]"
                    data-dynamicwidthsize="8"
                  />
                </div>
              </div>
              <div className="four columns price">
                <div className="no su-input-group su-static-label disabled">
                  <label className="su-input-label su-visible">Price</label>
                  <input
                    type="number"
                    placeholder=""
                    data-autocorrect="off"
                    min="0.05"
                    step="0.05"
                    data-nativeerror="true"
                    data-staticlabel="true"
                    data-animate="true"
                    data-label="Price"
                    data-rules="[object Object]"
                    data-dynamicwidthsize="8"
                    data-disabled="disabled"
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
                    data-nativeerror="true"
                    data-staticlabel="true"
                    data-animate="true"
                    data-label="Trigger price"
                    data-rules="[object Object],[object Object]"
                    data-dynamicwidthsize="8"
                    data-disabled="disabled"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <a href="#" className="text-xsmall more-options">
                  <span data-balloon="More options" data-balloon-pos="up">
                    More <span className="icon icon-chevron-down"></span>
                  </span>
                </a>
              </div>
              <div className="four columns price">
                <div className="su-radio-group order-type">
                  <div
                    className="su-radio-wrap checked"
                    tooltip-pos="down"
                    data-balloon="Buy at market price"
                    data-balloon-pos="down"
                  >
                    <input
                      id="radio-212"
                      type="radio"
                      name="orderType"
                      title="Buy at market price"
                      data-label="Market"
                      className="su-radio"
                      value="MARKET"
                    />
                    <label data-for="radio-212" className="su-radio-label">
                      Market
                    </label>
                  </div>
                  <div
                    className="su-radio-wrap"
                    tooltip-pos="down"
                    data-balloon="Buy at a preferred price"
                    data-balloon-pos="down"
                  >
                    <input
                      id="radio-213"
                      type="radio"
                      name="orderType"
                      title="Buy at a preferred price"
                      data-label="Limit"
                      className="su-radio"
                      value="LIMIT"
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
                    data-balloon="Buy at a preferred price with a stoploss"
                    data-balloon-pos="down"
                  >
                    <input
                      id="radio-215"
                      type="radio"
                      name="orderType"
                      title="Buy at a preferred price with a stoploss"
                      data-label="SL"
                      className="su-radio"
                      value="SL"
                    />
                    <label data-for="radio-215" className="su-radio-label">
                      SL
                    </label>
                  </div>
                  <div
                    className="su-radio-wrap"
                    tooltip-pos="down"
                    data-balloon="Buy at market price with stoploss"
                    data-balloon-pos="down"
                  >
                    <input
                      id="radio-216"
                      type="radio"
                      name="orderType"
                      title="Buy at market price with stoploss"
                      data-label="SL-M"
                      className="su-radio"
                      value="SL-M"
                    />
                    <label data-for="radio-216" className="su-radio-label">
                      SL-M
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    data-balloon="Margin calculation explained"
                    data-balloon-pos="up"
                  >
                    <span className="icon icon-info"></span>
                  </a>
                </span>{" "}
                <span className="margin-value">₹299.95</span>
                <a href="#" data-balloon="Refresh" data-balloon-pos="up">
                  <span className="reload-margin icon icon-reload"></span>
                </a>
              </div>
            </div>{" "}
            <div className="six columns text-right actions">
              <button type="submit" className="submit">
                <span>Buy</span>
              </button>
              <button
                type="button"
                className="button-outline cancel"
                onClick={onCancelClick}
              >
                Cancel{" "}
              </button>
            </div>
          </div>
        </footer>
      </section>
    </form>
  );
};

export default OrderEntryComp;
