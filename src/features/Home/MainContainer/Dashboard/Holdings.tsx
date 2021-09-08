import { useAppDispatch } from "../../../../app/hooks";
import { holdingContainer } from "../mainContainerSlice";
import PieChart from "../PieChart/PieChart";

const Holdings = () => {
  const dispatch = useAppDispatch();

  function OpenHolding(e: any) {
    e.preventDefault();
    dispatch(holdingContainer());
  }

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className="plate fadeIn-element" id="holdingbox">
        <div className="row slideInDown-element">
          <div className="col-md-6">
            <img src="images/holdings.svg" /> <span>Holdings (3)</span>
          </div>
          <div className="col-md-6 holdingbtn">
            <span>
              <a href="" onClick={OpenHolding}>
                View All Holdings
              </a>
            </span>
          </div>
          <div className="col-md-6 holdingleft mt-4">
            <div>
              <h3 className="c-blue">399.75</h3>
              <p>Total Investment</p>
            </div>
            <div>
              <h3 className="c-black">375.95</h3>
              <p>Current Value</p>
            </div>
            <div>
              <div className="c-orange">
                <h3 className="d-inline">-10.95</h3>
                <span>(-2.25%)</span>
              </div>
              <p>Day's P&L</p>
            </div>
            <div>
              <div className="c-green">
                <h3 className="d-inline">+76.20</h3>
                <span>(+19.20%)</span>
              </div>
              <p>Total P&L</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            {/* <img src="images/pie-chart.png" className="img-fluid" /> */}
            <PieChart></PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
