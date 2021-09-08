import React from "react";
import PropTypes from "prop-types";
import { useAppDispatch } from "../../../../app/hooks";
import { CloseDepth } from "./MarketPictureSlice";
import {
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import { userWS } from "../../../WebSocket/HSSocket";
import { IMarketWatchTokenInfo } from "./../../../../types/IMarketWatchTokenInfo";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";
import { IOrderEntryProps } from "../../../../types/OrderEntry/IOrderEntryProps";
import { IGTTEntryProps } from "../../../../types/OrderEntry/IGTTEntryProps";

const MarketPictureOrderEntry = (props: {
  TokenInfo: IMarketWatchTokenInfo;
}) => {
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
  const OrderEntryProp = {
    token: "",
    exchange: "",
    quantity: 0,
    price: "",
    triggerprice: "",
    symbol: "",
  } as IOrderEntryProps;

  const GTTEntryProp = {
    token: "",
    exchange: "",
    quantity: 0,
    price: "",
    triggerprice: "",
    symbol: "",
  } as IGTTEntryProps;

  function onBuyOrderEntryClick(symbolInfo: IMarketWatchTokenInfo) {
    OrderEntryProp.token = symbolInfo.tok;
    OrderEntryProp.price = symbolInfo.ltp;
    OrderEntryProp.quantity = 1;
    OrderEntryProp.symbol = symbolInfo.sym;
    OrderEntryProp.exchange = symbolInfo.exSeg;
    OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openBuyOrderEntry());
  }
  function onSellOrderEntryClick(symbolInfo: IMarketWatchTokenInfo) {
    OrderEntryProp.token = symbolInfo.tok;
    OrderEntryProp.price = symbolInfo.ltp;
    OrderEntryProp.quantity = 1;
    OrderEntryProp.symbol = symbolInfo.sym;
    OrderEntryProp.exchange = symbolInfo.exSeg;
    OrderEntryProp.ltp = symbolInfo.ltp;
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openSellOrderEntry());
  }
  return (
    <div className="">
      <button className=" btn_buy" title="Create GTT" onClick={() => onClose()}>
        Create GTT
      </button>

      <button
        className=" btn_buy"
        title="Buy"
        onClick={() => onBuyOrderEntryClick(props.TokenInfo)}
      >
        Buy
      </button>
      <button
        className=" btn_sell"
        title="Sell"
        onClick={() => onSellOrderEntryClick(props.TokenInfo)}
      >
        Sell
      </button>
      <button className=" btn_buy" title="Close" onClick={() => onClose()}>
        Close
      </button>
    </div>
  );
};

export default MarketPictureOrderEntry;
