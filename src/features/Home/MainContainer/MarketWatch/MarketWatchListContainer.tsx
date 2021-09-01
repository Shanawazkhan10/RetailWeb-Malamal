import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IMarketWatch } from "../../../../types/IMarketWatch";

import MarketWatchItem from "./MarketWatchItem";

const MarketWatchListContainer = (props: any) => {
  //const [Flag, setFlag] = props;
  let WatchListData: any[];
  const WatchList = useSelector((state: RootState) => state.marketwatch);
  WatchListData = WatchList.marketWatch.MarketWatchList;
  let selectedList: number;
  selectedList = WatchList.marketWatch.nSelectedWatchList;
  const dispatch = useAppDispatch();

  useEffect(() => {
    //console.log(" MarketWatchListContainer useEffect");
  }, []);

  return WatchListData && WatchListData.length > 0 ? (
    <div>
      {WatchListData.map((row: IMarketWatch, i) => (
        <div
          className="mw_content"
          key={i}
          id={String(i)}
          style={selectedList == i ? {} : { display: "none" }}
        >
          <MarketWatchItem
            key={row.id}
            propMarketWatch={row}
            index={i}
          ></MarketWatchItem>
        </div>
      ))}
    </div>
  ) : (
    <div>Empty List</div>
  );
};

export default MarketWatchListContainer;
