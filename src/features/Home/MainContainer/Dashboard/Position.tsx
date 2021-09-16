import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Progress } from "reactstrap";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { INetPosition } from "../../../../types/INetposition";
import { userWS } from "../../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import { fetchNetposition } from "../NetPosition/NetPositionSlice";

const Position = () => {
  function onprogress(netposition: INetPosition) {
    let pnl = Math.ceil(Number(netposition.ltp) / Number(netposition.buyAmt));
    console.log(netposition.ltp + "  " + pnl);
    return String(pnl);
  }

  const dispatch = useAppDispatch();

  const user = useSelector((state: RootState) => state.user);

  const NetpositionList = useSelector((state: RootState) => state.netposition);

  useEffect(() => {
    dispatch(fetchNetposition(user.sessionKey));
    if (NetpositionList.netposition != undefined) getSymbol();
  }, []);

  function Something() {
    alert("Hello");
  }

  function getSymbol() {
    //subscribe Script API Call
    const subUnsubReq: SubUnsubReq = {
      type: "mws",
      scrips: NetpositionList.netposition.map((x) => x.trdSym).join("&"),
      channelnum: 1,
    };

    waitForSocketConnection(userWS, function () {
      sendUnsubReq(subUnsubReq);
    });
  }

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="row slideInDown-element">
          <div className="col-md-12">
            <img src="images/positions.svg" /> <span>Positions</span>
          </div>

          <div className="col-md-12 positions mt-4" id="bar-graph">
            {NetpositionList.netposition &&
            NetpositionList.netposition.length > 0 ? (
              NetpositionList.netposition.map(
                (netpostion: INetPosition, increment: number) => (
                  <div className="row">
                    <div className="col-md-6">
                      <Progress
                        className="flex-row-reverse"
                        value={onprogress(netpostion)}
                        min="0"
                        max="5"
                      ></Progress>
                      {/* <div
                    className="progress-bar"
                    role="progressbar"
                    data-aria-valuenow="1"
                    data-aria-valuemin="0"
                    data-aria-valuemax="100"
                    style={{ width: "100%" }}
                  ></div> */}
                    </div>
                    <div className="col-md-6">
                      <p>{netpostion.sym}</p>
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="plate fadeIn-element">
                <div className="row slideInDown-element">
                  <div>
                    <p>You don't have any positions yet</p>
                  </div>
                  <br />
                  <button
                    type="button"
                    className="button-blue"
                    onClick={Something}
                  >
                    Get started
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
