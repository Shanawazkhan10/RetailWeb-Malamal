//const MainContainer = (props: IWatchListProps) => {
import { useAppSelector } from "../../../app/hooks";
import IPODetails from "../IPO/IPODetails";
import UpcomingIPODetails from "../IPO/UpcomingIPODetails";
import ProfileSummary from "../PersonalDetails/ProfileSummary";
import MainDashboard from "./Dashboard/MainDashboard";
import HoldingList from "./Holding/HoldingList";
import NetPositionList from "./NetPosition/NetPositionList";
import OrderList from "./OrderView/OrderList";
import TradeList from "./TradeView/TradeList";

const RightContainer = () => {
  const mainContainer = useAppSelector((state) => state.mainContainer);

  switch (mainContainer.rightContainer) {
    case 0:
      return <MainDashboard></MainDashboard>;
    case 1:
      return <div></div>;
    case 2:
      return <HoldingList></HoldingList>;
    case 3:
      return <NetPositionList></NetPositionList>;
    case 4:
      return (
        <div>
          <OrderList></OrderList>
          <TradeList></TradeList>
        </div>
      );
    case 6:
      return <ProfileSummary></ProfileSummary>;
    case 7:
      return <IPODetails></IPODetails>;
    case 8:
      return <UpcomingIPODetails></UpcomingIPODetails>;

    default:
      return <div>Empty</div>;
  }
};

export default RightContainer;
