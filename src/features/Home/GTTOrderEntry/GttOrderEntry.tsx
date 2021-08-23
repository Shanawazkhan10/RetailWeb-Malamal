import "./gttentry.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  closeGTTEntry,
  setBuyOrderEntry,
  setSellOrderEntry,
  setTriggertype,
  setTriggerPrice,
  setQty,
  setPrice,
  setSLPrice,
  setSLQty,
  setSLTriggerPrice,
  setLTPChange,
  setSLLTPChange,
} from "./gttEntrySlice";

const GttOrderEntry = () => {
  const dispatch = useAppDispatch();
  const gttEntryState = useAppSelector((state) => state.gttEntry);

  function onTriggerPriceChange(e: any) {
    dispatch(setTriggerPrice(e.target.value));
  }
  function onQuantityChange(e: any) {
    dispatch(setQty(e.target.value));
  }
  function onPriceChange(e: any) {
    dispatch(setPrice(e.target.value));
  }
  function onSLTriggerPriceChange(e: any) {
    dispatch(setSLTriggerPrice(e.target.value));
  }
  function onSLQuantityChange(e: any) {
    dispatch(setSLQty(e.target.value));
  }
  function onSLPriceChange(e: any) {
    dispatch(setSLPrice(e.target.value));
  }
  function onLTPChcnage(e: any) {
    dispatch(setLTPChange(e.target.value));
  }
  function onSLLTPChcnage(e: any) {
    dispatch(setSLLTPChange(e.target.value));
  } 

  return (
    <div
      className={
        "modal-mask gtt-window" +
        (gttEntryState.isBuy
          ? " transaction-type-buy"
          : " transaction-type-sell")
      }
    >
      <div className="modal-wrapper">
        <div className="modal-container layer-2">
          <div className="modal-header">
            <div>
              <div className="row header-row">
                <div className="instrument-info eight columns header-left">
                  <span className="tradingsymbol">{gttEntryState.symbol}</span>
                  <span className="text-label text-label-outline blue exchange">
                    NSE
                  </span>
                  <span className="text-xsmall dim last-price">
                    {gttEntryState.ltp}
                  </span>
                </div>
                <div className="four columns text-right header-right">
                  <a
                    target="_blank"
                    href=""
                    aria-label="Help"
                    data-balloon-pos="up"
                  >
                    <span className="icon icon-info"></span>
                  </a>
                  <a target="_blank" href="" className="branding">
                    <img alt="GTT logo" src="/static/images/gtt-logo.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div>
              <div className="select-row row">
                <div className="row">
                  <div className="select-transaction-type four columns">
                    <div className="section-title">Transaction type</div>
                    <div className="section-content">
                      <div className="su-radio-group products">
                        <div
                          className={
                            "transaction-type su-radio-wrap " +
                            (gttEntryState.isBuy ? "Cheked " : "") +
                            (gttEntryState.triggerType === 1 ? "disabled" : "")
                          }
                          onClick={() => dispatch(setBuyOrderEntry())}
                        >
                          <input
                            id="radio-218"
                            type="radio"
                            data-label="Buy"
                            className="su-radio"
                            value="BUY"
                            checked={gttEntryState.isBuy ? true : false}
                            disabled={
                              gttEntryState.triggerType === 1 ? true : false
                            }
                            onChange={() => {}}
                          />
                          <label htmlFor="radio-218" className="su-radio-label">
                            Buy
                          </label>
                        </div>
                        <div
                          className={
                            "transaction-type su-radio-wrap" +
                            (!gttEntryState.isBuy ? " Cheked" : "")
                          }
                          onClick={() => dispatch(setSellOrderEntry())}
                        >
                          <input
                            id="radio-219"
                            type="radio"
                            data-label="Sell"
                            className="su-radio"
                            value="SELL"
                            checked={gttEntryState.isBuy ? false : true}
                            onChange={() => {}}
                          />
                          <label htmlFor="radio-219" className="su-radio-label">
                            Sell
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="select-trigger-type eight columns">
                    <div className="section-title">Trigger type</div>
                    <div className="section-content">
                      <div className="su-radio-group trigger-types">
                        <div
                          className={
                            "trigger-type su-radio-wrap" +
                            (gttEntryState.triggerType === 0 ? " checked" : "")
                          }
                          aria-label="Single"
                          data-balloon-pos="up"
                          onClick={() => dispatch(setTriggertype(0))}
                        >
                          <input
                            id="radio-221"
                            type="radio"
                            title="Single"
                            data-label="Single"
                            className="su-radio"
                            value="single"
                            checked={
                              gttEntryState.triggerType === 0 ? true : false
                            }
                            onChange={() => {}}
                          />
                          <label htmlFor="radio-221" className="su-radio-label">
                            Single
                          </label>
                        </div>
                        <div
                          className={
                            "trigger-type su-radio-wrap" +
                            (gttEntryState.isBuy ? " disabled" : "") +
                            (gttEntryState.triggerType === 1 ? " checked" : "")
                          }
                          aria-label="One Cancels Other"
                          data-balloon-pos="up"
                          onClick={() => dispatch(setTriggertype(1))}
                        >
                          <input
                            id="radio-222"
                            type="radio"
                            disabled={gttEntryState.isBuy}
                            title="One Cancels Other"
                            data-label="OCO"
                            className="su-radio"
                            value="two-leg"
                            checked={
                              gttEntryState.triggerType === 1 ? true : false
                            }
                            onChange={() => {}}
                          />
                          <label htmlFor="radio-222" className="su-radio-label">
                            OCO
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        {gttEntryState.triggerType === 0 ? (
                          <p className="text-xxsmall dim">
                            The order is placed when the Last Traded Price (LTP)
                            crosses the trigger price. Can be used to enter or
                            exit a position.
                          </p>
                        ) : (
                          <p className="text-xxsmall dim">
                            One Cancels Other: Either the stoploss or the target
                            order is placed when the Last Traded Price (LTP)
                            crosses the respective trigger. Can be used to set
                            target and stoploss for a position/holding.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="triggers">
              <form>
                {gttEntryState.triggerType == 1 && (
                  <div className="trigger row trigger-0">
                    <div className="trigger-price three columns">
                      <div className="trigger-label">
                        <span className="text-label text-label-outline indigo">
                          Stoploss
                        </span>
                      </div>
                      <div data-prop="trigger-price" className="input-field">
                        <div className="su-input-group su-static-label">
                          <label className="su-input-label su-visible">
                            Trigger price
                          </label>
                          <input
                            type="number"
                            placeholder=""
                            min="0.05"
                            step="0.05"
                            value={gttEntryState.sltriggerprice}
                            onChange={(e) => onSLTriggerPriceChange(e)}
                          />
                        </div>
                      </div>
                      <div className="trigger-picker">
                        <div className="su-input-group">
                          <label className="su-input-label su-visible su-dynamic-label"></label>
                          <input
                            type="number"
                            placeholder=""
                            step="0.01"
                            style={{ "width": "60px" }}
                            value={gttEntryState.slLTPChange}
                            onChange={(e)=>onSLLTPChcnage(e)}
                          />
                        </div>
                        <span>% </span>
                        <span>of LTP</span>
                      </div>
                    </div>
                    <div className="three columns filler">
                      <div className="dim text-xxsmall">
                        Places order
                        <span className="icon icon-arrow-right"></span>
                      </div>
                    </div>
                    <div className="order six columns">
                      <div className="row row-1">
                        <div className="su-radio-group products four columns">
                          <div
                            className="gtt-type su-radio-wrap checked disabled"
                            data-selected="selected"
                            aria-label="Cash and carry. Delivery based trades"
                            data-balloon-pos="up"
                          >
                            <input
                              id="radio-227"
                              type="radio"
                              disabled={true}
                              title="Cash and carry. Delivery based trades"
                              data-label="CNC"
                              className="su-radio"
                              value="CNC"
                              checked={
                                gttEntryState.slproductCode === 1 ? true : false
                              }
                              onChange={() => {}}
                            />
                            <label
                              htmlFor="radio-227"
                              className="su-radio-label"
                            >
                              CNC
                            </label>
                          </div>
                        </div>
                        <div className="su-radio-group order-types eight columns">
                          <div
                            className="gtt-type su-radio-wrap checked disabled"
                            data-selected="selected"
                            aria-label="Limit"
                            data-balloon-pos="up"
                          >
                            <input
                              id="radio-229"
                              type="radio"
                              disabled={true}
                              title="Limit"
                              data-label="LIMIT"
                              className="su-radio"
                              value="LIMIT"
                              checked={
                                gttEntryState.slorderType === 1 ? true : false
                              }
                              onChange={() => {}}
                            />
                            <label
                              htmlFor="radio-229"
                              className="su-radio-label"
                            >
                              LIMIT
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row row-2">
                        <div
                          data-prop="quantity"
                          className="quantity input-field six columns"
                        >
                          <div className="su-input-group su-static-label">
                            <label className="su-input-label su-visible">
                              Qty.
                            </label>
                            <input
                              type="number"
                              placeholder=""
                              min="1"
                              step="1"
                              data-label="Qty."
                              value={gttEntryState.slquantity}
                              onChange={(e) => onSLQuantityChange(e)}
                            />
                          </div>
                        </div>
                        <div
                          data-prop="price"
                          className="price input-field six columns"
                        >
                          <div className="su-input-group su-static-label">
                            <label className="su-input-label su-visible">
                              Price
                            </label>
                            <input
                              type="number"
                              placeholder=""
                              data-autocorrect="off"
                              min="0.05"
                              step="0.05"
                              data-label="Price"
                              value={gttEntryState.slprice}
                              onChange={(e) => {
                                onSLPriceChange(e);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="trigger row trigger-1">
                  <div className="trigger-price three columns">
                    <div className="trigger-label">
                      <span className="text-label text-label-outline indigo">
                        {gttEntryState.triggerType ==1&& "Target"}
                      </span>
                    </div>
                    <div data-prop="trigger-price" className="input-field">
                      <div className="su-input-group su-static-label">
                        <label className="su-input-label su-visible">
                          Trigger price
                        </label>
                        <input
                          type="number"
                          placeholder=""
                          min="0.05"
                          step="0.05"                          
                          value={gttEntryState.triggerprice}
                          onChange={(e)=>onTriggerPriceChange(e)}
                        />
                      </div>
                    </div>
                    <div className="trigger-picker">
                      <div className="su-input-group">
                        <label className="su-input-label su-visible su-dynamic-label"></label>
                        <input
                          type="number"
                          placeholder=""
                          step="0.01"
                          style={{ width: "60px" }}                         
                          value={gttEntryState.LTPchange}
                          onChange={(e)=>onLTPChcnage(e)}
                        />
                      </div>
                      <span>% </span>
                      <span>of LTP</span>
                    </div>
                  </div>
                  <div className="three columns filler">
                    <div className="dim text-xxsmall">
                      Places order
                      <span className="icon icon-arrow-right"></span>
                    </div>
                  </div>
                  <div className="order six columns">
                    <div className="row row-1">
                      <div className="su-radio-group products four columns">
                        <div
                          className="gtt-type su-radio-wrap checked disabled"
                          data-balloon-pos="up"
                        >
                          <input
                            id="radio-315"
                            type="radio"
                            disabled={true}
                            title="Cash and carry. Delivery based trades"
                            className="su-radio"
                            value="CNC"
                            checked={
                              gttEntryState.productCode === 1 ? true : false
                            }
                            onChange={() => {}}
                          />
                          <label htmlFor="radio-315" className="su-radio-label">
                            CNC
                          </label>
                        </div>
                      </div>
                      <div className="su-radio-group order-types eight columns">
                        <div
                          className="gtt-type su-radio-wrap checked disabled"
                          data-balloon="Limit"
                          data-balloon-pos="up"
                        >
                          <input
                            id="radio-317"
                            type="radio"
                            title="Limit"
                            className="su-radio"
                            value="LIMIT"
                            checked={
                              gttEntryState.orderType === 1 ? true : false
                            }
                            onChange={() => {}}
                          />
                          <label htmlFor="radio-317" className="su-radio-label">
                            LIMIT
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row row-2">
                      <div className="quantity input-field six columns">
                        <div className="su-input-group su-static-label">
                          <label className="su-input-label su-visible">
                            Qty.
                          </label>
                          <input
                            type="number"
                            placeholder=""
                            min="1"
                            step="1"
                            value={gttEntryState.quantity}
                            onChange={(e)=>onQuantityChange(e)}
                          />
                        </div>
                      </div>
                      <div className="price input-field six columns">
                        <div className="su-input-group su-static-label">
                          <label className="su-input-label su-visible">
                            Price
                          </label>
                          <input
                            type="number"
                            placeholder=""
                            min="0.05"
                            step="0.05"
                            value={gttEntryState.price}
                            onChange={(e)=>onPriceChange(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="modal-footer">
            <div>
              <div className="row">
                <div className="seven columns tnc-agreement">
                  <p className="text-xxsmall text-light dim disclaimer">
                    By <span>placing</span> I agree to the
                    <a target="_blank" href="">
                      terms
                    </a>
                    and accept that trigger executions are not guaranteed. This
                    trigger expires on 2022-08-18.
                  </p>
                </div>
                <div className="five columns actions text-right">
                  <button
                    type="submit"
                    className={
                      "place" +
                      (gttEntryState.isBuy ? " button-blue" : " button-orange")
                    }
                  >
                    <div>Place</div>
                  </button>
                  <button
                    type="submit"
                    className="button-outline cancel"
                    onClick={() => {
                      dispatch(closeGTTEntry());
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GttOrderEntry;
