import Chart from "react-google-charts";

const MarketOverview = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className="plate fadeIn-element" id="marketbox">
        <div className="slideInDown-element">
          <img src="images/market-overview.svg" />
          <span>Market Overview</span>
          <div className="col-md-12 mt-4">
            <img src="images/graph.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
