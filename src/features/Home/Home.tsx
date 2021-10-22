import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import HSSocket, { userWS } from "../WebSocket/HSSocket";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import Menu from "./Menu/Menu";
import OrderEntryComp from "./OrderEntry/OrderEntry";
import GttOrderEntry from "./GTTOrderEntry/GttOrderEntry";
import { useHistory } from "react-router";
import { fetchHolding, SetLoad } from "./MainContainer/Holding/HoldingSlice";
import { fetchNetposition } from "./MainContainer/NetPosition/NetPositionSlice";
import { fetchOrderView } from "./MainContainer/OrderView/OrderViewSlice";
import { fetchTradeView } from "./MainContainer/TradeView/TradeVIewSlice";
import { FetchMargin } from "./MainContainer/Dashboard/MarginSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  sendUnsubReq,
  SubUnsubReq,
  waitForSocketConnection,
} from "../WebSocket/HSSocket1";

var url = "wss://uathsmkt.hypertrade.in";
const script = document.createElement("script");
script.src = "../hslibo.js";
script.async = true;

document.body.appendChild(script);

var url = "wss://uathsmkt.hypertrade.in";

document.body.removeChild(script);

//export let userWS: any = new window.HSWebSocket(url);
const Home = () => {
  const dispatch = useAppDispatch();
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const marketPictureState = useAppSelector((state) => state.marketpicture);
  const gttEntryState = useAppSelector((state) => state.gttEntry);
  const user = useAppSelector((state) => state.user);
  const history = useHistory();
  const HoldingList = useAppSelector((state: RootState) => state.holding);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../hslibo.js";
    script.async = true;
    document.body.appendChild(script);
    //init();
    //connect();

    dispatch(fetchHolding(user.sessionKey));
    dispatch(fetchNetposition(user.sessionKey));
    dispatch(fetchOrderView(user.sessionKey));
    dispatch(fetchTradeView(user.sessionKey));
    dispatch(FetchMargin(user.sessionKey));
    

    var url = "wss://uathsmkt.hypertrade.in";
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    setTimeout(function () {
      getSymbol();
    }, 1000);
  }, [HoldingList.holding.isLoad]);

  function getSymbol() {
    if (
      HoldingList.holding != undefined &&
      HoldingList.holding.holdinglist != undefined &&
      HoldingList.holding.holdinglist.length > 0
      //!HoldingList.holding.isLoad
    ) {
      //subscribe Script API Call
      const subUnsubReq: SubUnsubReq = {
        type: "mws",
        scrips: HoldingList.holding.holdinglist
          .map((x) => x.ex1 + "|" + x.tok1)
          .join("&"),
        channelnum: 1,
      };

      waitForSocketConnection(userWS, function () {
        sendUnsubReq(subUnsubReq);
      });

      //dispatch(SetLoad(true));
    }
  }

  // if (!user.isAuthenticated) {
  //   history.push("/login");
  // }
  // {
  return (
    // <div id="MasterSearchDiv">
    //   <div id="wrapper">
    // <div className="container-scroller mb-2">

    <>
      <HSSocket></HSSocket>
      {/* <Header /> */}
      <MainContainer nWatchList={1} />
      {orderEntryState.isOrderEntryOpen && <OrderEntryComp />}
      {gttEntryState.isGTTEntryOpen && <GttOrderEntry />}
      {/* <Footer /> */}
      {/* {marketPictureState.marketpicture.IsShow && (
          <MarketPicture></MarketPicture>
        )}
      <Menu></Menu>
      {/* </div> */}
      <ToastContainer />
      {/* </div> */}
    </>
  );
  //}
};

export default Home;
