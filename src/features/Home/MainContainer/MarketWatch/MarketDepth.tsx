import React from "react";

const MarketDepth = (props: any) => {
  const Depth = props.depth;
  const SymbolInfo = props.tokenInfo;
  return Depth != undefined ? (
    <>
      <td>
        <table
          id="watchlistinner"
          className="c-blue table table-responsive table-borderless"
        >
          <thead>
            <tr>
              <th>Bid</th>
              <th>Orders</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Depth.bp != undefined ? Depth.bp : "0.00"}</td>
              <td>{Depth.bq != undefined ? Depth.bq : "0"}</td>
              <td>{Depth.bno1 !== undefined ? Depth.bno1 : "0"}</td>
            </tr>
            <tr>
              <td>{Depth.bp1 != undefined ? Depth.bp1 : "0.00"}</td>
              <td>{Depth.bq1 != undefined ? Depth.bq1 : "0"}</td>
              <td>{Depth.bno2 !== undefined ? Depth.bno2 : "0"}</td>
            </tr>
            <tr>
              <td>{Depth.bp2 != undefined ? Depth.bp2 : "0.00"}</td>
              <td>{Depth.bq2 != undefined ? Depth.bq2 : "0"}</td>
              <td>{Depth.bno3 !== undefined ? Depth.bno3 : "0"}</td>
            </tr>
            <tr>
              <td>{Depth.bp3 != undefined ? Depth.bp3 : "0.00"}</td>
              <td>{Depth.bq3 != undefined ? Depth.bq3 : "0"}</td>
              <td>{Depth.bno4 !== undefined ? Depth.bno4 : "0"}</td>
            </tr>
            <tr>
              <td>{Depth.bp4 != undefined ? Depth.bp4 : "0.00"}</td>
              <td>{Depth.bq4 != undefined ? Depth.bq4 : "0"}</td>
              <td>{Depth.bno5 !== undefined ? Depth.bno5 : "0"}</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table
          id="watchlistinner"
          className="c-red table table-responsive table-borderless"
        >
          <thead>
            <tr>
              <th>Offers</th>
              <th>Orders</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Depth.sp != undefined ? Depth.sp : "0.00"}</td>
              <td>{Depth.bs != undefined ? Depth.bs : "0"}</td>
              <td>{Depth.sno1 != undefined ? Depth.sno1 : "0"}</td>
            </tr>
            <tr>
              <td>{Depth.sp1 != undefined ? Depth.sp1 : "0.00"}</td>
              <td>{Depth.bs1 != undefined ? Depth.bs1 : "0"}</td>
              <td>{Depth.sno2 != undefined ? Depth.sno2 : "0"}</td>
            </tr>
            <tr>
              <td>{Depth.sp2 != undefined ? Depth.sp2 : "0.00"}</td>
              <td>{Depth.bs2 != undefined ? Depth.bs2 : "0"}</td>
              <td>{Depth.sno3 != undefined ? Depth.sno3 : "0"}</td>
            </tr>
            <tr>
              <td>{Depth.sp3 != undefined ? Depth.sp3 : "0.00"}</td>
              <td>{Depth.bs3 != undefined ? Depth.bs3 : "0"}</td>
              <td>{Depth.sno4 != undefined ? Depth.sno4 : "0"}</td>
            </tr>
            <tr>
              <td>{Depth.sp4 != undefined ? Depth.sp4 : "0.00"}</td>
              <td>{Depth.bs4 != undefined ? Depth.bs4 : "0"}</td>
              <td>{Depth.sno5 != undefined ? Depth.sno5 : "0"}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </>
  ) : (
    <div> asa </div>
  );

  // </Collapse>
};

export default MarketDepth;
