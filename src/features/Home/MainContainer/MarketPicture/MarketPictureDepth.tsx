import "../../style.css";
import { IMarketDepth } from "./../../../../types/IMarketDepth";

const MarketPictureDepth = (props: { Depth: IMarketDepth }) => {
  return (
    <div id="tblMarketPictureHeader">
      <div>
        <table className="marketPicturecls" id="tblMarketPictureHeaderid">
          <tbody>
            <tr>
              <th>Orders</th>
              <th>Qty</th>
              <th>Bid</th>
              <th>Ask</th>
              <th>Qty</th>
              <th>Orders</th>
            </tr>
          </tbody>
          <tbody>
            <tr className="MarketPictureHeaderRow">
              <td className="cls1 cls2 "> {props.Depth.bno1}</td>
              <td className="cls1 cls2 ">{props.Depth.bq}</td>
              <td className="cls1 cls2 ">{props.Depth.bp}</td>
              <td className="cls1  ">{props.Depth.sp}</td>
              <td className="cls1  ">{props.Depth.bs}</td>
              <td className="cls1  "> {props.Depth.sno1}</td>
            </tr>
            <tr className="MarketPictureHeaderRow">
              <td className="cls1 cls2 "> {props.Depth.bno2}</td>
              <td className="cls1 cls2 ">{props.Depth.bq1}</td>
              <td className="cls1 cls2 ">{props.Depth.bp1}</td>
              <td className="cls1  ">{props.Depth.sp1}</td>
              <td className="cls1  ">{props.Depth.bs1}</td>
              <td className="cls1  "> {props.Depth.sno2}</td>
            </tr>

            <tr className="MarketPictureHeaderRow">
              <td className="cls1 cls2 "> {props.Depth.bno3}</td>
              <td className="cls1 cls2 ">{props.Depth.bq2}</td>
              <td className="cls1 cls2 ">{props.Depth.bp2}</td>
              <td className="cls1  ">{props.Depth.sp2}</td>
              <td className="cls1  ">{props.Depth.bs2}</td>
              <td className="cls1  "> {props.Depth.sno3}</td>
            </tr>
            <tr className="MarketPictureHeaderRow">
              <td className="cls1 cls2 "> {props.Depth.bno4}</td>
              <td className="cls1 cls2 ">{props.Depth.bq3}</td>
              <td className="cls1 cls2 ">{props.Depth.bp3}</td>
              <td className="cls1  ">{props.Depth.sp3}</td>
              <td className="cls1  ">{props.Depth.bs3}</td>
              <td className="cls1  "> {props.Depth.sno4}</td>
            </tr>
            <tr className="MarketPictureHeaderRow">
              <td className="cls1 cls2 "> {props.Depth.bno5}</td>
              <td className="cls1 cls2 ">{props.Depth.bq4}</td>
              <td className="cls1 cls2 ">{props.Depth.bp4}</td>
              <td className="cls1  ">{props.Depth.sp4}</td>
              <td className="cls1  ">{props.Depth.bs4}</td>
              <td className="cls1  "> {props.Depth.sno5}</td>
            </tr>
            {/* <tr className="cls4">
              <td className="cls1 cls2 cls4">Total</td>
              <td className="cls1 cls2  cls4">0 </td>
              <td className="cls4"></td>
              <td className="cls1 cls4 cls3">Total </td>
              <td className="cls1 cls4 cls3"> 0 </td>
              <td></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketPictureDepth;
