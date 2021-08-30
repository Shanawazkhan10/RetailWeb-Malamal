import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getWatchList } from "../../../../app/api";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IChangeWatchlist } from "../../../../types/IChangeWatchlist";
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
    <nav aria-label="Page navigation example">
      <ul id="pagination">
        {WatchListData.map((WatchList: any) => (
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
      </ul>
    </nav>
  ) : (
    <div>Empty Watch List</div>
  );
};

export default MarketWatchPortfolio;
