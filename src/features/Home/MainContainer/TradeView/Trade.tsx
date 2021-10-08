import React from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { ITradeView } from "../../../../types/ITradeView";
import { ITrade } from "../../../../types/Trade/ITradeResponse";

const TradeView = (props: { trade: ITrade }) => {
  const { trade } = props;
  const dispatch = useAppDispatch();
  return (
    <tbody>
      <tr className="odd_col">
        <td>{trade.flId}</td>
        <td>{String(trade.flTm).split(" ")[1]}</td>
        <td>
          <div className="nbox">
            <p className={"b" + (trade.trnsTp == "B" ? "buy" : "sell")}>
              {trade.trnsTp == "B" ? "Buy" : "Sell"}
            </p>
          </div>
        </td>
        <td>
          <h3>
            {trade.sym} <span>{trade.exSeg.split("_")[0].toUpperCase()}</span>
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
                <img src="images/positions/exit.svg" />
                Buy
              </a>
              <a className="dropdown-item" href="#">
                <img src="images/positions/add.svg" />
                Sell
              </a>
              <a className="dropdown-item" href="#">
                <img src="images/positions/create-gtt.svg" />
                Create GTT <span>/ GTC</span>
              </a>
              <a className="dropdown-item" href="#">
                <img src="images/positions/market-depth.svg" />
                Market depth
              </a>
              <a className="dropdown-item" href="#">
                <img src="images/positions/chart.svg" />
                Chart
              </a>
              <a className="dropdown-item" href="#">
                <img src="images/positions/watchlist.svg" />
                Add to marketwatch
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
                <img src="images/positions/alert.svg" />
                Set Alerts
              </a>
            </div>
          </div>
        </td>
        <td>{trade.prod == "I" ? "MIS" : trade.prod.toUpperCase()}</td>
        <td>{trade.fldQty}</td>
        <td>{trade.avgPrc}</td>
      </tr>
    </tbody>
  );
};

export default TradeView;
