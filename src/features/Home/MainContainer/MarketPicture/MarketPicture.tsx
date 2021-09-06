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

const MarketPicture = () => {
  const { IsShow, Type, script, TokenInfo, Depth } = useSelector(
    (state: RootState) => {
      return {
        IsShow: state.marketpicture.marketpicture.IsShow,
        Type: state.marketpicture.marketpicture.Type,
        script: state.marketpicture.marketpicture.script,
        TokenInfo: state.marketpicture.marketpicture.TokenInfo,
        Depth: state.marketpicture.marketpicture.Depth,
      };
    }
  );

  const dispatch = useAppDispatch();
  //const { Script } = props;
  return IsShow && script != null && script != undefined ? (
    <div className="block mr14 marketPicture_pop" id="MarketPicture">
      <SmartSearch></SmartSearch>

      <div className="block_head">
        <h1>Market Picture : SBIN-EQ</h1>
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
      <Search></Search>
      Find an instrument Use the above search bar to find an instrument
      <MarketPictureOrderEntry></MarketPictureOrderEntry>
    </div>
  );
};

export default MarketPicture;
