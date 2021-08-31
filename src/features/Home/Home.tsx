import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import Menu from "./Menu/Menu";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./style.css";
import OrderEntryComp from "./OrderEntry/OrderEntry";
import GttOrderEntry from "./GTTOrderEntry/GttOrderEntry";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MarketPicture from "./MainContainer/MarketPicture/MarketPicture";
import { useEffect } from "react";

const Home = () => {
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const gttEntryState = useAppSelector((state) => state.gttEntry);
  const marketPictureState = useAppSelector((state) => state.marketpicture);
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
