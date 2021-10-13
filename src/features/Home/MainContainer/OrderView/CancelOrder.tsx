import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IOrderResponse } from "../../../../types/Order/IOrderResponse";
import {
  ICanceljData,
  IOrderCancelRequest,
} from "../../../../types/Request/IOrderEntryRequest";
import { cancelOrder } from "../../OrderEntry/orderEntrySlice";

const CancelOrderComp = (props: { symbolInfo: IOrderResponse }) => {
  const { symbolInfo } = props;
  const dispatch = useAppDispatch();
  const [showList, setList] = useState(true);
  const userState = useAppSelector((state) => state.user);
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const sSelectedWatchList = useSelector(
    (state: RootState) => state.marketwatch.marketWatch.sSelectedWatchList
  );
  function onCancelOrderClick() {
    ClosePopup();
    const JModdata: ICanceljData = {
      am: orderEntryState.variety === 2 ? "YES" : "NO",
      on: symbolInfo.nOrdNo,
      ts: symbolInfo.sym,
    };

    const OrderCancelRequest: IOrderCancelRequest = {
      jKey: userState.sessionKey,
      jData: JModdata,
    };

    dispatch(cancelOrder(OrderCancelRequest));
  }

  function ClosePopup() {
    setList(false);
  }

  return showList ? (
    <div
      className="modal fade show"
      id="DeleteCModal"
      data-tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: "block", paddingRight: "4px" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">
              Cancel Order
            </h4>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => ClosePopup()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <p className="mb-3">Are you sure you want to cancel the order?</p>
              <button
                type="submit"
                className="btn btn-primary w-100 submitbtn"
                onClick={() => onCancelOrderClick()}
              >
                Yes
              </button>
              <button
                type="submit"
                className="btn btn-primary w-100 submitbtn"
                onClick={() => ClosePopup()}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CancelOrderComp;
