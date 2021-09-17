import { parse } from "querystring";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { INetPosition } from "../../../../types/INetposition";
import { IPosition } from "../../../../types/Position/IPosition";

const NetPositionV = (props: { netposition: INetPosition }) => {
  const { netposition } = props;
  //const dispatch = useAppDispatch();
  //const dispatch = useAppDispatch();
  const NetpositionList = useSelector((state: RootState) => state.netposition);

  function renderSwitch(product: String) {
    switch (product) {
      case "CNC":
        return "orange";
      case "I":
        return "purple";
      case "NRML":
        return "blue";
      default:
        return "foo";
    }
  }

  return (
    <tr className="odd_col">
      <td>
        <input
          className="regular-checkbox"
          type="checkbox"
          name="row-check"
          value="1"
          id="one"
        />
        <label data-for="one"></label>
      </td>
      <td>
        <div className="nbox">
          <p className={renderSwitch(netposition.prod)}>{netposition.prod}</p>
        </div>
      </td>
      <td>
        <h3>
          {netposition.sym}{" "}
          <span>{netposition.exSeg.split("_")[0].toUpperCase()}</span>
        </h3>
      </td>

      <td>{netposition.flBuyQty}</td>
      <td>{netposition.buyAmt}</td>

      <td>{netposition.ltp}</td>
      <td>
        {Math.fround(
          parseFloat(netposition.ltp) - parseFloat(netposition.buyAmt)
        ).toFixed(2)}
      </td>
      <td>
        {Math.fround(
          parseFloat(netposition.buyAmt) /
            (parseFloat(netposition.ltp) - parseFloat(netposition.buyAmt))
        ).toFixed(2)}
        %
      </td>
    </tr>
  );
};

export default NetPositionV;
