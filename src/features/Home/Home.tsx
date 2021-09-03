import { Socket } from "dgram";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../app/hooks";
import HSSocket from "../WebSocket/HSSocket";
import { authReq, connect, init, sendReq } from "../WebSocket/HSSocket1";
// import { connect, init } from "../WebSocket/HSSocket1";
// import { authReq } from "./../WebSocket/HSSocket";
// import { sendReq } from "./../WebSocket/HSSocket1";
import GttOrderEntry from "./GTTOrderEntry/GttOrderEntry";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import MarketPicture from "./MainContainer/MarketPicture/MarketPicture";
import Menu from "./Menu/Menu";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "../css/style.css";
import "../css/extra.css";
import OrderEntryComp from "./OrderEntry/OrderEntry";
var url = "wss://uathsmkt.hypertrade.in";
const script = document.createElement("script");
script.src = "../hslibo.js";
script.async = true;

document.body.appendChild(script);

var url = "wss://uathsmkt.hypertrade.in";

document.body.removeChild(script);

//export let userWS: any = new window.HSWebSocket(url);
const Home = () => {
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const marketPictureState = useAppSelector((state) => state.marketpicture);
  const gttEntryState = useAppSelector((state) => state.gttEntry);

  useEffect(() => {
    //init();
    //connect();
    // const authReq: authReq = {
    //   sessionid: "S101",
    //   type: "cn",
    // };
    // sendReq(authReq);
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../hslibo.js";
    script.async = true;
    document.body.appendChild(script);
    //init();
    //connect();
    var url = "wss://uathsmkt.hypertrade.in";
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    // <div id="MasterSearchDiv">
    //   <div id="wrapper">
    <div className="container-scroller mb-2">
      <Header />
      <MainContainer nWatchList={1} />
      {/*}  {orderEntryState.isOrderEntryOpen && <OrderEntryComp />}
        {gttEntryState.isGTTEntryOpen && <GttOrderEntry />} */}
      {/* <Footer /> */}
      {/* {marketPictureState.marketpicture.IsShow && (
          <MarketPicture></MarketPicture>
        )} */}
      <Menu></Menu>
      {/* </div> */}
      <ToastContainer />
    </div>
  );
};

export default Home;
