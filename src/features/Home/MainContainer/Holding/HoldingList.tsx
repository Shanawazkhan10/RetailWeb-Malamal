import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { userWS } from "../../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import PieChart from "../PieChart/PieChart";
import Holding from "./Holding";
import { fetchHolding } from "./HoldingSlice";

const HoldingList = () => {
  const HoldingList = useSelector((state: RootState) => state.holding);
  const user = useSelector((state: RootState) => state.user);
  var currentValue = 0;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHolding(user.sessionKey));
    getSymbol();
  }, []);

  function getSymbol() {
    if (
      HoldingList.holding != undefined &&
      HoldingList.holding.holdinglist != undefined
    ) {
      //subscribe Script API Call
      const subUnsubReq: SubUnsubReq = {
        type: "mws",
        scrips: HoldingList.holding.holdinglist
          .map((x) => x.nseTrdSym)
          .join("&"),
        channelnum: 1,
      };

      waitForSocketConnection(userWS, function () {
        sendUnsubReq(subUnsubReq);
      });
    }
  }

  return HoldingList &&
    HoldingList.holding != undefined &&
    HoldingList.holding.holdinglist != undefined &&
    HoldingList.holding.holdinglist.length > 0 ? (
    <div className="tab-content">
      <div className="row slideInDown-element" id="holdings">
        <div className="col-md-4">
          <h2>
            Holdings<span> ({HoldingList.holding.holdinglist.length})</span>
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
              Analytics
            </a>
          </div>
          <div className="btnalign">
            <a href="#">
              <img src="images/positions/download.svg" /> Download
            </a>
          </div>
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
            <h3 className="c-black">
              {HoldingList.holding.holdinglist?.map((holding) => {
                if (holding.curval != undefined)
                  currentValue = currentValue + Number(holding.curval);
              })}
              {currentValue}
            </h3>
            <p>Current Value</p>
          </div>
          <div>
            <div className="mb-2 c-orange">
              <h3 className="d-inline">
                {HoldingList.holding.daysPandL.toFixed(2)}
              </h3>
              <span>({HoldingList.holding.daysPandLPercent.toFixed(2)}%)</span>
            </div>
            <p>Day's P&L</p>
          </div>
          <div>
            <div className="mb-2 c-green">
              <h3 className="d-inline">
                {(currentValue - HoldingList.holding.totalInvestMent).toFixed(
                  2
                )}
              </h3>
              <span>({HoldingList.holding.totalPandLPercent.toFixed(2)}%)</span>
            </div>
            <p>Total P&L</p>
          </div>
        </div>
        <div className="col-md-4 mt-5" id="chart">
          {HoldingList.holding?.holdinglist?.length > 0 && (
            <PieChart holdingList={HoldingList.holding.holdinglist} />
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default HoldingList;
