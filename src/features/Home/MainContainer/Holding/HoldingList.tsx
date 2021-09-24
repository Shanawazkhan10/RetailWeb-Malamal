import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import Holding from "./Holding";
import { fetchHolding } from "./HoldingSlice";

const HoldingList = () => {
  const HoldingList = useSelector((state: RootState) => state.holding);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHolding(user.sessionKey));
  }, [HoldingList]);

  return HoldingList &&
    HoldingList.holding != undefined &&
    HoldingList.holding.holdinglist != undefined &&
    HoldingList.holding.holdinglist.length > 0 ? (
    <div className="tab-content">
      <div className="row slideInDown-element" id="holdings">
        <div className="col-md-4">
          <span>Holdings ({HoldingList.holding.holdinglist.length})</span>
        </div>
        <div className="col-md-8 text-right">
          <div className="input-group slideInDown-element m-0" id="search">
            <div>
              <span>
                <img src="images/search.svg" />
              </span>
            </div>
            <input type="text" placeholder="Search E.g. INFY" />
          </div>
          <a href="#">
            <img
              src=""
              style={{
                width: "15px",
                height: "15px",
                background: "rgba(106, 78, 238, 0.2)",
                borderRadius: "3px",
              }}
            />{" "}
            Analytics
          </a>
          <a href="#">
            <img src="images/positions/download.svg" /> Download
          </a>
        </div>
        <div className="col-md-12">
          <table className="datatable table table-hover" id="PortfolioTable">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Instrument</th>
                <th style={{ width: "10%" }}>Qty.</th>
                <th style={{ width: "10%" }}>Avg.</th>
                <th style={{ width: "10%" }}>LTP</th>
                <th style={{ width: "10%" }}>Cur. val</th>
                <th style={{ width: "10%" }}>P&L</th>
                <th style={{ width: "10%" }}>Net Chg.</th>
                <th style={{ width: "10%" }}>Day Chg.</th>
              </tr>
            </thead>
            <tbody id="tblnetposid">
              {HoldingList.holding.holdinglist?.map((holding: any) => (
                <Holding key={holding.Token} holding={holding} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-3 holdingleft mt-4">
          <div>
            <h3 className="c-purple">{HoldingList.holding.totalInvestMent}</h3>
            <p>Total Investment</p>
          </div>
          <div>
            <h3 className="c-black">{HoldingList.holding.currentValue}</h3>
            <p>Current Value</p>
          </div>
          <div>
            <div className="mb-2 c-orange">
              <h3 className="d-inline">{HoldingList.holding.daysPandL}</h3>
              <span>({HoldingList.holding.daysPandLPercent}%)</span>
            </div>
            <p>Day's P&L</p>
          </div>
          <div>
            <div className="mb-2 c-green">
              <h3 className="d-inline">{HoldingList.holding.totalPandL}</h3>
              <span>({HoldingList.holding.totalPandLPercent}%)</span>
            </div>
            <p>Total P&L</p>
          </div>
        </div>
        <div className="col-md-4 mt-5" id="chart">
          <img src="images/pie-chart.png" className="img-fluid" />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default HoldingList;
