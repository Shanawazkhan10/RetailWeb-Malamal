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
        <button type="button" className="btn btn-primary exitbtn"></button>
      </td>
      <td>
        <h3>
          {netposition.sym}{" "}
          <span>{netposition.exSeg.split("_")[0].toUpperCase()}</span>
        </h3>
        <div className="watchlistbox">
          <button
            type="button"
            className="btn btn-primary wmore dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              <img src="images/positions/exit.svg" /> Exit
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/add.svg" /> Add
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/convert.svg" /> Convert
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/info.svg" /> Info
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/create-gtt.svg" /> Create GTT{" "}
              <span>/ GTC</span>
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/market-depth.svg" /> Market depth
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/chart.svg" /> Chart
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/watchlist.svg" /> Add to marketwatch
            </a>
            <a className="dropdown-item" href="#">
              <img
                src=""
                style={{
                  width: "15px",
                  height: "15px",
                  background: "rgba(106, 78, 238, 0.2)",
                  borderRadius: "3px",
                }}
              />{" "}
              Fundamentals
            </a>
            <a className="dropdown-item" href="#">
              <img
                src=""
                style={{
                  width: "15px",
                  height: "15px",
                  background: "rgba(106, 78, 238, 0.2)",
                  borderRadius: "3px",
                }}
              />{" "}
              Technicals
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/alert.svg" /> Set Alerts
            </a>
          </div>
        </div>
      </td>

      <td>{netposition.flBuyQty}</td>
      <td>
        {Math.fround(
          Number(netposition.buyAmt) / Number(netposition.flBuyQty)
        ).toFixed(2)}
      </td>

      <td>{netposition.ltp}</td>
      <td>
        {netposition.ltp != undefined
          ? Math.fround(
              parseFloat(netposition.ltp) - parseFloat(netposition.buyAmt)
            ).toFixed(2)
          : "0.00"}
      </td>
      <td>
        {netposition.ltp != undefined
          ? Math.fround(
              parseFloat(netposition.buyAmt) /
                (parseFloat(netposition.ltp) - parseFloat(netposition.buyAmt))
            ).toFixed(2)
          : "0.00"}
        %
      </td>
    </tr>
  );
};

export default NetPositionV;
