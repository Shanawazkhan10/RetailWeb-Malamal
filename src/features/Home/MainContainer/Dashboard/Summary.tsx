import { MouseEventHandler, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { mainSummaryContainer } from "../mainContainerSlice";
import { FetchSummary, OnTopGainers } from "./SummarySlice";

const Summary = () => {
  const dispatch = useAppDispatch();

  const userState = useAppSelector((state) => state.user);
  const summaryState = useAppSelector((state) => state.summary);

  useEffect(() => {
    dispatch(FetchSummary(userState.sessionKey, "gainer"));
  }, []);

  function RedirecttoSummary(e: any) {
    e.preventDefault();
    dispatch(mainSummaryContainer());
  }

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="row slideInDown-element">
          <div className="col-md-12">
            <img src="images/equity-summary.svg" /> <span>Equity Summary</span>
            <span className="float-right">
              <img src="images/filter.svg" />
            </span>
          </div>
          <div className="col-md-12">
            <div className="equity-summary">
              <a href="" onClick={RedirecttoSummary}>
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
                      summaryState.summaryData.SummaryList.slice(0, 5).map(
                        (summarydata: any, index: number) => (
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
