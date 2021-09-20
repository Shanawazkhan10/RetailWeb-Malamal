import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { IHolding } from "../../../../types/Holding/IHolding";

const HoldingView = (props: { holding: IHolding }) => {
  const { holding } = props;
  const dispatch = useAppDispatch();

  return (
    <tr className="odd_col">
      <td>
        <h3>{holding.nseTrdSym}</h3>
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
              <img
                src=""
                style={{
                  width: "15px",
                  height: "15px",
                  background: "rgba(106, 78, 238, 0.2)",
                  borderRadius: "3px",
                }}
              />
              View Breakdown
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/create-gtt.svg" /> Create GTT
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
              />
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
              />
              Technicals
            </a>
            <a className="dropdown-item" href="#">
              <img src="images/positions/alert.svg" /> Set Alerts
            </a>
          </div>
        </div>
      </td>
      <td>{holding.hldQty}</td>
      <td style={{ color: "#00ff00" }}>{holding.whdColQty}</td>
      <td>{holding.whdColQty}</td>
      <td style={{ color: "#ff0000" }}>{holding.whdColQty}</td>
      <td>{holding.whdColQty}</td>
      <td>{holding.whdColQty}</td>
      <td>{holding.whdColQty}</td>
    </tr>
  );
};

export default HoldingView;
