import React from "react";
import PropTypes from "prop-types";
import { useAppDispatch } from "../../../../app/hooks";
import { CloseDepth } from "./MarketPictureSlice";
import {
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import { userWS } from "../../../WebSocket/HSSocket";

const MarketPictureOrderEntry = () => {
  const dispatch = useAppDispatch();
  function onClose() {
    dispatch(CloseDepth(""));
    //Unsubscribe Script  & Depth API Call
    const subUnsubReq: SubUnsubReq = {
      type: "mwu",
      scrips: "nse_cm|11536",
      channelnum: 5,
    };

    let req = JSON.stringify(subUnsubReq);
    waitForSocketConnection(userWS, function () {
      userWS.send(req);
    });

    const subUnsubReqSepth: SubUnsubReq = {
      type: "dpu",
      scrips: "nse_cm|11536",
      channelnum: 5,
    };

    let reqDepth = JSON.stringify(subUnsubReqSepth);
    waitForSocketConnection(userWS, function () {
      userWS.send(reqDepth);
    });
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
