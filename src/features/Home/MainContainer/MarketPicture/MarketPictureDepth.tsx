import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import { IMarketDepth } from "./../../../../types/IMarketDepth";

const MarketPictureDepth = (props: {
  Depth: IMarketDepth;
  TokenInfo: IMarketWatchTokenInfo;
}) => {
  return (
    // <div id="tblMarketPictureHeader">
    //   <div>
    //     <table className="marketPicturecls" id="tblMarketPictureHeaderid">
    //       <tbody>
    //         <tr>
    //           <th>Orders</th>
    //           <th>Qty</th>
    //           <th>Bid</th>
    //           <th>Ask</th>
    //           <th>Qty</th>
    //           <th>Orders</th>
    //         </tr>
    //       </tbody>
    //       <tbody>
    //         <tr className="MarketPictureHeaderRow">
    //           <td className="cls1 cls2 "> {props.Depth.bno1}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bq}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bp}</td>
    //           <td className="cls1  ">{props.Depth.sp}</td>
    //           <td className="cls1  ">{props.Depth.bs}</td>
    //           <td className="cls1  "> {props.Depth.sno1}</td>
    //         </tr>
    //         <tr className="MarketPictureHeaderRow">
    //           <td className="cls1 cls2 "> {props.Depth.bno2}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bq1}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bp1}</td>
    //           <td className="cls1  ">{props.Depth.sp1}</td>
    //           <td className="cls1  ">{props.Depth.bs1}</td>
    //           <td className="cls1  "> {props.Depth.sno2}</td>
    //         </tr>

    //         <tr className="MarketPictureHeaderRow">
    //           <td className="cls1 cls2 "> {props.Depth.bno3}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bq2}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bp2}</td>
    //           <td className="cls1  ">{props.Depth.sp2}</td>
    //           <td className="cls1  ">{props.Depth.bs2}</td>
    //           <td className="cls1  "> {props.Depth.sno3}</td>
    //         </tr>
    //         <tr className="MarketPictureHeaderRow">
    //           <td className="cls1 cls2 "> {props.Depth.bno4}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bq3}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bp3}</td>
    //           <td className="cls1  ">{props.Depth.sp3}</td>
    //           <td className="cls1  ">{props.Depth.bs3}</td>
    //           <td className="cls1  "> {props.Depth.sno4}</td>
    //         </tr>
    //         <tr className="MarketPictureHeaderRow">
    //           <td className="cls1 cls2 "> {props.Depth.bno5}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bq4}</td>
    //           <td className="cls1 cls2 ">{props.Depth.bp4}</td>
    //           <td className="cls1  ">{props.Depth.sp4}</td>
    //           <td className="cls1  ">{props.Depth.bs4}</td>
    //           <td className="cls1  "> {props.Depth.sno5}</td>
    //         </tr>
    //         <tr className="cls4">
    //           <td className="cls1 cls2 cls4">Total</td>
    //           <td className="cls1 cls2  cls4">{props.TokenInfo.tbq} </td>
    //           <td className="cls4"></td>
    //           <td className="cls1 cls4 cls3">Total </td>
    //           <td className="cls1 cls4 cls3"> {props.TokenInfo.tsq}</td>
    //           <td></td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <div className="row bidtable">
      <div className="col-md-6">
        <div id="watchlistinner" className="table">
          <div className="table-cell c-blue">
            <h6>Bid</h6>
          </div>
          <div className="table-cell c-blue">
            <h6>Orders</h6>
          </div>
          <div className="table-cell c-blue">
            <h6>Qty</h6>
          </div>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">{props.Depth.bno1}</div>
            <div className="table-cell">{props.Depth.bq}</div>
            <div className="table-cell">{props.Depth.bp}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">{props.Depth.bno2}</div>
            <div className="table-cell">{props.Depth.bq1}</div>
            <div className="table-cell">{props.Depth.bp1}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">{props.Depth.bno3}</div>
            <div className="table-cell">{props.Depth.bq2}</div>
            <div className="table-cell">{props.Depth.bp2}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">{props.Depth.bno4}</div>
            <div className="table-cell">{props.Depth.bq3}</div>
            <div className="table-cell">{props.Depth.bp3}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">{props.Depth.bno5}</div>
            <div className="table-cell">{props.Depth.bq4}</div>
            <div className="table-cell">{props.Depth.bp4}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">Total</div>
            <div className="table-cell"></div>
            <div className="table-cell">{props.TokenInfo.tbq} </div>
          </a>
        </div>
      </div>
      <div className="col-md-6">
        <div id="watchlistinner" className="table">
          <div className="table-cell c-red">
            <h6>Offer</h6>
          </div>
          <div className="table-cell c-red">
            <h6>Orders</h6>
          </div>
          <div className="table-cell c-red">
            <h6>Qty</h6>
          </div>
          <a className="table-row c-red" href="#">
            <div className="table-cell">{props.Depth.sp}</div>
            <div className="table-cell">{props.Depth.bs}</div>
            <div className="table-cell">{props.Depth.sno1}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">{props.Depth.sp1}</div>
            <div className="table-cell">{props.Depth.bs1}</div>
            <div className="table-cell">{props.Depth.sno2}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">{props.Depth.sp2}</div>
            <div className="table-cell">{props.Depth.bs2}</div>
            <div className="table-cell">{props.Depth.sno3}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">{props.Depth.sp3}</div>
            <div className="table-cell">{props.Depth.bs3}</div>
            <div className="table-cell">{props.Depth.sno4}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">{props.Depth.sp4}</div>
            <div className="table-cell">{props.Depth.bs4}</div>
            <div className="table-cell">{props.Depth.sno5}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">Total</div>
            <div className="table-cell"></div>
            <div className="table-cell">{props.TokenInfo.tsq}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketPictureDepth;
