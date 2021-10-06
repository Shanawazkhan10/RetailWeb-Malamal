import React, { useState } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { IHolding } from "../../../../types/Holding/IHolding";

const HoldingView = (props: { holding: IHolding }) => {
  const { holding } = props;
  const dispatch = useAppDispatch();

  const [showMenu, OpenMenu] = useState(false);

  function SetMenuflag(e: any) {
    e.preventDefault();
    if (e._reactName == "onMouseOver") {
      if (showMenu == true) {
        OpenMenu(false);
      }
    } else {
      OpenMenu(!showMenu);
    }
  }

  function getColour(pnl: String) {
    if (Number(pnl) > 0) {
      return "green";
    } else {
      return "red";
    }
  }

  return (
    <tr className="odd_col">
      <td>
        <h3>{String(holding.nseTrdSym).split("-")[0]}</h3>
        <div className={"watchlistbox" + (showMenu ? " show" : "")}>
          <button
            type="button"
            className="btn btn-primary wmore dropdown-toggle"
            id="dropdownMenuButton"
            onClick={(e) => SetMenuflag(e)}
            onMouseOver={(e) => SetMenuflag(e)}
            aria-expanded={showMenu}
          ></button>
          <div
            className={"dropdown-menu" + (showMenu ? " show" : "")}
            aria-labelledby="dropdownMenuButton"
          >
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
            {/* <a className="dropdown-item" href="#">
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
            </a> */}
            {/* <a className="dropdown-item" href="#">
              <img src="images/positions/alert.svg" /> Set Alerts
            </a> */}
          </div>
        </div>
      </td>
      {/* <td>{holding.exSeg1}</td>
      <td>{holding.prod}</td> */}
      <td>{holding.hldQty}</td>
      <td>{holding.prc}</td>
      <td>{holding.ltp}</td>
      <td>{holding.curval != undefined ? holding.curval : 0}</td>
      <td className={"c-" + getColour(holding.pnl)}>{holding.pnl}</td>
      <td className={"c-" + getColour(holding.netchg)}>
        {holding.netchg == undefined ? 0 : holding.netchg + "%"}
      </td>
      <td>{holding.daychg}%</td>
    </tr>
  );
};

export default HoldingView;
