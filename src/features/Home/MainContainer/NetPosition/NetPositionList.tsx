import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getNetpositionData } from "../../../../app/api";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import NetPosition from "./NetPosition";
import { fetchNetposition, NetpositionSuccess } from "./NetPositionSlice";
import NetPositionSummary from "./NetPositionSummary";

const NetPositionList = () => {
  let NetpositionList: any[];
  const Netposition = useSelector((state: RootState) => state.netposition);
  NetpositionList = Netposition.netposition.NetPosition;
  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(NetpositionSuccess(getNetpositionData()));
    dispatch(fetchNetposition());
  }, []);

  return NetpositionList && NetpositionList.length > 0 ? (
    <div className="block_netPosition mr14" id="NetPosition">
      <div className="block_head">
        <h1>Net Position</h1>
        <div className="mw_opt" id="mw_opt">
          <div>
            <ul id="ulTab" className="scroll_tabs_container">
              <div className="scroll_tab_inner">
                <div className="mw_opt">
                  <button id="btnExchFilter" className="btn_TrdBookexchFilter">
                    Filter
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <NetPositionSummary
          netpositionSummary={Netposition.netposition}
        ></NetPositionSummary>
        {/* <NetPositionList></NetPositionList> */}

        <div className="netPosTbl">
          <table className="netposcls" id="tblnetposid">
            <thead>
              <tr className="sticky">
                <th
                  className="tblHeaderNP"
                  data-value="SymbolFullName"
                  title="Symbol"
                >
                  <span>Symbol</span>
                </th>
                <th
                  className="tblHeaderNP"
                  data-value="InstrumentName"
                  style={{ width: "111px" }}
                  title="Instrument Name"
                >
                  <span>Instrument Name</span>
                </th>
                <th
                  className="tblHeaderNP"
                  data-value="ProductType"
                  title="Product Type"
                >
                  <span>Product Type</span>
                </th>
                <th
                  className="tblHeaderNP right"
                  data-value="NetQty"
                  title="Net Qty"
                >
                  <span>Net Qty</span>
                </th>
                <th
                  className="tblHeaderNP right"
                  data-value="NetAvg"
                  title="Net Price"
                >
                  <span>Net Price</span>
                </th>
                <th
                  className="tblHeaderNP right"
                  data-value="LastTradedPrice"
                  title="Market Price"
                >
                  <span>Market Price</span>
                </th>
                <th
                  className="tblHeaderNP right"
                  data-value="MTMPL"
                  title="MTMGL"
                >
                  <span>MTMGL</span>
                </th>
                <th
                  className="tblHeaderNP"
                  data-value="nExchangeId"
                  style={{ width: "111px" }}
                  title="Exchange Name"
                >
                  <span>Exchange Name</span>
                </th>
                <th className="" title="Add">
                  <span>Add</span>
                </th>
                <th className="" title="Exit">
                  <span>Exit</span>
                </th>
              </tr>
            </thead>
            <tbody id="tblnetposid">
              {NetpositionList.map((netposition: any) => (
                <NetPosition
                  key={netposition.Token}
                  netposition={netposition}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div>Empty......</div>
  );
};

export default NetPositionList;
