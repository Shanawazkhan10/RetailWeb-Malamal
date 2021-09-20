import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { fetchHolding } from "../Holding/HoldingSlice";
import { holdingContainer } from "../mainContainerSlice";
import PieChart from "../PieChart/PieChart";

const Holdings = () => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.user);
  const HoldingList = useSelector((state: RootState) => state.holding);
  useEffect(() => {
    dispatch(fetchHolding(user.sessionKey));  
  }, []);

  function OpenHolding(e: any) {
    e.preventDefault();
    dispatch(holdingContainer());
    dispatch(fetchHolding(user.sessionKey));
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
              <h3 className="c-blue">{HoldingList.holding.totalInvestMent}</h3>
              <p>Total Investment</p>
            </div>
            <div>
              <h3 className="c-black">{HoldingList.holding.currentValue}</h3>
              <p>Current Value</p>
            </div>
            <div>
              <div className="c-orange">
                <h3 className="d-inline">{HoldingList.holding.daysPandL}</h3>
                <span>({HoldingList.holding.daysPandLPercent}%)</span>
              </div>
              <p>Day's P&L</p>
            </div>
            <div>
              <div className="c-green">
                <h3 className="d-inline">{HoldingList.holding.totalPandL}</h3>
                <span>({HoldingList.holding.totalPandLPercent}%)</span>
              </div>
              <p>Total P&L</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">            
            {HoldingList.holding?.holdinglist?.length > 0 && (
              <PieChart holdingList={HoldingList.holding.holdinglist} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
