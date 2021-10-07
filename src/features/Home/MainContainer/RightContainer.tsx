//const MainContainer = (props: IWatchListProps) => {
import { useAppSelector } from "../../../app/hooks";

//import AdvancedChart from "../Chart/AdvancedChart";
import IPODetails from "../IPO/IPODetails";
import UpcomingIPODetails from "../IPO/UpcomingIPODetails";
import ProfileSummary from "../PersonalDetails/ProfileSummary";
import MainSummary from "../Summary/MainSummary";
import MainDashboard from "./Dashboard/MainDashboard";
import Funds from "./Funds/Funds";
import OrderList from "./OrderView/OrderList";
import PortfolioView from "./PortfolioView/PortfolioView";
import Header from "./../Header/Header";

const RightContainer = () => {
  const mainContainer = useAppSelector((state) => state.mainContainer);

  switch (mainContainer.rightContainer) {
    case 0:
      return <MainDashboard></MainDashboard>;
    case 1:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <Header></Header>

          {/* <AdvancedChart></AdvancedChart> */}
          {/* <TradingViewWidget
            symbol="NASDAQ:AAPL"
            width={900}
            height={610}
            theme="Light"
          /> */}
        </div>
      );
    case 2:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <Header></Header>

          <PortfolioView activetab="H"></PortfolioView>
        </div>
      );
    case 3:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <Header></Header>
          <PortfolioView activetab="P"></PortfolioView>
        </div>
      );
    case 4:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <Header></Header>
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
          <Header></Header>
          <Funds></Funds>
        </div>
      );
    case 6:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <Header></Header>
          <ProfileSummary></ProfileSummary>
        </div>
      );
    case 7:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <Header></Header>
          <IPODetails></IPODetails>
        </div>
      );
    case 8:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <Header></Header>
          <UpcomingIPODetails></UpcomingIPODetails>
        </div>
      );
    case 10:
      return (
        <div className="col-md-6 col-lg-8 col-xl-9">
          <Header></Header>
          <MainSummary></MainSummary>
        </div>
      );
    default:
      return null;
  }
};

export default RightContainer;
