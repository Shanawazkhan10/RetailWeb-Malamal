import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { FetchSummary } from "../MainContainer/Dashboard/SummarySlice";
import { dashboardContainer } from "../MainContainer/mainContainerSlice";

const MainSummary = () => {
  const [filtermenu, ShowFilter] = useState(false);
  const [ActiveText, ChangeName] = useState("Top Gainers");
  const dispatch = useAppDispatch();
  const summaryState = useAppSelector((state) => state.summary);
  const userState = useAppSelector((state) => state.user);

  function OnDashBoard(e: any) {
    e.preventDefault();
    dispatch(dashboardContainer());
  }

  function OnMenuClick(e: any, FilterType: string) {
    e.preventDefault();
    ShowFilter(!filtermenu);

    switch (FilterType) {
      case "gainer":
        ChangeName("Top Gainers");
        break;
      case "loser":
        ChangeName("Top Losers");
        break;
      case "mostactivebyvolume":
        ChangeName("Most active by Volume");
        break;
      case "mostactivebyvalue":
        ChangeName("Most active by Value");
        break;
      default:
        break;
    }

    dispatch(FetchSummary(userState.sessionKey, FilterType));
  }

  return (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div className="equityplate fadeIn-element">
        <div className="row slideInDown-element">
          <div
            className={
              "col-md-12 equitysummarymenu" + (filtermenu ? " show" : "")
            }
          >
            <img src="images/equity-summary.svg" /> <span>Equity Summary</span>
            <span className="float-right mx-2">
              <a href="" onClick={OnDashBoard}>
                <img src="images/close.svg" width="20" />
              </a>
            </span>
            <span
              className="float-right"
              id="equitysummarymenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={filtermenu}
              onClick={() => ShowFilter(!filtermenu)}
            >
              <img src="images/filter.svg" />
            </span>
            <div
              className={
                "dropdown-menu dropdown-menu-right" +
                (filtermenu ? " show" : "")
              }
              aria-labelledby="equitysummarymenu"
            >
              <a
                className="dropdown-item"
                onClick={(e) => OnMenuClick(e, "gainer")}
              >
                Top Gainers
              </a>
              <a
                className="dropdown-item"
                onClick={(e) => OnMenuClick(e, "loser")}
              >
                Top Losers
              </a>
              <a
                className="dropdown-item"
                onClick={(e) => OnMenuClick(e, "mostactivebyvolume")}
              >
                Most active by Volume
              </a>
              <a
                className="dropdown-item"
                onClick={(e) => OnMenuClick(e, "mostactivebyvalue")}
              >
                Most active by Value
              </a>
            </div>
          </div>
          <div className="col-md-12">
            <div className="equity-summary">
              <div className="toptxt">
                <p>{ActiveText}</p>
              </div>
              <table
                className="table table-responsive table-borderless"
                style={{ height: "700px", overflowY: "scroll" }}
              >
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
                          <td>{summarydata.cname}</td>
                          <td>
                            {summarydata.ltp != undefined
                              ? Number(summarydata.ltp).toFixed(2)
                              : 0.0}
                          </td>
                          <td>
                            {summarydata.netchg != undefined
                              ? Number(summarydata.netchg).toFixed(2)
                              : 0.0}
                          </td>
                          <td>
                            {summarydata.chg != undefined
                              ? Number(summarydata.chg).toFixed(2)
                              : 0.0}
                          </td>
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
