import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./style.css";
import OrderEntryComp from "./OrderEntry/OrderEntry";
import GttOrderEntry from "./GTTOrderEntry/GttOrderEntry";

const Home = () => {
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const gttEntryState = useAppSelector((state) => state.gttEntry);
  return (
    <div id="MasterSearchDiv">
      <div id="wrapper">
        <Header />
        <MainContainer nWatchList={1} />
        {orderEntryState.isOrderEntryOpen && <OrderEntryComp />}
        {gttEntryState.isGTTEntryOpen && <GttOrderEntry/>}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
