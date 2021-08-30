import React from "react";
import { IHolding } from "../../../../types/IHolding";
import { useAppDispatch } from "../../../../app/hooks";

const HoldingView = (props: { holding: IHolding }) => {
  const { holding } = props;
  const dispatch = useAppDispatch();
  //const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="netposclsdata" title={holding.Symbol}>
        {holding.Symbol}
      </td>
      <td className="netposclsdata" title={holding.InstrumentName}>
        {holding.InstrumentName}
      </td>
      <td className="netposclsdata" title={holding.ProductType}>
        {holding.ProductType}
      </td>
      <td className="netposclsdata right" title={holding.NeyQty}>
        {holding.NeyQty}
      </td>
      <td
        className="netposclsdata right"
        title={holding.Avg}
        style={{ color: "#00ff00" }}
      >
        {holding.Avg}
      </td>
      <td className="netposclsdata right" title={holding.LTP} id="tdltp">
        {holding.LTP}
      </td>
      <td
        className="netposclsdata right"
        title={holding.Avg}
        style={{ color: "#ff0000" }}
      >
        {holding.Avg}
      </td>
      <td className="netposclsdata" title={holding.PL}>
        {holding.PL}
      </td>
      <td className="netposclsdata" title={holding.Chg}>
        {holding.Chg}
      </td>
      <td className="netposclsdata" title={holding.Total}>
        {holding.Total}
      </td>
    </tr>
  );
};

export default HoldingView;
