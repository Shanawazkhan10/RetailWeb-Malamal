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
  SortWatchlist,
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
    //setTimeout(function () {
    dispatch(fetchmarketWatch(false, userState.sessionKey));
    //}, 500);

    //console.log("getMarketWatchSuccess useEffect");
  }, []);

  const handleChange = (event: any, mwName: string) => {
    event.preventDefault();

    const ChangeWatchlist: IChangeWatchlist = {
      id: Number(event.currentTarget.id),
      mwname: mwName,
    };
    dispatch(ChangeWatchList(ChangeWatchlist));
  };

  function closeBottomMenu(e: any) {
    e.preventDefault();
    setShowMenu(false);
  }

  function showNewWatchlist(e: any) {
    e.preventDefault();
    dispatch(ShowNewWatchlist(true));
  }

  function sortList(nType: number) {
    dispatch(SortWatchlist(nType));
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
              WatchListData.length < 5 ? (
                <li className="newMW" key={"NewMW"}>
                  <a
                    className="page-link"
                    id={String(WatchListData.length + 1)}
                    onClick={(e) => showNewWatchlist(e)}
                  >
                    <span
                      aria-label={"NewMW"}
                      data-balloon-pos="up"
                      data-balloon
                    >
                      +
                    </span>
                  </a>
                </li>
              ) : (
                <></>
              )
            }
            position="top left"
            onOpen={() => setShowMenu(false)}
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
          top: "73%",
          left: "55%",
          //transform: "translate3d(348px, 795px, 0px)",
          //transform: "translate3d(208px, 708px, 0px)",
          //transform: "translate3d(-13px, -187px, 0px)",
        }}
        onClick={(e) => closeBottomMenu(e)}
      >
        {/* <p className="mb-3">Sort By:</p>
        <div className="my-2">
          <button onClick={(e) => sortList(1)}>A-Z</button>
          <button onClick={(e) => sortList(2)}>%</button>
          <button onClick={(e) => sortList(3)}>LTP</button>
          <button onClick={(e) => sortList(3)}>EXG</button>
        </div> */}

        <Popup
          trigger={
            <a className="dropdown-item" href="#">
              <img src="images/watchlist/edit-watchlist.svg" />
              <span>Edit watchlist name</span>
            </a>
          }
          onOpen={() => setShowMenu(false)}
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
          onOpen={() => setShowMenu(false)}
        >
          <DeleteWatchListComp></DeleteWatchListComp>
        </Popup>
      </div>
    </div>
  );
};

export default MarketWatchPortfolio;
