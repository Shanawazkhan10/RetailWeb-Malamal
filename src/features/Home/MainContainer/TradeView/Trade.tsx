import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { ITradeView } from "../../../../types/ITradeView";
import { ITrade } from "../../../../types/Trade/ITradeResponse";

const TradeView = (props: { trade: ITrade }) => {
  const { trade } = props;
  const dispatch = useAppDispatch();
  return (
    <tr>
      <td className="netposclsdata">{trade.sym}</td>
      <td className="netposclsdata">{trade.exSeg}</td>
      <td className="netposclsdata">{trade.prod}</td>
      <td className="netposclsdata right">{trade.qty}</td>
      <td className="netposclsdata right" style={{ color: "#00ff00" }}>
        {trade.avgPrc}
      </td>

      <td className="netposclsdata">{trade.stat}</td>
      <td className="netposclsdata">{trade.exTm}</td>
    </tr>
  );
};

export default TradeView;
