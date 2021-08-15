import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { closeOrderEntry } from "./orderEntrySlice";
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
  return (
    <form
      className={"order_window " + (orderEntryState.isBuy ? "buy" : "sell")}
    >
      <div className="drag-handle"></div>
      <OrderEntryHeader />

      <section>
        <h1>Order Entry {orderEntryState.isBuy ? "BUY" : "SELL"}</h1>

        <div className="variety">
          <div className="su-radio-group">
            <div
              className="type su-radio-wrap checked"
              data-balloon="Regular order"
              data-balloon-pos="up"
            >
              <input
                id="radio-181"
                type="radio"
                name="variety"
                title="Regular order"
                data-label="Regular"
                className="su-radio"
                value="regular"
              />
              <label data-for="radio-181" className="su-radio-label">
                Regular
              </label>
            </div>
            <div
              className="type su-radio-wrap checked"
              data-balloon="Cover order"
              data-balloon-pos="up"
            >
              <input
                id="radio-181"
                type="radio"
                name="variety"
                title="Cover order"
                data-label="Cover"
                className="su-radio"
                value="cover"
              />
              <label data-for="radio-181" className="su-radio-label">
                Cover
              </label>
            </div>
            <div
              className="type su-radio-wrap checked"
              data-balloon="AMO order"
              data-balloon-pos="up"
            >
              <input
                id="radio-181"
                type="radio"
                name="variety"
                title="AMO order"
                data-label="Cover"
                className="su-radio"
                value="AMO"
              />
              <label data-for="radio-181" className="su-radio-label">
                AMO
              </label>
            </div>
          </div>
        </div>

        <span>
          <input type="radio" name="producttype" value="Intraday MIS" />
          <input type="radio" name="producttype" value="LongTerm CNC" />
        </span>
        <span>
          <input
            {...register("quantity", {
              required: "QTY is required.",
            })}
            id="quantity"
            name="quantity"
            placeholder="Qty."
            type="number"
            maxLength={5}
          />
        </span>
        <span>
          <input
            {...register("price", {
              required: "Price is required.",
            })}
            id="price"
            name="price"
            placeholder="Price"
            type="number"
            maxLength={9}
          />
        </span>
        <span>
          <input type="radio" name="ordertype" value="Market" />
          <input type="radio" name="ordertype" value="Limit" />
        </span>
        <span>
          <input type="radio" name="producttype" value="Intraday MIS" />
          <input type="radio" name="producttype" value="LongTerm CNC" />
        </span>
        <span>
          <input
            {...register("quantity", {
              required: "QTY is required.",
            })}
            id="quantity"
            name="quantity"
            placeholder="Qty."
            type="number"
            maxLength={5}
          />
        </span>
        <span>
          <input
            {...register("price", {
              required: "Price is required.",
            })}
            id="price"
            name="price"
            placeholder="Price"
            type="number"
            maxLength={9}
          />
        </span>
        <span>
          <input type="radio" name="ordertype" value="Market" />
          <input type="radio" name="ordertype" value="Limit" />
        </span>
        <span>
          <button
            type="submit"
            className={
              "btn_mw_overlay_2 " +
              (orderEntryState.isBuy ? "btn_buy" : "btn_Sell")
            }
            style={{
              backgroundColor: orderEntryState.isBuy ? "blue" : "red",
            }}
          >
            {orderEntryState.isBuy ? "BUY" : "SELL"}
          </button>
        </span>
        <span>
          <button
            className={"submit" + (orderEntryState.isBuy ? "buy" : "sell")}
            type="button"
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </span>
      </section>
    </form>
  );
};

export default OrderEntryComp;
