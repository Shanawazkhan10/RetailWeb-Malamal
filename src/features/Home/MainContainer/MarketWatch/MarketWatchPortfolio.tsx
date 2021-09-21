import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IChangeWatchlist } from "../../../../types/IChangeWatchlist";
import { IWatchListProps } from "../../../../types/IWatchListProps";
import AddWatchListItem from "./AddWatchListItem";
import DeleteWatchListComp from "./DeleteWatchList";
import EditWatchListComp from "./EditWatchList";
import {
  ChangeWatchList,
  fetchmarketWatch,
  ShowNewWatchlist,
} from "./MarketWatchSlice";

const MarketWatchPortfolio = (props: IWatchListProps) => {
  const dispatch = useAppDispatch();
  let WatchListData: any[];
  let selectedList: number;
  const WatchList = useSelector((state: RootState) => state.marketwatch);
  const userState = useSelector((state: RootState) => state.user);
  selectedList = Number(WatchList.marketWatch.nSelectedWatchList);
  WatchListData = WatchList.marketWatch.MarketWatchList;
  //const [bAddButton, setAddButton] = useState(false);
  // const userState = useAppSelector((state) => state.user);
  const [showMenu, setShowMenu] = useState(false);
  let bShowAddButton = WatchListData.length < 5 ? true : false;
  const [bEdit, SetEditFlag] = useState(false);
  useEffect(() => {
    dispatch(fetchmarketWatch(false, userState.sessionKey));
    console.log("getMarketWatchSuccess useEffect");
  }, []);

  const handleChange = (event: any, mwName: string) => {
    event.preventDefault();

    const ChangeWatchlist: IChangeWatchlist = {
      id: Number(event.currentTarget.id),
      mwname: mwName,
    };
    dispatch(ChangeWatchList(ChangeWatchlist));
  };

  function onEditWatchlist(e: any) {
    e.preventDefault();
  }

  function showNewWatchlist(e: any) {
    e.preventDefault();
    dispatch(ShowNewWatchlist(true));
  }
  return (
    //onClick={() => AddWatchList()
    <div className={"pagenum" + (showMenu ? " show" : "")}>
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
                  onClick={(e) => showNewWatchlist(e)}
                >
                  <span aria-label={"NewMW"} data-balloon-pos="up" data-balloon>
                    +
                  </span>
                </a>
              </li>
            }
            position="top left"
          >
            <AddWatchListItem
              index={Number(WatchListData.length + 1)}
            ></AddWatchListItem>
          </Popup>
        </ul>
      </nav>
      <a
        className="float-right"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={showMenu}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <img className=" my-1" src="images/settings.svg" />
      </a>
      <div
        className={
          "dropdown-menu dropdown-menu-right" + (showMenu ? " show" : "")
        }
        aria-labelledby="dropdownMenuButton"
        x-placement="top-end"
        style={{
          position: "absolute",
          willChange: "transform",
          top: "0px",
          left: "0px",
          transform: "translate3d(208px, 708px, 0px)",
        }}
      >
        <p className="mb-3">Sort By:</p>
        <div className="my-2">
          <button>A-Z</button>
          <button>%</button>
          <button>LTP</button>
          <button>EXH</button>
        </div>

        <Popup
          trigger={
            <a className="dropdown-item" onClick={(e) => onEditWatchlist(e)}>
              <img src="images/watchlist/edit-watchlist.svg" />
              Edit watchlist name
            </a>
          }
        >
          <EditWatchListComp></EditWatchListComp>
        </Popup>

        <Popup
          trigger={
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#DeleteCModal"
            >
              <img src="images/watchlist/delete.svg" /> Delete watchlist
            </a>
          }
        >
          <DeleteWatchListComp></DeleteWatchListComp>
        </Popup>
      </div>
    </div>
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
