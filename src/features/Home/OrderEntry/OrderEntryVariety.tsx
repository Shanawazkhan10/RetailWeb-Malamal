import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectRegularVariety,
  selectCoverVariety,
  selectAMOVariety,
} from "./orderEntrySlice";

const OrderEntryVariety = () => {
  const dispatch = useAppDispatch();
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  function onRegularVarietyclick() {
    dispatch(selectRegularVariety());
  }

  function onCoverVarietyclick() {
    dispatch(selectCoverVariety());
  }

  function onAMOVarietyclick() {
    dispatch(selectAMOVariety());
  }
  return (
    <div className="variety">
      <div className="su-radio-group">
        <div
          className={
            "type su-radio-wrap" +
            (orderEntryState.variety === 0 ? " checked" : "")
          }
          aria-label="Regular order"
          data-balloon-pos="up"
          onClick={onRegularVarietyclick}
        >
          <input
            id="radio-181"
            type="radio"
            name="variety"
            title="Regular order"
            data-label="Regular"
            className="su-radio"
            value="0"
            checked={orderEntryState.variety === 0 ? true : false}
            onChange={() => {}}
          />
          <label className="su-radio-label">Regular</label>
        </div>
        <div
          className={
            "type su-radio-wrap" +
            (orderEntryState.variety === 1 ? " checked" : "")
          }
          aria-label="Cover order"
          data-balloon-pos="up"
          onClick={onCoverVarietyclick}
        >
          <input
            id="radio-182"
            type="radio"
            name="variety"
            title="Cover order"
            data-label="Cover"
            className="su-radio"
            value="1"
            checked={orderEntryState.variety === 1 ? true : false}
            onChange={() => {}}
          />
          <label className="su-radio-label">Cover</label>
        </div>
        <div
          className={
            "type su-radio-wrap" +
            (orderEntryState.variety === 2 ? " checked" : "")
          }
          aria-label="AMO order"
          data-balloon-pos="up"
          onClick={onAMOVarietyclick}
        >
          <input
            id="radio-183"
            type="radio"
            name="variety"
            title="AMO order"
            data-label="Cover"
            className="su-radio"
            value="2"
            checked={orderEntryState.variety === 2 ? true : false}
            onChange={() => {}}
          />
          <label className="su-radio-label">AMO</label>
        </div>
      </div>
    </div>
  );
};

export default OrderEntryVariety;
