import React, { useEffect } from "react";
import { Collapse } from "reactstrap";
import { GetSymbolDetails, SubscribeMarketDepth } from "../../../../app/api";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IDepthReq } from "../../../../types/IDepthReq";
import { IGTTEntryProps } from "../../../../types/IGTTEntryProps";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import { IOrderEntryProps } from "../../../../types/IOrderEntryProps";
import { ISubscribeDepth } from "../../../../types/ISubscribeDepth";
import HSSocket, { userWS } from "../../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
//import { sendUnsubReq, SubUnsubReq } from "../../../WebSocket/HSSocket1";
import { FetchSocketData } from "../../../WebSocket/WebSocketSlice";
import {
  openGTTEntry,
  setGTTEntryProps,
} from "../../GTTOrderEntry/gttEntrySlice";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";
import { chartContainer } from "../mainContainerSlice";
import {
  updateMarketDepth,
  UpdateTokenInfo,
} from "../MarketPicture/MarketPictureSlice";
import MarketDepth from "./MarketDepth";
import {
  FetchWatchListSymbol,
  getMarketDepthSuccess,
  hideMore,
  ShowMarketDepth,
  showMore,
} from "./MarketWatchSlice";
import Quote from "./Quote";
//import { userWS } from "./../../../WebSocket/HSSocket1";

export interface scriptInfoReq {
  scripArr: string[];
}
const MarketWatchItem = (props: {
  propMarketWatch: IMarketWatch;
  index: number;
}) => {
  const marketWatchState = useAppSelector(
    (state) => state.marketwatch.marketWatch
  );
  const OrderEntryState = useAppSelector((state) => state.orderEntry);
  // const ScriptUpdate = useAppSelector(
  //   (state) => state.socketData.socketdata.Script
  // );
  const [activeItem, setActiveItem] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [depth, setDepth] = React.useState(null);
  const { propMarketWatch } = props;
  const dispatch = useAppDispatch();
  const options = ["one", "two", "three"];

  useEffect(() => {
    //dispatch(setSymbollistindex(props.index));
    getSymbol();
    console.log(" MarketWatchItem useEffect");
  }, []);

  useEffect(() => {
    var a = dispatch(FetchSocketData(22));
  }, []);

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
  function onChartClick() {
    dispatch(chartContainer());
  }
  function RemoveSymbol(tokenInfo: IMarketWatchTokenInfo) {
    dispatch(UpdateTokenInfo(GetSymbolDetails()));

    dispatch(updateMarketDepth(SubscribeMarketDepth(0, 0)));

    //API Call update List & on success call dispatch
    // const RemoveFromWatch: IRemoveFromWatch = {
    //   mwName: propMarketWatch.mwName,
    //   scrips: removeValue(propMarketWatch.scrips, tokenInfo.scrips, "|"),
    //   id: tokenInfo.mwId,
    //   userId: "Test User",
    // };
    // dispatch(RemoveSymbolFromWatchlist(RemoveFromWatch));
    //Unsubscribe Depth API Call
    // if (symbol.showDepth) {
    //   const SubscribeDepth: ISubscribeDepth = {
    //     type: "dpu",
    //     scrips: symbol.scrips,
    //     id: propMarketWatch.id,
    //     channelnum: propMarketWatch.id,
    //   };
    //   UnsubscribeMarketDepth(SubscribeDepth);
    // }
  }
  function removeValue(list: string, value: string, separator: string) {
    separator = ",";
    var values = list.split(separator);
    for (var i = 0; i < values.length; i++) {
      if (values[i] == value) {
        values.splice(i, 1);
        return values.join(separator);
      }
    }
    return list;
  }
  function onDepthClick(index: number, symbol: IMarketWatchTokenInfo) {
    const DepthReq: IDepthReq = {
      id: propMarketWatch.id,
      index: index,
    };
    dispatch(ShowMarketDepth(DepthReq));

    if (!symbol.showDepth) {
      //subscribe Depth API Call
      const SubscribeDepth: ISubscribeDepth = {
        type: "dps",
        scrips: symbol.tok + "|" + symbol.exSeg,
        //id: propMarketWatch.id,
        channelnum: propMarketWatch.id + 1,
      };

      waitForSocketConnection(userWS, function () {
        userWS.send(JSON.stringify(SubscribeDepth));
      });
      // dispatch(
      //   getMarketDepthSuccess(SubscribeMarketDepth(propMarketWatch.id, index))
      // );
    } else {
      //Unsubscribe Depth API Call
      const SubscribeDepth: ISubscribeDepth = {
        type: "dpu",
        scrips: symbol.tok + "|" + symbol.exSeg,
        //id: propMarketWatch.id,
        channelnum: propMarketWatch.id + 1,
      };

      waitForSocketConnection(userWS, function () {
        userWS.send(JSON.stringify(SubscribeDepth));
      });
      //sendUnsubReq(SubscribeDepth);
      // UnsubscribeMarketDepth(SubscribeDepth);
    }
  }
  function getSymbol() {
    //API call to bind Token info (Scrip Info Request)
    // var scrpitArray:string[]=propMarketWatch.scrips.split(",");
    //  const scriptInfoReq:scriptInfoReq {
    //   scripArr:scrpitArray
    // }
    dispatch(
      FetchWatchListSymbol(propMarketWatch.scrips.split(","), props.index)
    );

    //subscribe Script API Call
    const subUnsubReq: SubUnsubReq = {
      type: "mws",
      scrips: propMarketWatch.scrips.replaceAll(",", "&"),
      channelnum: 1,
    };
    //if (userWS) {
    let req = JSON.stringify(subUnsubReq);
    waitForSocketConnection(userWS, function () {
      userWS.send(req);
    });

    //}
    sendUnsubReq(subUnsubReq);
    // dispatch(
    //   UpdateSymbolDetails(
    //     GetWatchListSymbolDetails(propMarketWatch.id, propMarketWatch.scrips)
    //   )
    // );
  }

  function onCreateGTTOrderClick(symbolInfo: IMarketWatchTokenInfo) {
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
    <table className="table table-responsive table-borderless">
      <tbody>
        {/* {propMarketWatch.SymbolList != null ? bindList : <div>No Data 2</div>} */}
        {propMarketWatch.SymbolList != null ? (
          propMarketWatch.SymbolList.map(
            (symbolInfo: IMarketWatchTokenInfo) => (
              <tr className="slideInDown-element">
                <td>
                  <img src="images/hdfc-logo.jpg" width="35" />
                  <span> {symbolInfo.sym}</span>
                </td>
                <td className="price-box">
                  <div className="lprice">Rs. 1503.45</div>
                  <p className="text-green">+2.03 (+1.04%)</p>
                </td>
              </tr>
            )
          )
        ) : (
          <div>No Data 2</div>
        )}
      </tbody>
    </table>
  );
};

export default MarketWatchItem;
