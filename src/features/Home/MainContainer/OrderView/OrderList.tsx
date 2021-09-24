import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import TradeList from "../TradeView/TradeList";

import OrderView from "./Order";
import { fetchOrderView } from "./OrderViewSlice";

const OrderList = () => {
  const OrderList = useSelector((state: RootState) => state.OrderView);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(OrderViewSuccess(getOrderData()));
    dispatch(fetchOrderView(user.sessionKey));
  }, []);

  return OrderList.OrderViewData && OrderList.OrderViewData.length > 0 ? (
    <div className="portfolioplate fadeIn-element">
      <div>
        <div className="row slideInDown-element">
          <div className="col-md-12 tabline">
            <div className="tab-wrap">
              <input type="radio" name="tabs" id="tab1" checked />
              <div className="tab-label-content" id="tab1-content">
                <label data-for="tab1">Orders</label>
                <div className="tab-content">
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <h2>
                        Open Orders (
                        <span>{OrderList.OrderViewData.length}</span>)
                      </h2>
                    </div>
                    <div className="col-md-8 text-right" id="searhnbtn">
                      <div
                        className="input-group slideInDown-element m-0"
                        id="search"
                      >
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
                  <div className="row">
                    <div className="col-md-12">
                      <table
                        className="datatable table table-hover table-sortable"
                        id="PortfolioTable"
                      >
                        <thead>
                          <tr>
                            <th style={{ width: "10%" }}>Time</th>
                            <th style={{ width: "10%" }}>Type</th>
                            <th style={{ width: "40%" }}>Instrument</th>
                            <th style={{ width: "10%" }}>Product</th>
                            <th style={{ width: "10%" }}>Qty.</th>
                            <th style={{ width: "5%" }}>Avg. price</th>
                            <th style={{ width: "15%" }}>Status</th>
                          </tr>
                        </thead>

                        {OrderList?.OrderViewData.map((Order: any) => (
                          <OrderView
                            key={Order.Token}
                            order={Order}
                          ></OrderView>
                        ))}
                      </table>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-4">
                      <h2>
                        Executed Orders (
                        <span>{OrderList.OrderViewData.length}</span>)
                      </h2>
                    </div>
                    <div className="col-md-8 text-right" id="searhnbtn">
                      <div
                        className="input-group slideInDown-element m-0"
                        id="search"
                      >
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
                  <div className="row">
                    <div className="col-md-12">
                      <table
                        className="datatable table table-hover table-sortable"
                        id="PortfolioTable"
                      >
                        <thead>
                          <tr>
                            <th style={{ width: "10%" }}>Time</th>
                            <th style={{ width: "10%" }}>Type</th>
                            <th style={{ width: "40%" }}>Instrument</th>
                            <th style={{ width: "10%" }}>Product</th>
                            <th style={{ width: "10%" }}>Qty.</th>
                            <th style={{ width: "5%" }}>Avg. price</th>
                            <th style={{ width: "15%" }}>Status</th>
                          </tr>
                        </thead>

                        {OrderList?.OrderViewData.map((Order: any) => (
                          <OrderView
                            key={Order.Token}
                            order={Order}
                          ></OrderView>
                        ))}
                      </table>
                    </div>
                  </div>

                  <TradeList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default OrderList;
