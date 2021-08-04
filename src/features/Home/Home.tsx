import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./style.css";
import OrderEntryComp from "./OrderEntry/OrderEntry";

const Home = () => {
  const orderEntryState = useAppSelector((state)=>state.orderEntry);
  return (
    <div id="MasterSearchDiv">
      <div id="wrapper">
        <Header />
        <MainContainer />        
        {orderEntryState.isOrderEntryOpen && <OrderEntryComp/>}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
