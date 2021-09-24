import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { userWS } from "../../../WebSocket/HSSocket";
import {
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import SmartSearch from "../SmartSearch/SmartSearch";
import MarketPictureDepth from "./MarketPictureDepth";
import MarketPictureOrderEntry from "./MarketPictureOrderEntry";
import MarketPicturePrice from "./MarketPicturePrice";
import { CloseDepth, ShowDepthFromSearch } from "./MarketPictureSlice";

const MarketPicture = (props: {
  script: any;
  Token: any;
  IsShow: boolean;
  Type: number;
  symbolExg: string;
}) => {
  //const { IsShow, Type, script, TokenInfo, Depth, Token } = useSelector(
  const { TokenInfo, Depth } = useSelector((state: RootState) => {
    return {
      //IsShow: state.marketpicture.marketpicture.IsShow,
      //Type: state.marketpicture.marketpicture.Type,
      //script: state.marketpicture.marketpicture.script,
      TokenInfo: state.marketpicture.marketpicture.TokenInfo,
      Depth: state.marketpicture.marketpicture.Depth,
      //Token: state.marketpicture.marketpicture.token,
    };
  });
  const { IsShow, Type, script, Token, symbolExg } = props;

  const [symbol, setSymbol] = React.useState("");
  const [showPopup, setopup] = React.useState(IsShow);
  const dispatch = useAppDispatch();
  dispatch(ShowDepthFromSearch(script));

  if (symbol != script && script != undefined && script != "") {
    setSymbol(script);
    if (symbol != "") {
      const subUnsubReq: SubUnsubReq = {
        type: "mwu",
        scrips: symbol,
        channelnum: 5,
      };

      let req = JSON.stringify(subUnsubReq);
      waitForSocketConnection(userWS, function () {
        userWS.send(req);
      });

      const subUnsubReqSepth: SubUnsubReq = {
        type: "dpu",
        scrips: symbol,
        channelnum: 5,
      };

      let reqDepth = JSON.stringify(subUnsubReqSepth);
      waitForSocketConnection(userWS, function () {
        userWS.send(reqDepth);
      });
    }
  }

  useEffect(() => {
    if (script != undefined) {
      //subscribe Script  & Depth API Call
      const subUnsubReq: SubUnsubReq = {
        type: "mws",
        scrips: script,
        channelnum: 5,
      };

      let req = JSON.stringify(subUnsubReq);
      waitForSocketConnection(userWS, function () {
        userWS.send(req);
      });

      const subUnsubReqSepth: SubUnsubReq = {
        type: "dps",
        scrips: script,
        channelnum: 5,
      };

      let reqDepth = JSON.stringify(subUnsubReqSepth);
      waitForSocketConnection(userWS, function () {
        userWS.send(reqDepth);
      });
    }
  });

  function close() {
    setopup(false);
    dispatch(CloseDepth(""));
    //Unsubscribe Script  & Depth API Call
    const subUnsubReq: SubUnsubReq = {
      type: "mwu",
      scrips: symbol,
      channelnum: 5,
    };

    let req = JSON.stringify(subUnsubReq);
    waitForSocketConnection(userWS, function () {
      userWS.send(req);
    });

    const subUnsubReqSepth: SubUnsubReq = {
      type: "dpu",
      scrips: symbol,
      channelnum: 5,
    };

    let reqDepth = JSON.stringify(subUnsubReqSepth);
    waitForSocketConnection(userWS, function () {
      userWS.send(reqDepth);
    });
  }
  //const { Script } = props;
  return showPopup && script != null && script != undefined ? (
    <div
      className="modal fade show"
      id="SChartModal"
      data-tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style={{ display: "block", paddingRight: "4px" }}
      aria-modal="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <SmartSearch Type={Type}></SmartSearch>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close()}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row watchlistname">
              <div className="col-md-6">
                <h3>{symbolExg.split("|")[0]}</h3>
                <span>{symbolExg.split("|")[1]}</span>
              </div>
              <div className="col-md-6 text-right">
                <h3 className="c-green">
                  {TokenInfo.ltp == undefined ? "0.00" : TokenInfo.ltp}
                </h3>
                <h6>
                  {" "}
                  {TokenInfo.cng == undefined ? "0.00" : TokenInfo.cng} (
                  {TokenInfo.nc == undefined ? "0.00" : TokenInfo.nc}%)
                </h6>
              </div>
            </div>

            {/* if({Depth != undefined} && {TokenInfo != undefined}) */}
            <MarketPictureDepth Depth={Depth} TokenInfo={TokenInfo} />
            <MarketPicturePrice TokenInfo={TokenInfo}></MarketPicturePrice>
            <MarketPictureOrderEntry
              TokenInfo={TokenInfo}
            ></MarketPictureOrderEntry>
          </div>
        </div>
      </div>
    </div>
  ) : showPopup ? (
    <div>
      <SmartSearch Type={2}></SmartSearch>
      Find an instrument Use the above search bar to find an instrument
      <MarketPictureOrderEntry TokenInfo={TokenInfo}></MarketPictureOrderEntry>
    </div>
  ) : (
    <></>
  );
};

export default MarketPicture;
