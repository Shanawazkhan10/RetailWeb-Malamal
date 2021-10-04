//const MainContainer = (props: IWatchListProps) => {
import { useAppSelector } from "../../../app/hooks";
//import AdvancedChart from "../Chart/AdvancedChart";
import IPODetails from "../IPO/IPODetails";
import UpcomingIPODetails from "../IPO/UpcomingIPODetails";
import ProfileSummary from "../PersonalDetails/ProfileSummary";
import MainSummary from "../Summary/MainSummary";
import MainDashboard from "./Dashboard/MainDashboard";
import Funds from "./Funds/Funds";
import HoldingList from "./Holding/HoldingList";
import NetPositionList from "./NetPosition/NetPositionList";
import OrderList from "./OrderView/OrderList";
import PortfolioView from "./PortfolioView/PortfolioView";
import TradeList from "./TradeView/TradeList";

const RightContainer = () => {
  const mainContainer = useAppSelector((state) => state.mainContainer);

  switch (mainContainer.rightContainer) {
    case 0:
      return <MainDashboard></MainDashboard>;
    case 1:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          {/* <AdvancedChart></AdvancedChart> */}
        </div>
      );
    case 2:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <PortfolioView activetab="H"></PortfolioView>
        </div>
      );
    case 3:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <PortfolioView activetab="P"></PortfolioView>
        </div>
      );
    case 4:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <div className="row">
            <div
              className="col-sm-12 col-md-12 col-lg-12 col-xl-12"
              id="Portfolio"
            >
              <OrderList></OrderList>
            </div>
          </div>
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
    case 10:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <MainSummary></MainSummary>
        </div>
      );
    default:
      return null;
  }
};

export default RightContainer;
