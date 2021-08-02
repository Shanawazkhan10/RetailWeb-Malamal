import Popup from "reactjs-popup";
import OrderEntryComp from "../../../components/OrderEntryComp";

const BuyOrderEntry = () => {
  return (
    <Popup trigger={<button className="button">B</button>} modal nested position="bottom center" lockScroll={true}>
      <OrderEntryComp nBuySell={1}/>
    </Popup>    
  );
};
export default BuyOrderEntry;
