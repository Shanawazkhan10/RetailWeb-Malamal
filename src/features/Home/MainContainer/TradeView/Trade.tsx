import "../../style.css";
import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { ITradeView } from "../../../../types/ITradeView";

const TradeView = (props: { trade: ITradeView }) => {
  const { trade } = props;
  const dispatch = useAppDispatch();
  return (
    <tr>
      <td className="netposclsdata" title={trade.Symbol}>
        {trade.Symbol}
      </td>
      <td className="netposclsdata" title={trade.InstrumentName}>
        {trade.InstrumentName}
      </td>
      <td className="netposclsdata" title={trade.ProductType}>
        {trade.ProductType}
      </td>
      <td className="netposclsdata right" title={trade.Qty}>
        {trade.Qty}
      </td>
      <td
        className="netposclsdata right"
        title={trade.AvgPrice}
        style={{ color: "#00ff00" }}
      >
        {trade.AvgPrice}
      </td>

      <td className="netposclsdata" title={trade.Status}>
        {trade.Status}
      </td>
      <td className="netposclsdata" title={trade.Time}>
        {trade.Time}
      </td>
    </tr>
  );
};

export default TradeView;
