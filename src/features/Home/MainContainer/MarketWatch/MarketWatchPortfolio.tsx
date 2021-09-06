import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IChangeWatchlist } from "../../../../types/IChangeWatchlist";
import { IWatchListProps } from "../../../../types/IWatchListProps";
import {
  ChangeWatchList,
  fetchmarketWatch,
  onMarketWatchSuccess,
} from "./MarketWatchSlice";
import { useAppSelector } from "../../../../app/hooks";

const MarketWatchPortfolio = (props: IWatchListProps) => {
  const dispatch = useAppDispatch();
  let WatchListData: any[];
  let selectedList: number;
  const WatchList = useSelector((state: RootState) => state.marketwatch);
  const userState = useSelector((state: RootState) => state.user);
  selectedList = Number(WatchList.marketWatch.nSelectedWatchList);
  WatchListData = WatchList.marketWatch.MarketWatchList;

  // const userState = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchmarketWatch(false, userState.sessionKey));
    console.log("getMarketWatchSuccess useEffect");
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
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {WatchListData.map((WatchList: any) => (
          <li
            className={
              "page-item" + (WatchList.id === selectedList ? " active" : "")
            }
            key={WatchList.id}
          >
            <a
              className="page-link"
              href=""
              id={String(WatchList.id)}
              onClick={handleChange}
            >
              <span
                aria-label={WatchList.mwName}
                data-balloon-pos="up"
                data-balloon
              >
                {WatchList.id + 1}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// return WatchListData && WatchListData.length > 0 ? (
//   // !WatchList.marketWatch.bIsBind ? (
//   <nav aria-label="Page navigation example">
//     <ul id="pagination">
//       {WatchListData.map((WatchList: any) => (
//         <li
//           key={WatchList.id}
//           className={
//             WatchList.id === selectedList
//               ? "scroll_tab_first tab_selected"
//               : "scroll_tab_first"
//           }
//           style={{ display: "inline-block", zoom: "1" }}
//         >
//           {/* <a href="" id={WatchList.id} onClick={handleChange}>
//             {WatchList.mwName}
//           </a> */}
//           <nav aria-label="Page navigation example">
//             <ul className="pagination">
//               <li className="page-item active">
//                 <a
//                   className="page-link"
//                   href=""
//                   id={String(WatchList.id)}
//                   onClick={handleChange}
//                 >
//                   <span
//                     aria-label={WatchList.mwName}
//                     data-balloon-pos="up"
//                     data-balloon
//                   >
//                     {WatchList.id + 1}
//                   </span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </li>
//       ))}
//     </ul>
//   </nav>
// ) : (
//   <div>Empty Watch List</div>
// );
//};

export default MarketWatchPortfolio;
