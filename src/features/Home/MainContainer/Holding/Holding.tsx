import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { IHolding } from "../../../../types/Holding/IHolding";

const HoldingView = (props: { holding: IHolding }) => {
  const { holding } = props;
  const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="netposclsdata">{holding.bseTrdSym}</td>
      <td className="netposclsdata">{holding.exSeg1}</td>
      <td className="netposclsdata">{holding.prod}</td>
      <td className="netposclsdata right">{holding.whdHldQty}</td>

      <td className="netposclsdata right">{holding.prc}</td>
      {/* <td
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
      </td> */}
    </tr>
  );
};

export default HoldingView;
