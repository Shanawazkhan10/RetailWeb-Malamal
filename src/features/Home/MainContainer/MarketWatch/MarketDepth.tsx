import React from "react";

function MarketDepth() {
  return (
    <div className="market-depth">
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
                <td className="rate">2691.85</td> <td className="orders">1</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 1.46199%, transparent 1.46199%);",
                  }}
                >
                  6
                </td>
              </tr>
              <tr>
                <td className="rate">2691.80</td> <td className="orders">9</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 100%, transparent 100%)",
                  }}
                >
                  343
                </td>
              </tr>
              <tr>
                <td className="rate">2691.60</td> <td className="orders">7</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 60.8187%, transparent 60.8187%);",
                  }}
                >
                  209
                </td>
              </tr>
              <tr>
                <td className="rate">2691.40</td> <td className="orders">1</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 5%, transparent 5%);",
                  }}
                >
                  1
                </td>
              </tr>
              <tr>
                <td className="rate">2691.35</td> <td className="orders">2</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 8.18713%, transparent 8.18713%);",
                  }}
                >
                  29
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
                <td className="rate">2692.35</td> <td className="orders">2</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 20.9302%, transparent 20.9302%);",
                  }}
                >
                  28
                </td>
              </tr>
              <tr>
                <td className="rate">2692.40</td> <td className="orders">2</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 8.52713%, transparent 8.52713%);",
                  }}
                >
                  12
                </td>
              </tr>
              <tr>
                <td className="rate">2692.85</td> <td className="orders">3</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 100%, transparent 100%);",
                  }}
                >
                  130
                </td>
              </tr>
              <tr>
                <td className="rate">2692.90</td> <td className="orders">1</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 87.5969%, transparent 87.5969%);",
                  }}
                >
                  114
                </td>
              </tr>
              <tr>
                <td className="rate">2692.95</td> <td className="orders">1</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%);",
                  }}
                >
                  1
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
        <div className="depth-toggle">
          {" "}
          <a href="" className="text-center">
            <span className="icon icon-chevron-down"></span> View 20 depth
          </a>
        </div>
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
            <label>Low</label> <span className="value">2662.00</span>
          </div>{" "}
          <div className="six columns">
            <label>Prev. Close</label> <span className="value">2668.75</span>
          </div>
        </div>{" "}
        <div className="row">
          <div className="six columns">
            <label>Volume</label> <span className="value">9,26,331</span>
          </div>{" "}
          <div className="six columns">
            <label>Avg. price</label> <span className="value">2695.70</span>
          </div>
        </div>{" "}
        <div className="row">
          <div className="six columns">
            <label>LTQ</label> <span className="value">1</span>
          </div>{" "}
          <div className="six columns">
            <label>LTT</label>{" "}
            <span className="value">2021-08-13 10:31:03</span>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label>Lower circuit</label> <span className="value">2401.90</span>
          </div>{" "}
          <div className="six columns">
            <label>Upper circuit</label> <span className="value">2935.60</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketDepth;
