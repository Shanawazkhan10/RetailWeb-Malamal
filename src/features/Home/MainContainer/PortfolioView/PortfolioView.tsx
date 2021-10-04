import { useState } from "react";
import Position from "../Dashboard/Position";
import HoldingView from "../Holding/Holding";
import HoldingList from "../Holding/HoldingList";
import NetPositionList from "../NetPosition/NetPositionList";

const PortfolioView = (props: { activetab: string }) => {
  const { activetab } = props;
  const [tab, SetTab] = useState(activetab);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" id="Portfolio">
        <div className="portfolioplate fadeIn-element">
          <div className="row slideInDown-element">
            <div className="col-md-12 tabline">
              <div className="tab-wrap">
                <input
                  type="radio"
                  name="tabs"
                  id="tab1"
                  checked={tab === "P" ? true : false}
                />
                <div
                  className="tab-label-content"
                  id="tab1-content"
                  onClick={() => SetTab("P")}
                >
                  <label data-for="tab1">Positions</label>
                  {tab == "P" && <NetPositionList />}
                </div>
                <input
                  type="radio"
                  name="tabs"
                  id="tab2"
                  checked={tab == "H" ? true : false}
                />
                <div
                  className="tab-label-content"
                  id="tab1-content"
                  onClick={() => SetTab("H")}
                >
                  <label data-for="tab2">Holdings</label>
                  {tab == "H" && <HoldingList />}
                </div>
                <div className="slide"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioView;
