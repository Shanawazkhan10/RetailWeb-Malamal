//const MainContainer = (props: IWatchListProps) => {
import { useAppSelector } from "../../../app/hooks";
import AdvancedChart from "../Chart/AdvancedChart";
import IPODetails from "../IPO/IPODetails";
import UpcomingIPODetails from "../IPO/UpcomingIPODetails";
import ProfileSummary from "../PersonalDetails/ProfileSummary";
import MainDashboard from "./Dashboard/MainDashboard";
import Funds from "./Funds/Funds";
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
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <AdvancedChart></AdvancedChart>
        </div>
      );
    case 2:
      return <HoldingList></HoldingList>;
    case 3:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <NetPositionList></NetPositionList>
        </div>
      );
    case 4:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <OrderList></OrderList>
          <TradeList></TradeList>
        </div>
      );
    case 5:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <Funds></Funds>
        </div>
      );
    case 6:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <ProfileSummary></ProfileSummary>
        </div>
      );
    case 7:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <IPODetails></IPODetails>
        </div>
      );
    case 8:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <UpcomingIPODetails></UpcomingIPODetails>
        </div>
      );

    default:
      return null;
  }
};

export default RightContainer;
