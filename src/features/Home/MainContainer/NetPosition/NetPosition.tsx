import React from "react";
import { IPosition } from "../../../../types/Position/IPosition";

const NetPositionV = (props: { netposition: IPosition }) => {
  const { netposition } = props;
  //const dispatch = useAppDispatch();
  //const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="netposclsdata">{netposition.sym}</td>
      <td className="netposclsdata">{netposition.prod}</td>
      <td className="netposclsdata right">{netposition.flBuyQty}</td>
      <td className="netposclsdata right" style={{ color: "#00ff00" }}>
        {netposition.buyAmt}
      </td>
      <td className="netposclsdata right" id="tdltp">
        {netposition.sellAmt}
      </td>
      <td className="netposclsdata right" style={{ color: "#ff0000" }}>
        {netposition.cfBuyAmt}
      </td>
      <td className="netposclsdata">
        {netposition.exSeg.split("_")[1].toUpperCase()}
      </td>
      <td className="" title="Add">
        <span>Add</span>
      </td>
      <td className="" title="Exit">
        <span>Exit</span>
      </td>
    </tr>
  );
};

export default NetPositionV;
