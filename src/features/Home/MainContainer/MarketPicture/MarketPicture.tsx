import { useSelector } from "react-redux";
import { ContractSearch } from "../../../../app/api";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import Search from "../SmartSearch/Search";
import MarketPictureDepth from "./MarketPictureDepth";
import MarketPictureOrderEntry from "./MarketPictureOrderEntry";
import MarketPictureOrder from "./MarketPictureOrderEntry";
import MarketPicturePrice from "./MarketPicturePrice";
import { IMarketPicture } from "./../../../../types/IMarketPicture";
import smartsearch from "./../SmartSearch/SmartSearchSlice";
import SmartSearch from "../SmartSearch/SmartSearch";
import {
  SubUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import { userWS } from "../../../WebSocket/HSSocket";
import { useEffect } from "react";

const MarketPicture = () => {
  const { IsShow, Type, script, TokenInfo, Depth, Token } = useSelector(
    (state: RootState) => {
      return {
        IsShow: state.marketpicture.marketpicture.IsShow,
        Type: state.marketpicture.marketpicture.Type,
        script: state.marketpicture.marketpicture.script,
        TokenInfo: state.marketpicture.marketpicture.TokenInfo,
        Depth: state.marketpicture.marketpicture.Depth,
        Token: state.marketpicture.marketpicture.token,
      };
    }
  );

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
  const dispatch = useAppDispatch();
  //const { Script } = props;
  return IsShow && script != null && script != undefined ? (
    <div className="block mr14 marketPicture_pop" id="MarketPicture">
      <SmartSearch Type={Type}></SmartSearch>

      <div className="block_head">
        <h1>Market Picture : {TokenInfo.trdSym}</h1>
      </div>
      <div>
        <div className="content_in_market">
          {/* if({Depth != undefined} && {TokenInfo != undefined}) */}
          <MarketPictureDepth Depth={Depth}></MarketPictureDepth>
          <MarketPicturePrice TokenInfo={TokenInfo}></MarketPicturePrice>
          <MarketPictureOrderEntry></MarketPictureOrderEntry>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <SmartSearch Type={Type}></SmartSearch>
      Find an instrument Use the above search bar to find an instrument
      <MarketPictureOrderEntry></MarketPictureOrderEntry>
    </div>
  );
};

export default MarketPicture;
