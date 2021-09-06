import React from "react";
import PropTypes from "prop-types";
import { useAppDispatch } from "../../../../app/hooks";
import { CloseDepth } from "./MarketPictureSlice";

const MarketPictureOrderEntry = () => {
  const dispatch = useAppDispatch();
  function onClose() {
    dispatch(CloseDepth(""));
  }
  return (
    <div className="">
      <button className=" btn_buy" title="Create GTT">
        Create GTT
      </button>

      <button className=" btn_buy" title="Buy">
        Buy
      </button>
      <button className=" btn_sell" title="Sell">
        Sell
      </button>
      <button className=" btn_buy" title="Close" onClick={() => onClose()}>
        Close
      </button>
    </div>
  );
};

export default MarketPictureOrderEntry;
