import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { getNetpositionData } from "../../../../app/api";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import NetPosition from "./NetPosition";
import { fetchNetposition, NetpositionSuccess } from "./NetPositionSlice";
import NetPositionSummary from "./NetPositionSummary";
import SmartSearch from "./../SmartSearch/SmartSearch";
import MarketPicture from "../MarketPicture/MarketPicture";
import { ShowDepthFromPosition } from "../MarketPicture/MarketPictureSlice";
import { userWS } from "../../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";

const NetPositionList = () => {
  //let NetpositionList: any[];
  const NetpositionList = useSelector((state: RootState) => state.netposition);
  const user = useSelector((state: RootState) => state.user);
  //NetpositionList = Netposition.netposition;
  const dispatch = useAppDispatch();

  function showDepth() {
    dispatch(ShowDepthFromPosition(""));
  }
  useEffect(() => {
    //dispatch(NetpositionSuccess(getNetpositionData()));
    dispatch(fetchNetposition(user.sessionKey));
    getSymbol();
  }, []);

  function getSymbol() {
    if (NetpositionList.netposition != undefined) {
      //subscribe Script API Call
      const subUnsubReq: SubUnsubReq = {
        type: "mws",
        scrips: NetpositionList.netposition.map((x) => x.trdSym).join("&"),
        channelnum: 1,
      };

      waitForSocketConnection(userWS, function () {
        sendUnsubReq(subUnsubReq);
      });
    }
  }

  return NetpositionList.netposition &&
    NetpositionList.netposition.length > 0 ? (
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" id="Portfolio">
      <div className="equityplate fadeIn-element">
        <div className="row slideInDown-element">
          <div className="col-md-12 tabline">
            <div className="tab-wrap">
              <input type="radio" name="tabs" id="tab1" checked />
              <div className="tab-label-content" id="tab1-content">
                <label data-for="tab1">Positions</label>
                <div className="tab-content">
                  <div className="row">
                    <div className="col-md-6">
                      <h2>Positions (1)</h2>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="input-group slideInDown-element"
                        id="search"
                      >
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
                        />
                        Analytics
                      </a>
                      <a href="#">
                        <img src="images/positions/download.svg" /> Download
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <table className="datatable" id="PortfolioTable">
                        <thead>
                          <tr>
                            <th>
                              <input
                                id="check_all"
                                className="regular-checkbox"
                                type="checkbox"
                              />
                              <label data-for="check_all"></label>
                            </th>
                            <th>Product</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg.</th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>Chg.</th>
                          </tr>
                        </thead>
                        <tbody id="tblnetposid">
                          {NetpositionList.netposition.map(
                            (netposition: any) => (
                              <NetPosition
                                key={netposition.Token}
                                netposition={netposition}
                              />
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>{showDepth}</div>
  );
};

export default NetPositionList;
