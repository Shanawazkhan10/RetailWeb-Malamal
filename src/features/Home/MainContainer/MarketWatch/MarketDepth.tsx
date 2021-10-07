import { useAppDispatch } from "../../../../app/hooks";
import { IOrderEntryProps } from "../../../../types/OrderEntry/IOrderEntryProps";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
  setOrderEntryProps,
} from "../../OrderEntry/orderEntrySlice";

const MarketDepth = (props: any) => {
  const dispatch = useAppDispatch();
  const Depth = props.depth;
  const symbolInfo = props.tokenInfo;
  const OrderEntryProp = {
    token: "",
    exchange: "",
    quantity: 0,
    price: "",
    triggerprice: "",
    symbol: "",
  } as IOrderEntryProps;

  function onBuyDepthClick(e: any, price: string) {
    e.preventDefault();
    OrderEntryProp.token = Depth.tk;
    OrderEntryProp.price = price;
    OrderEntryProp.quantity = 1;
    OrderEntryProp.symbol = Depth.ts;
    OrderEntryProp.exchange = Depth.e;
    OrderEntryProp.ltp = "0";
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openBuyOrderEntry());
  }

  function onSellDepthClick(e: any, price: string) {
    e.preventDefault();
    OrderEntryProp.token = Depth.tk;
    OrderEntryProp.price = price;
    OrderEntryProp.quantity = 1;
    OrderEntryProp.symbol = Depth.ts;
    OrderEntryProp.exchange = Depth.e;
    OrderEntryProp.ltp = "0";
    dispatch(setOrderEntryProps(OrderEntryProp));
    dispatch(openSellOrderEntry());
  }
  function onDepthAnchorClick(event: any) {}
  return Depth != undefined ? (
    <>
      <td>
        <div id="watchlistinner" className="table">
          <div className="table-cell c-blue">
            <h6>Bid</h6>
          </div>
          <div className="table-cell c-blue">
            <h6>Qty</h6>
          </div>
          <div className="table-cell c-blue">
            <h6>Orders</h6>
          </div>
          <a
            className="table-row c-blue"
            href=""
            onClick={(e) => onBuyDepthClick(e, Depth.bp)}
          >
            <div className="table-cell">
              {Depth.bp != undefined ? Depth.bp : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bq != undefined ? Depth.bq : "0"}
            </div>
            <div className="table-cell">
              {Depth.bno1 !== undefined ? Depth.bno1 : "0"}
            </div>
          </a>
          <a
            className="table-row c-blue"
            href=""
            onClick={(e) => onBuyDepthClick(e, Depth.bp1)}
          >
            <div className="table-cell">
              {Depth.bp1 != undefined ? Depth.bp1 : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bq1 != undefined ? Depth.bq1 : "0"}
            </div>
            <div className="table-cell">
              {Depth.bno2 !== undefined ? Depth.bno2 : "0"}
            </div>
          </a>
          <a
            className="table-row c-blue"
            href=""
            onClick={(e) => onBuyDepthClick(e, Depth.bp2)}
          >
            <div className="table-cell">
              {Depth.bp2 != undefined ? Depth.bp2 : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bq2 != undefined ? Depth.bq2 : "0"}
            </div>
            <div className="table-cell">
              {Depth.bno3 !== undefined ? Depth.bno3 : "0"}
            </div>
          </a>
          <a
            className="table-row c-blue"
            href=""
            onClick={(e) => onBuyDepthClick(e, Depth.bp3)}
          >
            <div className="table-cell">
              {Depth.bp3 != undefined ? Depth.bp3 : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bq3 != undefined ? Depth.bq3 : "0"}
            </div>
            <div className="table-cell">
              {Depth.bno4 !== undefined ? Depth.bno4 : "0"}
            </div>
          </a>
          <a
            className="table-row c-blue"
            href=""
            onClick={(e) => onBuyDepthClick(e, Depth.bp3)}
          >
            <div className="table-cell">
              {Depth.bp4 != undefined ? Depth.bp4 : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bq4 != undefined ? Depth.bq4 : "0"}
            </div>
            <div className="table-cell">
              {Depth.bno5 !== undefined ? Depth.bno5 : "0"}
            </div>
          </a>
          <a className="table-row c-blue">
            <div className="table-cell">Total</div>
            <div className="table-cell"></div>
            <div className="table-cell">
              {(Depth.bno1 !== undefined ? Number(Depth.bno1) : 0) +
                (Depth.bno2 !== undefined ? Number(Depth.bno2) : 0) +
                (Depth.bno3 !== undefined ? Number(Depth.bno3) : 0) +
                (Depth.bno4 !== undefined ? Number(Depth.bno4) : 0) +
                (Depth.bno5 !== undefined ? Number(Depth.bno5) : 0)}
            </div>
          </a>
        </div>
      </td>
      <td>
        <div id="watchlistinner" className="table">
          <div className="table-cell c-red">
            <h6>Offer</h6>
          </div>
          <div className="table-cell c-red">
            <h6>Qty</h6>
          </div>
          <div className="table-cell c-red">
            <h6>Orders</h6>
          </div>
          <a
            className="table-row c-red"
            href=""
            onClick={(e) => onSellDepthClick(e, Depth.sp)}
          >
            <div className="table-cell">
              {Depth.sp != undefined ? Depth.sp : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bs != undefined ? Depth.bs : "0"}
            </div>
            <div className="table-cell">
              {Depth.sno1 != undefined ? Depth.sno1 : "0"}
            </div>
          </a>
          <a
            className="table-row c-red"
            href=""
            onClick={(e) => onSellDepthClick(e, Depth.sp1)}
          >
            <div className="table-cell">
              {Depth.sp1 != undefined ? Depth.sp1 : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bs1 != undefined ? Depth.bs1 : "0"}
            </div>
            <div className="table-cell">
              {Depth.sno2 != undefined ? Depth.sno2 : "0"}
            </div>
          </a>
          <a
            className="table-row c-red"
            href=""
            onClick={(e) => onSellDepthClick(e, Depth.sp2)}
          >
            <div className="table-cell">
              {Depth.sp2 != undefined ? Depth.sp2 : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bs2 != undefined ? Depth.bs2 : "0"}
            </div>
            <div className="table-cell">
              {Depth.sno3 != undefined ? Depth.sno3 : "0"}
            </div>
          </a>
          <a
            className="table-row c-red"
            href=""
            onClick={(e) => onSellDepthClick(e, Depth.sp3)}
          >
            <div className="table-cell">
              {Depth.sp3 != undefined ? Depth.sp3 : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bs3 != undefined ? Depth.bs3 : "0"}
            </div>
            <div className="table-cell">
              {Depth.sno4 != undefined ? Depth.sno4 : "0"}
            </div>
          </a>
          <a
            className="table-row c-red"
            href=""
            onClick={(e) => onSellDepthClick(e, Depth.sp4)}
          >
            <div className="table-cell">
              {Depth.sp4 != undefined ? Depth.sp4 : "0.00"}
            </div>
            <div className="table-cell">
              {Depth.bs4 != undefined ? Depth.bs4 : "0"}
            </div>
            <div className="table-cell">
              {Depth.sno5 != undefined ? Depth.sno5 : "0"}
            </div>
          </a>
          <a className="table-row c-red">
            <div className="table-cell">Total</div>
            <div className="table-cell"></div>
            <div className="table-cell">
              {(Depth.sno1 !== undefined ? Number(Depth.sno1) : 0) +
                (Depth.sno2 !== undefined ? Number(Depth.sno2) : 0) +
                (Depth.sno3 !== undefined ? Number(Depth.sno3) : 0) +
                (Depth.sno4 !== undefined ? Number(Depth.sno4) : 0) +
                (Depth.sno5 !== undefined ? Number(Depth.sno5) : 0)}
            </div>
          </a>
        </div>
      </td>
    </>
  ) : (
    <div> asa </div>
  );
};

export default MarketDepth;
