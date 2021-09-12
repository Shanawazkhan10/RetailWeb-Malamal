import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IChangeWatchlist } from "../../../../types/IChangeWatchlist";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IWatchListProps } from "../../../../types/IWatchListProps";
import SmartSearch from "../SmartSearch/SmartSearch";
import AddWatchListItem from "./AddWatchListItem";
import {
  ChangeWatchList,
  fetchmarketWatch,
  NewWatchList,
} from "./MarketWatchSlice";

const MarketWatchPortfolio = (props: IWatchListProps) => {
  const dispatch = useAppDispatch();
  let WatchListData: any[];
  let selectedList: number;
  const WatchList = useSelector((state: RootState) => state.marketwatch);
  const userState = useSelector((state: RootState) => state.user);
  selectedList = Number(WatchList.marketWatch.nSelectedWatchList);
  WatchListData = WatchList.marketWatch.MarketWatchList;
  const [bAddButton, setAddButton] = useState(false);
  // const userState = useAppSelector((state) => state.user);

  let bShowAddButton = WatchListData.length < 5 ? true : false;

  useEffect(() => {
    dispatch(fetchmarketWatch(false, userState.sessionKey));
    console.log("getMarketWatchSuccess useEffect");
  }, []);

  const handleChange = (event: any, mwName: string) => {
    event.preventDefault();
    //event.stopPropagation();
    const ChangeWatchlist: IChangeWatchlist = {
      id: Number(event.currentTarget.id),
      mwname: mwName,
    };
    dispatch(ChangeWatchList(ChangeWatchlist));
  };

  return (
    //onClick={() => AddWatchList()
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
              onClick={(e) => handleChange(e, WatchList.mwName)}
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
        {/* {bAddButton && (
          <li className="NewMW" key={WatchListData.length + 1}>
            <a
              className="page-link"
              id={String(WatchListData.length + 1)}
            >
              <span aria-label={"NewMW"} data-balloon-pos="up" data-balloon>
                {WatchListData.length + 1}
              </span>
            </a>
          </li>
        )} */}
        <Popup
          trigger={
            <li className="newMW" key={"NewMW"}>
              <a
                className="page-link"
                id={String(WatchListData.length + 1)}
                onClick={() => setAddButton(!bAddButton)}
              >
                <span aria-label={"NewMW"} data-balloon-pos="up" data-balloon>
                  +
                </span>
              </a>
            </li>
          }
          position="top left"
        >
          <AddWatchListItem></AddWatchListItem>
        </Popup>
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
