import "../../style.css";
import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { INetPosition } from "../../../../types/INetposition";

const NetPositionV = (props: { netposition: INetPosition }) => {
  const { netposition } = props;
  const dispatch = useAppDispatch();
  //const dispatch = useAppDispatch();

  return (
    <tr>
      <td className="netposclsdata" title={netposition.Symbol}>
        {netposition.Symbol}
      </td>
      <td className="netposclsdata" title={netposition.InstrumentName}>
        {netposition.InstrumentName}
      </td>
      <td className="netposclsdata" title={netposition.ProductType}>
        {netposition.ProductType}
      </td>
      <td className="netposclsdata right" title={netposition.MTMGL}>
        {netposition.MTMGL}
      </td>
      <td
        className="netposclsdata right"
        title={netposition.NetPrice}
        style={{ color: "#00ff00" }}
      >
        {netposition.NetPrice}
      </td>
      <td
        className="netposclsdata right"
        title={netposition.LastTradedPrice}
        id="tdltp"
      >
        {netposition.LastTradedPrice}
      </td>
      <td
        className="netposclsdata right"
        title={netposition.MTMGL}
        style={{ color: "#ff0000" }}
      >
        {netposition.MTMGL}
      </td>
      <td className="netposclsdata" title={netposition.ExchangeName}>
        {netposition.ExchangeName}
      </td>
      <td className="netposclsdata">
        <button
          className="buysellbtn buyNetPos"
          id="buyAddBtn"
          title="BUY"
          disabled
        >
          Buy
        </button>
        <button className="buysellbtn sellNetPos" id="sellAddBtn" title="SELL">
          Sell
        </button>
      </td>
      <td className="netposclsdata">
        <button
          className="buysellbtn buyNetPos netPosExit"
          id="buyExitBtn"
          title="BUY"
        >
          Buy
        </button>
        <button
          className="buysellbtn sellNetPos netPosExit"
          id="sellExitBtn"
          title="SELL"
          disabled
        >
          Sell
        </button>
      </td>
    </tr>
  );
};

export default NetPositionV;
