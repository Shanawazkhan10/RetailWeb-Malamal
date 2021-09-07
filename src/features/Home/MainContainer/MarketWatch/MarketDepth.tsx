import React from "react";

const MarketDepth = (props: any) => {
  //const expanded = props.activeItem === props.index;

  //const symbolInfo = props.tokenInfo;
  const Depth = props.depth;
  return Depth != undefined ? (
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
              <td className="rate">
                {Depth.bp != undefined ? Depth.bp : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bq != undefined ? Depth.bq : "0.00"}
              </td>{" "}
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
              <td className="rate">
                {Depth.bp1 != undefined ? Depth.bp1 : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bq1 != undefined ? Depth.bq1 : "0.00"}
              </td>{" "}
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
              <td className="rate">
                {Depth.bp2 != undefined ? Depth.bp2 : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bq2 != undefined ? Depth.bq2 : "0.00"}
              </td>{" "}
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
              <td className="rate">
                {Depth.bp3 != undefined ? Depth.bp3 : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bq3 != undefined ? Depth.bq3 : "0.00"}
              </td>{" "}
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
              <td className="rate">
                {Depth.bp4 != undefined ? Depth.bp4 : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bq4 != undefined ? Depth.bq4 : "0.00"}
              </td>{" "}
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
              <td className="rate">
                {Depth.sp != undefined ? Depth.sp : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bs != undefined ? Depth.bs : "0.00"}
              </td>{" "}
              <td
                className="text-right quantity"
                style={{
                  background:
                    "linear-gradient(to left, rgba(255, 87, 34, 0.1) 20.9302%, transparent 20.9302%)",
                }}
              >
                {Depth.sno1 != undefined ? Depth.sno1 : "0.00"}
              </td>
            </tr>
            <tr>
              <td className="rate">
                {Depth.sp1 != undefined ? Depth.sp1 : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bs1 != undefined ? Depth.bs1 : "0.00"}
              </td>{" "}
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
              <td className="rate">
                {Depth.sp2 != undefined ? Depth.sp2 : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bs2 != undefined ? Depth.bs2 : "0.00"}
              </td>{" "}
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
              <td className="rate">
                {Depth.sp3 != undefined ? Depth.sp3 : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bs3 != undefined ? Depth.bs3 : "0.00"}
              </td>{" "}
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
              <td className="rate">
                {Depth.sp4 != undefined ? Depth.sp4 : "0.00"}
              </td>{" "}
              <td className="orders">
                {Depth.bs4 != undefined ? Depth.bs4 : "0.00"}
              </td>{" "}
              <td
                className="text-right quantity"
                style={{
                  background:
                    "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%)",
                }}
              >
                {Depth.sno4 != undefined ? Depth.sno4 : "0.00"}
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
    </div>
  ) : (
    <div> asa </div>
  );

  // </Collapse>
};

export default MarketDepth;
