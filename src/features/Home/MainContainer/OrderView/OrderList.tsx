import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOrderData } from "../../../../app/api";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";

import OrderView from "./Order";
import { fetchOrderView, OrderViewSuccess } from "./OrderViewSlice";

const OrderList = () => {
  const OrderList = useSelector((state: RootState) => state.OrderView);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(OrderViewSuccess(getOrderData()));
    dispatch(fetchOrderView(user.sessionKey));
  }, []);

  return OrderList.OrderViewData && OrderList.OrderViewData.length > 0 ? (
    <div className="block_netPosition mr14" id="NetPosition">
      <div className="block_head">
        <h1>Orders:</h1>
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
          <table
            className="table table-responsive table-borderless"
            id="tblnetposid"
          >
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
                  title="Status"
                >
                  <span>Status</span>
                </th>
                <th className="tblHeaderNP right" data-value="Price" title="PL">
                  <span>Price</span>
                </th>

                <th
                  className="tblHeaderNP"
                  data-value="nExchangeId"
                  style={{ width: "111px" }}
                  title="Exchange"
                >
                  <span>Order type</span>
                </th>
                <th
                  className="tblHeaderNP"
                  style={{ width: "111px" }}
                  title="rejRsn"
                >
                  <span>Rejection reason</span>
                </th>
              </tr>
            </thead>
            <tbody id="tblnetposid">
              {OrderList?.OrderViewData.map((Order: any) => (
                <OrderView key={Order.Token} order={Order}></OrderView>
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

export default OrderList;
