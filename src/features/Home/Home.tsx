import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../app/hooks";
import { authReq, connect, init, sendReq } from "../WebSocket/HSSocket1";
// import { connect, init } from "../WebSocket/HSSocket1";
// import { authReq } from "./../WebSocket/HSSocket";
// import { sendReq } from "./../WebSocket/HSSocket1";
import GttOrderEntry from "./GTTOrderEntry/GttOrderEntry";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import MarketPicture from "./MainContainer/MarketPicture/MarketPicture";
import Menu from "./Menu/Menu";
import OrderEntryComp from "./OrderEntry/OrderEntry";
import "./style.css";

const Home = () => {
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const marketPictureState = useAppSelector((state) => state.marketpicture);
  const gttEntryState = useAppSelector((state) => state.gttEntry);
  useEffect(() => {
    init();
    connect();
    // const authReq: authReq = {
    //   sessionid: "S101",
    //   type: "cn",
    // };
    // sendReq(authReq);
  }, []);
  return (
    <div id="MasterSearchDiv">
      <div id="wrapper">
        <Header />
        <MainContainer nWatchList={1} />
        {orderEntryState.isOrderEntryOpen && <OrderEntryComp />}
        {gttEntryState.isGTTEntryOpen && <GttOrderEntry />}
        {/* <Footer /> */}
        {marketPictureState.marketpicture.IsShow && (
          <MarketPicture></MarketPicture>
        )}
        <Menu></Menu>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
