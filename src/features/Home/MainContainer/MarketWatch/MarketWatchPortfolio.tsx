import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getWatchList } from "../../../../app/api";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IChangeWatchlist } from "../../../../types/IChangeWatchlist";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IWatchListProps } from "../../../../types/IWatchListProps";
import { ChangeWatchList, onMarketWatchSuccess } from "./MarketWatchSlice";

const MarketWatchPortfolio = (props: IWatchListProps) => {
  //const [appState, changeState] = useState(0);
  const dispatch = useAppDispatch();
  //const [Flag, setFlag] = props;
  let WatchListData: any[];
  let selectedList: number;
  const WatchList = useSelector((state: RootState) => state.marketwatch);
  selectedList = Number(WatchList.marketWatch.nSelectedWatchList);
  WatchListData = WatchList.marketWatch.MarketWatchList;

  useEffect(() => {
    //if (!WatchList.marketWatch.bIsBind) {
    dispatch(onMarketWatchSuccess(getWatchList()));
    console.log("getMarketWatchSuccess useEffect");
    //}
  }, []);

  const handleChange = (event: any) => {
    event.preventDefault();
    //event.stopPropagation();
    const ChangeWatchlist: IChangeWatchlist = {
      id: Number(event.currentTarget.id),
      mwname: event.currentTarget.value,
    };
    dispatch(ChangeWatchList(ChangeWatchlist));
  };

  return WatchListData && WatchListData.length > 0 ? (
    // !WatchList.marketWatch.bIsBind ? (
    <div className="mw_head" id="mw_head">
      <ul id="ulTab" className="scroll_tabs_container">
        <div
          className="scroll_tab_left_button"
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "26px",
            cursor: "pointer",
            display: "none",
          }}
        ></div>
        <div
          className="scroll_tab_inner"
          style={{
            margin: "0px",
            overflow: "hidden",
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
          }}
        >
          {WatchListData.map((WatchList: any) => (
            // <MarketWatchTabLayout
            //   key={WatchList.id}
            //   MarketWatchProps={WatchList}
            // />
            <li
              key={WatchList.id}
              className={
                WatchList.id === selectedList
                  ? "scroll_tab_first tab_selected"
                  : "scroll_tab_first"
              }
              style={{ display: "inline-block", zoom: "1" }}
            >
              <a href="" id={WatchList.id} onClick={handleChange}>
                {WatchList.mwName}
              </a>
            </li>
          ))}
        </div>
        <div
          className="scroll_tab_right_button"
          style={{
            position: "absolute",
            right: "0px",
            top: "0px",
            width: "26px",
            cursor: "pointer",
            display: "none",
          }}
        ></div>
      </ul>
    </div>
  ) : (
    <div>Empty Watch List</div>
  );
};

export default MarketWatchPortfolio;
