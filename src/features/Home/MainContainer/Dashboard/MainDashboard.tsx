import Holdings from "./Holdings";
import Margin from "./Margin";
import MarketOverview from "./MarketOverview";
import RealTimeMarketOverview from "./RealtimeMarketOverview";
import Position from "./Position";
import Summary from "./Summary";
import Header from "./../../Header/Header";

const MainDashboard = () => {
  return (
    <div className="col-md-6 col-lg-8 col-xl-9">
      <Header></Header>
      <div className="row">
        <Margin></Margin>
        <Position></Position>
        <Summary></Summary>
      </div>
      <br />
      <div className="row">
        <Holdings></Holdings>
        {/* <MarketOverview></MarketOverview> */}
        <RealTimeMarketOverview></RealTimeMarketOverview>
      </div>
    </div>
  );
};

export default MainDashboard;
