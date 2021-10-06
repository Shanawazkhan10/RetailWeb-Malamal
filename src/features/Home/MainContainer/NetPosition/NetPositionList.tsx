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
import { ShowDepthFromPosition } from "../MarketPicture/MarketPictureSlice";
import NetPosition from "./NetPosition";
import { fetchNetposition } from "./NetPositionSlice";

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
        scrips: NetpositionList.netposition
          .map((x) => x.exSeg + "|" + x.tok)
          .join("&"),
        channelnum: 1,
      };

      waitForSocketConnection(userWS, function () {
        sendUnsubReq(subUnsubReq);
      });
    }
  }

  return NetpositionList.netposition &&
    NetpositionList.netposition.length > 0 ? (
    // <div className="tab-label-content" id="tab1-content">
    //   <label data-for="tab1">Positions</label>
    <div className="tab-content">
      <div className="row mb-4">
        <div className="col-md-4">
          <h2>Positions ({NetpositionList.netposition.length})</h2>
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
              />{" "}
              Analytics
            </a>
          </div>
          <div className="btnalign">
            <a href="#">
              <img src="images/positions/download.svg" /> Download
            </a>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12">
          <table className="datatable table table-hover" id="PortfolioTable">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>
                  <input
                    id="check_all"
                    className="regular-checkbox"
                    type="checkbox"
                  />
                  <label data-for="check_all"></label>
                </th>
                <th style={{ width: "5%" }}>Product</th>
                <th style={{ width: "5%" }}>Exit</th>
                <th style={{ width: "30%" }}>Instrument</th>
                <th style={{ width: "5%" }}>Qty.</th>
                <th style={{ width: "5%" }}>Avg.</th>
                <th style={{ width: "5%" }}>LTP</th>
                <th style={{ width: "5%" }}>P&L</th>
                <th style={{ width: "5%" }}> Chg.</th>
              </tr>
            </thead>
            <tbody>
              {NetpositionList.netposition.map((netposition: any) => (
                <NetPosition
                  key={netposition.Token}
                  netposition={netposition}
                />
              ))}
            </tbody>
            <tfoot>
              <tr className="odd_col">
                <td data-colspan="2">
                  <button className="btn btn-primary">Exit Position</button>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h4>Total</h4>
                </td>
                <td>
                  <h4>0.00</h4>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4">
          <h2>Day's History ({NetpositionList.netposition.length})</h2>
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
            <img src="images/positions/download.svg" /> Download
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="datatable table table-hover" id="PortfolioTable">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>

                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
            </thead>

            {/* Temporary bindng to netposition */}
            <tbody>
              {NetpositionList.netposition.map((netposition: any) => (
                <NetPosition
                  key={netposition.Token}
                  netposition={netposition}
                />
              ))}
            </tbody>
            <tfoot>
              <tr className="odd_col">
                <td data-colspan="2"></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>0.00</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  ) : (
    // </div>
    <div className="tab-content">
      <div>
        <p>You don't have any positions yet</p>
      </div>
      <br />
      <button type="button" className="button-blue">
        Get started
      </button>
    </div>
  );
};

export default NetPositionList;
