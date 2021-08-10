import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import "../../style.css";
import MarketWatchItem from "./MarketWatchItem";
import SingleLayout from "./MarketWatchItem";

const MarketWatchListContainer = (props: any) => {
  //const [Flag, setFlag] = props;
  let WatchListData: any[];
  const WatchList = useSelector((state: RootState) => state.marketwatch);
  WatchListData = WatchList.marketWatch.MarketWatchList;
  let selectedList: number;
  selectedList = WatchList.marketWatch.nSelectedWatchList;
  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(getMarketWatchSuccess(getNetpositionData()));
  }, []);
  return WatchListData && WatchListData.length > 0 ? (
    <div>
      {WatchListData.map((row: IMarketWatch, i) => (
        <div
          className="mw_content"
          id={String(i + 1)}
          style={selectedList == i + 1 ? {} : { display: "none" }}
        >
          <div
            style={{
              width: "300%",
              height: "100%",
              position: "absolute",
              left: "-455px",
            }}
          >
            <div
              id="mw_leftInnerView"
              className="mw_inner"
              style={{ width: "455px" }}
            ></div>
            <div
              id="mw_centralInnerView"
              className="mw_inner"
              style={{ width: "455px" }}
            >
              {/* {WatchListData.map((WatchList: any) => (
                <SingleLayout />
              ))} */}
              <MarketWatchItem
                key={row.id}
                propMarketWatch={row}
              ></MarketWatchItem>
            </div>
            <div
              id="mw_rightInnerView"
              className="mw_inner"
              style={{ width: "455px" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>Empty List</div>
  );
};

export default MarketWatchListContainer;
