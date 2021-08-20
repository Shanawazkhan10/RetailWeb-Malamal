import React from "react";
import Collapsible from "react-collapsible";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { IMarketDepth } from "../../../../types/IMarketDepth";

const MarketDepth = (props: any) => {
  //const expanded = props.activeItem === props.index;

  let symbolInfo = props.tokenInfo;
  let Depth = props.depth;
  return Depth != undefined ? (
    <div className="market-depth" style={{ display: "" }}>
      <div className="depth-table">
        <div className="row">
          <table className="six columns buy">
            <thead>
              <tr>
                <th className="order-price">
                  <span>Bid</span>{" "}
                </th>{" "}
                <th className="orders">Orders</th>{" "}
                <th className="text-right quantity">Qty.</th>
              </tr>
            </thead>{" "}
            <tbody>
              <tr>
                <td className="rate">{Depth.bp}</td>{" "}
                <td className="orders">{Depth.bq}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 1.46199%, transparent 1.46199%)",
                  }}
                >
                  {Depth.bno1}
                </td>
              </tr>
              <tr>
                <td className="rate">{Depth.bp1}</td>{" "}
                <td className="orders">{Depth.bq1}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 100%, transparent 100%)",
                  }}
                >
                  {Depth.bno2}
                </td>
              </tr>
              <tr>
                <td className="rate">{Depth.bp2}</td>{" "}
                <td className="orders">{Depth.bq2}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 60.8187%, transparent 60.8187%)",
                  }}
                >
                  {Depth.bno3}
                </td>
              </tr>
              <tr>
                <td className="rate">{Depth.bp3}</td>{" "}
                <td className="orders">{Depth.bp3}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 5%, transparent 5%)",
                  }}
                >
                  {Depth.bno4}
                </td>
              </tr>
              <tr>
                <td className="rate">{Depth.bp4}</td>{" "}
                <td className="orders">{Depth.bq4}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 8.18713%, transparent 8.18713%)",
                  }}
                >
                  {Depth.bno5}
                </td>
              </tr>
            </tbody>{" "}
            <tfoot>
              <tr>
                <td>Total</td>{" "}
                <td colSpan={2} className="text-right">
                  1,11,454
                </td>{" "}
              </tr>
            </tfoot>
          </table>
          <table className="six columns sell">
            <thead>
              <tr>
                <th className="order-price">
                  {" "}
                  <span>Offer</span>
                </th>{" "}
                <th className="orders">Orders</th>{" "}
                <th className="text-right quantity">Qty.</th>
              </tr>
            </thead>{" "}
            <tbody>
              <tr>
                <td className="rate">{Depth.sp}</td>{" "}
                <td className="orders">{Depth.bs}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 20.9302%, transparent 20.9302%)",
                  }}
                >
                  {Depth.sno1}
                </td>
              </tr>
              <tr>
                <td className="rate">{Depth.sp1}</td>{" "}
                <td className="orders">{Depth.bs1}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 8.52713%, transparent 8.52713%)",
                  }}
                >
                  {Depth.sno2}
                </td>
              </tr>
              <tr>
                <td className="rate">{Depth.sp2}</td>{" "}
                <td className="orders">{Depth.bs2}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 100%, transparent 100%)",
                  }}
                >
                  {Depth.sno3}
                </td>
              </tr>
              <tr>
                <td className="rate">{Depth.sp3}</td>{" "}
                <td className="orders">{Depth.bs3}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 87.5969%, transparent 87.5969%)",
                  }}
                >
                  {Depth.sno4}
                </td>
              </tr>
              <tr>
                <td className="rate">{Depth.sp4}</td>{" "}
                <td className="orders">{Depth.bs4}</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%)",
                  }}
                >
                  {Depth.sno4}
                </td>
              </tr>
            </tbody>{" "}
            <tfoot>
              <tr>
                <td>Total</td>{" "}
                <td colSpan={2} className="text-right">
                  2,59,574
                </td>
              </tr>
            </tfoot>
          </table>
        </div>{" "}
        {/* <div className="depth-toggle">
          {" "}
          <a href="" className="text-center">
            <span className="icon icon-chevron-down"></span> View 20 depth
          </a>
        </div> */}
      </div>{" "}
      <div className="ohlc">
        <div className="row">
          <div className="six columns">
            <label>Open</label> <span className="value">2662.00</span>
          </div>{" "}
          <div className="six columns">
            <label>High</label> <span className="value">2707.70</span>
          </div>
        </div>{" "}
        <div className="row">
          <div className="six columns">
            <label>Low</label> <span className="value">{symbolInfo.lo}</span>
          </div>{" "}
          <div className="six columns">
            <label>Prev. Close</label>{" "}
            <span className="value">{symbolInfo.c}</span>
          </div>
        </div>{" "}
        <div className="row">
          <div className="six columns">
            <label>Volume</label> <span className="value">{symbolInfo.v}</span>
          </div>{" "}
          <div className="six columns">
            <label>Avg. price</label>{" "}
            <span className="value">{symbolInfo.ap}</span>
          </div>
        </div>{" "}
        <div className="row">
          <div className="six columns">
            <label>LTQ</label> <span className="value">{symbolInfo.ltq}</span>
          </div>{" "}
          <div className="six columns">
            <label>LTT</label> <span className="value">{symbolInfo.ltt}</span>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label>Lower circuit</label>{" "}
            <span className="value">{symbolInfo.lcl}</span>
          </div>{" "}
          <div className="six columns">
            <label>Upper circuit</label>{" "}
            <span className="value">{symbolInfo.ucl}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div> asa </div>
  );

  // </Collapse>
};

export default MarketDepth;
