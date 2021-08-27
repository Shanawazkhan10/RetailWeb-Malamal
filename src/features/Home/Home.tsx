import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import Menu from "./Menu/Menu";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./style.css";
import OrderEntryComp from "./OrderEntry/OrderEntry";
import MarketPicture from "./MainContainer/MarketPicture/MarketPicture";

const Home = () => {
  const orderEntryState = useAppSelector((state) => state.orderEntry);
  const marketPictureState = useAppSelector((state) => state.marketpicture);
  return (
    <div id="MasterSearchDiv">
      <div id="wrapper">
        <Header />
        <MainContainer nWatchList={1} />
        {orderEntryState.isOrderEntryOpen && <OrderEntryComp />}
        {/* <Footer /> */}
        {marketPictureState.marketpicture.IsShow && (
          <MarketPicture></MarketPicture>
        )}
        <Menu></Menu>
      </div>
    </div>
  );
};

export default Home;
