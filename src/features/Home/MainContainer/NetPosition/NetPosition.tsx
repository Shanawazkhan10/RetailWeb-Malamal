import React from "react";
import { IPosition } from "../../../../types/Position/IPosition";


const NetPositionV = (props: { netposition: IPosition }) => {
  const { netposition } = props;
  //const dispatch = useAppDispatch();
  //const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="netposclsdata">{netposition.Sym}</td>
      <td className="netposclsdata">{netposition.optTp}</td>
      <td className="netposclsdata">{netposition.prod}</td>
      <td className="netposclsdata right">{netposition.prod}</td>
      <td className="netposclsdata right" style={{ color: "#00ff00" }}>
        {netposition.buyAmt}
      </td>
      <td className="netposclsdata right" id="tdltp">
        {netposition.sellAmt}
      </td>
      <td className="netposclsdata right" style={{ color: "#ff0000" }}>
        {netposition.cfBuyAmt}
      </td>
      <td className="netposclsdata">{netposition.exSeg}</td>
    </tr>
  );
};

export default NetPositionV;
