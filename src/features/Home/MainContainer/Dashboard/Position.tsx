import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Progress, Tooltip } from "reactstrap";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { INetPosition } from "../../../../types/INetposition";
import { userWS } from "../../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import { positionContainer } from "../mainContainerSlice";
import { ShowDepthFromSearch } from "../MarketPicture/MarketPictureSlice";
import {
  fetchContractDetails,
  fetchNetposition,
} from "../NetPosition/NetPositionSlice";

const Position = () => {
  const dispatch = useAppDispatch();

  const user = useSelector((state: RootState) => state.user);

  const NetpositionList = useSelector((state: RootState) => state.netposition);

  useEffect(() => {
    dispatch(fetchNetposition(user.sessionKey));

    if (NetpositionList.netposition != undefined) {
      getSymbol();
      getContractDetails();
    }
  }, []);

  function getContractDetails() {
    if (NetpositionList.netposition != undefined) {
      var positionArr = NetpositionList.netposition.netpositionList?.map(
        (position) => position.exSeg + "|" + position.tok
      );
      dispatch(fetchContractDetails(positionArr, user.sessionKey));
    }
  }

  function OpenDepth() {
    dispatch(ShowDepthFromSearch(""));
  }

  function RedirecttoPosition(e: any) {
    e.preventDefault();
    dispatch(positionContainer());
  }

  function getSymbol() {
    if (
      NetpositionList.netposition != undefined &&
      NetpositionList.netposition.netpositionList != undefined
    ) {
      //subscribe Script API Call
      const subUnsubReq: SubUnsubReq = {
        type: "mws",
        scrips: NetpositionList.netposition.netpositionList
          .map((x) => x.trdSym)
          .join("&"),
        channelnum: 1,
      };

      waitForSocketConnection(userWS, function () {
        sendUnsubReq(subUnsubReq);
      });
    }
  }

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="row slideInDown-element">
          <div className="col-md-12" onClick={RedirecttoPosition}>
            <img src="images/positions.svg" /> <span>Positions</span>
          </div>

          <div className="col-md-12 positions mt-4" id="bar-graph">
            {NetpositionList.netposition &&
            NetpositionList.netposition.netpositionList != undefined &&
            NetpositionList.netposition.netpositionList.length > 0 ? (
              NetpositionList.netposition.netpositionList.map(
                (netposition: INetPosition, increment: number) =>
                  Math.ceil(netposition.PnL) > 0 ? (
                    <div className="row" onClick={RedirecttoPosition}>
                      <div className="col-md-6">
                        <Progress
                          id="progress"
                          className="flex-row-reverse"
                          value={Math.abs(netposition.PnL)}
                          // aria-label={netposition.ltp}
                        ></Progress>
                      </div>
                      <div className="col-md-6">
                        <p>{netposition.sym}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="row">
                      <div className="col-md-6">
                        <p className="text-right">{netposition.sym}</p>
                      </div>
                      <div className="col-md-6 c-red">
                        <Progress
                          id="progress"
                          value={Math.abs(netposition.PnL)}
                          //min="0"
                          //max={Math.ceil(Number(netposition.ltp) % 100)}
                          // aria-label={netposition.ltp}
                        ></Progress>
                      </div>
                    </div>
                  )
              )
            ) : (
              <div className="fadeIn-element">
                <div className="slideInDown-element text-center pt-4">
                  <div>
                    <p>You don't have any positions yet</p>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary button-blue"
                    onClick={OpenDepth}
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
