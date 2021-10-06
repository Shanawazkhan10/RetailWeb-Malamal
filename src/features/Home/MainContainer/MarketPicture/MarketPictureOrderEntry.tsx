import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { IGTTEntryProps } from "../../../../types/OrderEntry/IGTTEntryProps";
import { IOrderEntryProps } from "../../../../types/OrderEntry/IOrderEntryProps";
import { userWS } from "../../../WebSocket/HSSocket";
import {
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import {
  openGTTEntry,
  setGTTEntryProps,
} from "../../GTTOrderEntry/gttEntrySlice";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";
import { IMarketWatchTokenInfo } from "./../../../../types/IMarketWatchTokenInfo";
import { CloseDepth } from "./MarketPictureSlice";

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
    OrderEntryProp.symbol = symbolInfo.trdSym;
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
  function onCreateGTTOrderClick(symbolInfo: IMarketWatchTokenInfo, e: any) {
    e.preventDefault();
    GTTEntryProp.token = symbolInfo.tok;
    GTTEntryProp.price = symbolInfo.ltp;
    GTTEntryProp.quantity = 1;
    GTTEntryProp.symbol = symbolInfo.sym;
    GTTEntryProp.exchange = symbolInfo.exSeg;
    GTTEntryProp.ltp = +symbolInfo.ltp;
    dispatch(setGTTEntryProps(GTTEntryProp));
    dispatch(openGTTEntry());
  }
  return (
    // <div className="">
    //   <button className=" btn_buy" title="Create GTT" onClick={() => onClose()}>
    //     Create GTT
    //   </button>

    //   <button
    //     className=" btn_buy"
    //     title="Buy"
    //     onClick={() => onBuyOrderEntryClick(props.TokenInfo)}
    //   >
    //     Buy
    //   </button>
    //   <button
    //     className=" btn_sell"
    //     title="Sell"
    //     onClick={() => onSellOrderEntryClick(props.TokenInfo)}
    //   >
    //     Sell
    //   </button>
    //   <button className=" btn_buy" title="Close" onClick={() => onClose()}>
    //     Close
    //   </button>
    // </div>

    <div className="row btn3">
      <div className="col-md-4 pr-0">
        <button
          type="submit"
          className="btn w-100 modal-buy"
          onClick={() => onBuyOrderEntryClick(props.TokenInfo)}
        >
          buy
        </button>
      </div>
      <div className="col-md-4 py-0">
        <button
          type="submit"
          className="btn w-100 modal-sell"
          onClick={() => onSellOrderEntryClick(props.TokenInfo)}
        >
          sell
        </button>
      </div>
      <div className="col-md-4 pl-0">
        <button
          type="submit"
          className="btn w-100 modal-gtt"
          onClick={(e) => onCreateGTTOrderClick(props.TokenInfo, e)}
        >
          Create GTT
        </button>
      </div>

      {/* <div className="col-md-4">
        <button
          type="submit"
          className="btn w-100 modal-gtt"
          onClick={(e) => onClose()}
        >
          Close
        </button>
      </div> */}
    </div>
  );
};

export default MarketPictureOrderEntry;
