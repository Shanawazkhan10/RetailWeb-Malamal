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

  function onBuyDepthClick(e:any,price: string) {
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

  function onSellDepthClick(e:any,price: string) {
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
  function onDepthAnchorClick(event:any){

  }
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
            <tr onClick={(e) => onBuyDepthClick(e,Depth.bp)}>
              <td><a href="">{Depth.bp != undefined ? Depth.bp : "0.00"}</a></td>
              <td><a href="">{Depth.bq != undefined ? Depth.bq : "0"}</a></td>
              <td><a href="">{Depth.bno1 !== undefined ? Depth.bno1 : "0"}</a></td>
            </tr>

            <tr onClick={(e) => onBuyDepthClick(e,Depth.bp1)}>
              <td><a href="">{Depth.bp1 != undefined ? Depth.bp1 : "0.00"}</a></td>
              <td><a href="">{Depth.bq1 != undefined ? Depth.bq1 : "0"}</a></td>
              <td><a href="">{Depth.bno2 !== undefined ? Depth.bno2 : "0"}</a></td>
            </tr>
            <tr onClick={(e) => onBuyDepthClick(e,Depth.bp2)}>
              <td><a href="">{Depth.bp2 != undefined ? Depth.bp2 : "0.00"}</a></td>
              <td><a href="">{Depth.bq2 != undefined ? Depth.bq2 : "0"}</a></td>
              <td><a href="">{Depth.bno3 !== undefined ? Depth.bno3 : "0"}</a></td>
            </tr>
            <tr onClick={(e) => onBuyDepthClick(e,Depth.bp3)}>
              <td><a href="">{Depth.bp3 != undefined ? Depth.bp3 : "0.00"}</a></td>
              <td><a href="">{Depth.bq3 != undefined ? Depth.bq3 : "0"}</a></td>
              <td><a href="">{Depth.bno4 !== undefined ? Depth.bno4 : "0"}</a></td>
            </tr>
            <tr onClick={(e) => onBuyDepthClick(e,Depth.bp4)}>
              <td><a href="">{Depth.bp4 != undefined ? Depth.bp4 : "0.00"}</a></td>
              <td><a href="">{Depth.bq4 != undefined ? Depth.bq4 : "0"}</a></td>
              <td><a href="">{Depth.bno5 !== undefined ? Depth.bno5 : "0"}</a></td>
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
          <tr onClick={(e) => onSellDepthClick(e,Depth.sp)}>
              <td><a href="">{Depth.sp != undefined ? Depth.sp : "0.00"}</a></td>
              <td><a href="">{Depth.bs != undefined ? Depth.bs : "0"}</a></td>
              <td><a href="">{Depth.sno1 != undefined ? Depth.sno1 : "0"}</a></td>
            </tr>
            <tr onClick={(e) => onSellDepthClick(e,Depth.sp1)}>
              <td><a href="">{Depth.sp1 != undefined ? Depth.sp1 : "0.00"}</a></td>
              <td><a href="">{Depth.bs1 != undefined ? Depth.bs1 : "0"}</a></td>
              <td><a href="">{Depth.sno2 != undefined ? Depth.sno2 : "0"}</a></td>
            </tr>
            <tr onClick={(e) => onSellDepthClick(e,Depth.sp2)}>
              <td><a href="">{Depth.sp2 != undefined ? Depth.sp2 : "0.00"}</a></td>
              <td><a href="">{Depth.bs2 != undefined ? Depth.bs2 : "0"}</a></td>
              <td><a href="">{Depth.sno3 != undefined ? Depth.sno3 : "0"}</a></td>
            </tr>
            <tr onClick={(e) => onSellDepthClick(e,Depth.sp3)}>
              <td><a href="">{Depth.sp3 != undefined ? Depth.sp3 : "0.00"}</a></td>
              <td><a href="">{Depth.bs3 != undefined ? Depth.bs3 : "0"}</a></td>
              <td><a href="">{Depth.sno4 != undefined ? Depth.sno4 : "0"}</a></td>
            </tr>
            <tr onClick={(e) => onSellDepthClick(e,Depth.sp4)}>
              <td><a href="">{Depth.sp4 != undefined ? Depth.sp4 : "0.00"}</a></td>
              <td><a href="">{Depth.bs4 != undefined ? Depth.bs4 : "0"}</a></td>
              <td><a href="">{Depth.sno5 != undefined ? Depth.sno5 : "0"}</a></td>
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
