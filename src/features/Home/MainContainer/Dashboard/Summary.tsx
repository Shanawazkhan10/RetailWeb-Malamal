import { MouseEventHandler, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { mainSummaryContainer } from "../mainContainerSlice";
import { FetchSummary, OnTopGainers } from "./SummarySlice";

const Summary = () => {
  const [filtermenu, ShowFilter] = useState(false);
  const [ActiveText, ChangeName] = useState("Top Gainers");
  const dispatch = useAppDispatch();

  const userState = useAppSelector((state) => state.user);
  const summaryState = useAppSelector((state) => state.summary);

  useEffect(() => {
    dispatch(FetchSummary(userState.sessionKey, "gainer"));
  }, []);

  function OnMenuClick(e: any, FilterType: string) {
    ShowFilter(!filtermenu);
    e.preventDefault();

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
                className="dropdown-item active"
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
              <a href="" onClick={RedirecttoSummary}>
                <div className="toptxt">
                  <p>{ActiveText}</p>
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
                            <td>{String(summarydata.tsym).split("-")[0]}</td>
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
