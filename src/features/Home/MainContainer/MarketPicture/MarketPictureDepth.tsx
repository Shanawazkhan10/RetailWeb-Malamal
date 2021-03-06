import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import { IMarketDepth } from "./../../../../types/IMarketDepth";

const MarketPictureDepth = (props: {
  Depth: IMarketDepth;
  TokenInfo: IMarketWatchTokenInfo;
}) => {
  return (
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
            <div className="table-cell">{props.Depth.bp}</div>
            <div className="table-cell">{props.Depth.bno1}</div>
            <div className="table-cell">{props.Depth.bq}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">{props.Depth.bp1}</div>
            <div className="table-cell">{props.Depth.bno2}</div>
            <div className="table-cell">{props.Depth.bq1}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">{props.Depth.bp2}</div>
            <div className="table-cell">{props.Depth.bno3}</div>
            <div className="table-cell">{props.Depth.bq2}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">{props.Depth.bp3}</div>
            <div className="table-cell">{props.Depth.bno4}</div>
            <div className="table-cell">{props.Depth.bq3}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">{props.Depth.bp4}</div>
            <div className="table-cell">{props.Depth.bno5}</div>
            <div className="table-cell">{props.Depth.bq4}</div>
          </a>
          <a className="table-row c-blue" href="#">
            <div className="table-cell">Total</div>
            <div className="table-cell"></div>
            <div className="table-cell">
              {(props.Depth.bq !== undefined ? Number(props.Depth.bq) : 0) +
                (props.Depth.bq1 !== undefined ? Number(props.Depth.bq1) : 0) +
                (props.Depth.bq2 !== undefined ? Number(props.Depth.bq2) : 0) +
                (props.Depth.bq3 !== undefined ? Number(props.Depth.bq3) : 0) +
                (props.Depth.bq4 !== undefined ? Number(props.Depth.bq4) : 0)}
            </div>
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
            <div className="table-cell">{props.Depth.sno1}</div>
            <div className="table-cell">{props.Depth.bs}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">{props.Depth.sp1}</div>
            <div className="table-cell">{props.Depth.sno2}</div>
            <div className="table-cell">{props.Depth.bs1}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">{props.Depth.sp2}</div>
            <div className="table-cell">{props.Depth.sno3}</div>
            <div className="table-cell">{props.Depth.bs2}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">{props.Depth.sp3}</div>
            <div className="table-cell">{props.Depth.sno4}</div>
            <div className="table-cell">{props.Depth.bs3}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">{props.Depth.sp4}</div>
            <div className="table-cell">{props.Depth.sno5}</div>
            <div className="table-cell">{props.Depth.bs4}</div>
          </a>
          <a className="table-row c-red" href="#">
            <div className="table-cell">Total</div>
            <div className="table-cell"></div>
            <div className="table-cell">
              {(props.Depth.bs !== undefined ? Number(props.Depth.bs) : 0) +
                (props.Depth.bs1 !== undefined ? Number(props.Depth.bs1) : 0) +
                (props.Depth.bs2 !== undefined ? Number(props.Depth.bs2) : 0) +
                (props.Depth.bs3 !== undefined ? Number(props.Depth.bs3) : 0) +
                (props.Depth.bs4 !== undefined ? Number(props.Depth.bs4) : 0)}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketPictureDepth;
