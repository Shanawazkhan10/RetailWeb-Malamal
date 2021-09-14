import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { dashboardContainer } from "../MainContainer/mainContainerSlice";

const MainSummary = () => {
  const dispatch = useAppDispatch();
  const summaryState = useAppSelector((state) => state.summary);

  function OnDashBoard(e: any) {
    e.preventDefault();
    dispatch(dashboardContainer());
  }

  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div className="equityplate fadeIn-element">
        <div className="row slideInDown-element">
          <div className="col-md-12">
            <img src="images/equity-summary.svg" /> <span>Equity Summary</span>
            <span className="float-right mx-2">
              <a href="" onClick={OnDashBoard}>
                <img src="images/close.svg" width="20" />
              </a>
            </span>
            <span className="float-right mx-2">
              <img src="images/filter.svg" />
            </span>
          </div>
          <div className="col-md-12">
            <div className="equity-summary">
              <div className="toptxt">
                <ul className="nav nav-tabs nav-flex" id="EquitySummry">
                  <li>Top Gainers</li>
                  <li>Top Losers</li>
                  <li> Most Active by Value</li>
                  <li>Most Active by Volume</li>
                </ul>
              </div>
              <table className="table table-responsive table-borderless">
                <thead>
                  <tr>
                    <th>Stock Name</th>
                    <th>CMP</th>
                    <th>Change ₹</th>
                    <th>Change %</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryState.summaryData.SummaryList != null ? (
                    summaryState.summaryData.SummaryList.map(
                      (summarydata: any, index: number) => (
                        <tr key={index}>
                          <td>{summarydata.tsym}</td>
                          <td>{summarydata.ltp}</td>
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

export default MainSummary;
