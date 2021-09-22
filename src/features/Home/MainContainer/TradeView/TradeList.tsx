import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import TradeView from "./Trade";
import { fetchTradeView } from "./TradeVIewSlice";

const TradeList = () => {
  const TradeList = useSelector((state: RootState) => state.TradeView);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(TradeViewSuccess(getOrderData()));
    dispatch(fetchTradeView(user.sessionKey));
  }, []);

  return TradeList &&
    TradeList.TradeViewData != undefined &&
    TradeList.TradeViewData.length > 0 ? (
    <>
      <div className="row my-4">
        <div className="col-md-4">
          <h2
            className="btntrades"
            data-toggle="collapse"
            // href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Trades (<span>{TradeList.TradeViewData.length}</span>)
          </h2>
        </div>
        <div className="col-md-8 text-right" id="searhnbtn">
          <div className="input-group slideInDown-element m-0" id="search">
            <div>
              <span>
                <img src="images/search.svg" />
              </span>
            </div>
            <input type="text" placeholder="Search E.g. INFY" />
          </div>
          <div className="btnalign">
            <a href="#">
              <img
                src=""
                style={{
                  width: "15px",
                  height: "15px",
                  background: "rgba(106, 78, 238, 0.2)",
                  borderRadius: "3px",
                }}
              />
              View History
            </a>
          </div>
          <div className="btnalign">
            <a href="#">
              <img src="images/positions/download.svg" />
              Download
            </a>
          </div>
        </div>
      </div>

      <div className="row collapse show mb-5" id="collapseExample">
        <div className="col-md-12">
          <table
            className="datatable table table-hover table-sortable"
            id="PortfolioTable"
          >
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Trade ID</th>
                <th style={{ width: "10%" }}>Time</th>
                <th style={{ width: "10%" }}>Type</th>
                <th style={{ width: "40%" }}>Instrument</th>
                <th style={{ width: "10%" }}>Product</th>
                <th style={{ width: "10%" }}>Qty.</th>
                <th style={{ width: "5%" }}>Avg. price</th>
              </tr>
            </thead>

            {TradeList?.TradeViewData.map((Trade: any) => (
              <TradeView key={Trade.Token} trade={Trade}></TradeView>
            ))}
          </table>
        </div>
      </div>
    </>
  ) : (
    <div>Empty...</div>
  );
};

export default TradeList;
