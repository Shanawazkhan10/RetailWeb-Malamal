import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { IHolding } from "../../../../types/Holding/IHolding";

const HoldingView = (props: { holding: IHolding }) => {
  const { holding } = props;
  const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="netposclsdata">{holding.nseTrdSym}</td>
      <td className="netposclsdata">{holding.exSeg1}</td>
      <td className="netposclsdata">{holding.prod}</td>
      <td className="netposclsdata right">{holding.hldQty}</td>
      <td className="netposclsdata right" style={{ color: "#00ff00" }}>
        {holding.whdColQty}
      </td>
      <td className="netposclsdata right" id="tdltp">
        {holding.whdColQty}
      </td>
      <td className="netposclsdata right" style={{ color: "#ff0000" }}>
        {holding.whdColQty}
      </td>
      <td className="netposclsdata">{holding.whdColQty}</td>
      <td className="netposclsdata">{holding.whdColQty}</td>
      <td className="netposclsdata">{holding.whdColQty}</td>
    </tr>
  );
};

export default HoldingView;
