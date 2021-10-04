import Holdings from "./Holdings";
import Margin from "./Margin";
import MarketOverview from "./MarketOverview";
import Position from "./Position";
import Summary from "./Summary";

const MainDashboard = () => {
  return (
    <div className="col-md-6 col-lg-8 col-xl-9">
      <div className="row">
        <Margin></Margin>
        <Position></Position>
        <Summary></Summary>
      </div>
      <br />
      <div className="row">
        <Holdings></Holdings>
        <MarketOverview></MarketOverview>
      </div>
    </div>
  );
};

export default MainDashboard;
