import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { FetchGainer, OnTopGainers } from "./SummarySlice";

const Summary = () => {
  const dispatch = useAppDispatch();

  const userState = useAppSelector((state) => state.user);
  const summaryState = useAppSelector((state) => state.summary);

  useEffect(() => {
    dispatch(FetchGainer(userState.sessionKey));
  }, []);

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="row slideInDown-element">
          <div className="col-md-8">
            <img src="images/equity-summary.svg" /> <span>Equity Summary</span>
          </div>
          <div className="col-md-4 text-right">
            <span>
              <img src="images/filter.svg" />
            </span>
          </div>
          <div className="col-md-12">
            <div className="equity-summary">
              <div className="toptxt">
                <p>Top Gainers</p>
              </div>
              <table className="table table-responsive table-borderless">
                <thead>
                  <tr>
                    <th>Stock Name</th>
                    <th>Change ₹</th>
                    <th>Change %</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryState.summaryData.SummaryList != null ? (
                    summaryState.summaryData.SummaryList.map(
                      (summarydata: any,index:number) => (
                        <tr key={index}>
                          <td>{summarydata.tsym}</td>
                          <td>{summarydata.netchg}</td>
                          <td>{summarydata.chg}</td>
                        </tr>
                      )
                    )
                  ) : (
                    <div>No Data 2</div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
