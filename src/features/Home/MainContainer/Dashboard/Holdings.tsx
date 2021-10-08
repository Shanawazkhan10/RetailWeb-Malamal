import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IHolding } from "../../../../types/Holding/IHolding";
import { SubUnsubReq, userWS } from "../../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import { fetchHolding } from "../Holding/HoldingSlice";
import { holdingContainer } from "../mainContainerSlice";
import PieChart from "../PieChart/PieChart";

const Holdings = () => {
  const dispatch = useAppDispatch();
  var currentValue = 0;
  const user = useSelector((state: RootState) => state.user);
  const HoldingList = useSelector((state: RootState) => state.holding);
  useEffect(() => {
    dispatch(fetchHolding(user.sessionKey));
    getSymbol();
  }, []);

  function getSymbol() {
    if (
      HoldingList.holding != undefined &&
      HoldingList.holding.holdinglist != undefined
    ) {
      //subscribe Script API Call
      const subUnsubReq: SubUnsubReq = {
        type: "mws",
        scrips: HoldingList.holding.holdinglist
          .map((x) => x.ex1 + "|" + x.tok1)
          .join("&"),
        channelnum: 1,
      };

      waitForSocketConnection(userWS, function () {
        sendUnsubReq(subUnsubReq);
      });
    }
  }

  function OpenHolding(e: any) {
    e.preventDefault();
    dispatch(holdingContainer());
    dispatch(fetchHolding(user.sessionKey));
  }

  function getColour(pnl: number) {
    if (pnl > 0) {
      return "green";
    } else {
      return "red";
    }
  }

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className="plate fadeIn-element" id="holdingbox">
        <div className="row slideInDown-element">
          <div className="col-md-6">
            <img src="images/holdings.svg" />
            <span>Holdings ({HoldingList.holding?.holdinglist?.length})</span>
          </div>
          <div className="col-md-6 holdingbtn">
            <span>
              <a href="" onClick={OpenHolding}>
                View All Holdings
              </a>
            </span>
          </div>
          <div className="col-md-6 holdingleft mt-4">
            <div>
              <h3 className="c-blue">{HoldingList.holding.totalInvestMent}</h3>
              <p>Total Investment</p>
            </div>
            <div>
              <h3 className="c-black">
                {HoldingList.holding.holdinglist?.map((holding: IHolding) => {
                  if (holding.curval != undefined)
                    currentValue = currentValue + Number(holding.curval);
                })}
                {currentValue}
              </h3>
              <p>Current Value</p>
            </div>
            <div>
              <div className="c-orange">
                <h3 className="d-inline">
                  {HoldingList.holding.daysPandL.toFixed(2)}
                </h3>
                <span>
                  ({HoldingList.holding.daysPandLPercent.toFixed(2)}%)
                </span>
              </div>
              <p>Day's P&L</p>
            </div>
            <div>
              <div className={"c-" + getColour(HoldingList.holding.totalPandL)}>
                <h3 className="d-inline">
                  {(currentValue - HoldingList.holding.totalInvestMent).toFixed(
                    2
                  )}
                </h3>
                <span>
                  ({HoldingList.holding.totalPandLPercent.toFixed(2)}%)
                </span>
              </div>
              <p>Total P&L</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            {HoldingList.holding?.holdinglist?.length > 0 && (
              <PieChart holdingList={HoldingList.holding.holdinglist} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
