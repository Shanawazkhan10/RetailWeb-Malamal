import "../../style.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useAppDispatch } from "../../../../app/hooks";
import { TradeViewSuccess } from "./TradeVIewSlice";
import { getOrderData } from "../../../../app/api";
import tradeView from "./Trade";
import TradeView from "./Trade";

const TradeList = () => {
  const TradeList = useSelector((state: RootState) => state.TradeView);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(TradeViewSuccess(getOrderData()));
  }, []);

  return (
    <div className="block_netPosition mr14" id="TradeView">
      <div className="block_head">
        <h1>Trades :</h1>
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
        <div className="netPosTbl">
          <table className="netposcls" id="tblnetposid">
            <thead>
              <tr className="sticky">
                <th className="tblHeaderNP" title="Symbol">
                  <span>Symbol</span>
                </th>
                <th className="tblHeaderNP" title="Instrument Name">
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
                  title="Avg"
                >
                  <span>Avg</span>
                </th>
                <th
                  className="tblHeaderNP right"
                  data-value="LastTradedPrice"
                  title="LTP"
                >
                  <span>LTP</span>
                </th>
                <th className="tblHeaderNP right" data-value="PL" title="PL">
                  <span>PL</span>
                </th>
                <th
                  className="tblHeaderNP"
                  data-value="nExchangeId"
                  style={{ width: "111px" }}
                  title="Chg"
                >
                  <span>Chg</span>
                </th>
                <th
                  className="tblHeaderNP"
                  data-value="nExchangeId"
                  style={{ width: "111px" }}
                  title="Exchange"
                >
                  <span>Exchange</span>
                </th>
                <th
                  className="tblHeaderNP"
                  data-value="nExchangeId"
                  style={{ width: "111px" }}
                  title="Total"
                >
                  <span>Total</span>
                </th>
              </tr>
            </thead>
            <tbody id="tblnetposid">
              {TradeList?.TradeViewData.map((Trade: any) => (
                <TradeView key={Trade.Token} trade={Trade}></TradeView>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TradeList;
