import "../../style.css";
import React from "react";

import { useAppDispatch } from "../../../../app/hooks";
import { IOrderView } from "../../../../types/IOrderView";
import { IOrderResponse } from "../../../../types/Order/IOrderResponse";

const OrderView = (props: { order: IOrderResponse }) => {
  const { order } = props;
  const dispatch = useAppDispatch();
  //const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="netposclsdata">{order.sym}</td>
      <td className="netposclsdata">{order.exSeg}</td>
      <td className="netposclsdata">{order.prod}</td>
      <td className="netposclsdata right">{order.qty}</td>
      <td className="netposclsdata right" style={{ color: "#00ff00" }}>
        {order.avgPrc}
      </td>
      <td className="netposclsdata">{order.ordSt}</td>
      <td className="netposclsdata">{order.prc}</td>
      <td className="netposclsdata">{order.prcTp}</td>
      <td className="netposclsdata">{order.rejRsn}</td>
    </tr>
  );
};

export default OrderView;
