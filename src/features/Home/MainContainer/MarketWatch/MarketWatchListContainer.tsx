import { Fragment, useEffect } from "react";
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
    <>
      {WatchListData.map((row: IMarketWatch, i) => (
        <table
          id="mainwatchlist"
          className="table table-responsive table-borderless"
          key={String(i)}
          style={selectedList == i ? {} : { display: "none" }}
        >
          <MarketWatchItem
            key={row.id}
            propMarketWatch={row}
            index={i}
          ></MarketWatchItem>
        </table>
      ))}
    </>
  ) : (
    <table className="table table-responsive table-borderless table-hover"></table>
  );
};

export default MarketWatchListContainer;
