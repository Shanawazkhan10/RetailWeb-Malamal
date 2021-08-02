import Popup from "reactjs-popup";
import OrderEntryComp from "../../../components/OrderEntryComp";

const SellOrderEntry = () => {
  return (
    <Popup trigger={<button className="button">S</button>} modal nested>
      <OrderEntryComp nBuySell={2}/>
    </Popup>
  );
};
export default SellOrderEntry;
