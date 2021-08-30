import React from "react";

import { useAppDispatch } from "../../../../app/hooks";
import { IOrderView } from "../../../../types/IOrderView";

const OrderView = (props: { order: IOrderView }) => {
  const { order } = props;
  const dispatch = useAppDispatch();
  //const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="netposclsdata" title={order.Symbol}>
        {order.Symbol}
      </td>
      <td className="netposclsdata" title={order.InstrumentName}>
        {order.InstrumentName}
      </td>
      <td className="netposclsdata" title={order.ProductType}>
        {order.ProductType}
      </td>
      <td className="netposclsdata right" title={order.Qty}>
        {order.Qty}
      </td>
      <td
        className="netposclsdata right"
        title={order.AvgPrice}
        style={{ color: "#00ff00" }}
      >
        {order.AvgPrice}
      </td>

      <td className="netposclsdata" title={order.Status}>
        {order.Status}
      </td>
      <td className="netposclsdata" title={order.Time}>
        {order.Time}
      </td>
    </tr>
  );
};

export default OrderView;
