import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IDeleteWatchlist } from "../../../../app/IDeleteWatchlist";
import { RootState } from "../../../../store/store";
import { IRenameWatchlist } from "../../../../types/IRenameWatchlist";
import SmartSearch from "../SmartSearch/SmartSearch";
import { IUpdateWatchlist } from "../../../../types/WatchList/IUpdateWatchList";

import {
  DeleteWatchlist,
  RenameWatchlist,
  UpdateWatchlist,
} from "./MarketWatchSlice";

const MarketWatchHeader = () => {
  const [sName, setName] = useState("");
  const [bEdit, SetEditFlag] = useState(false);
  // let selectedList: number;
  // const WatchList = useSelector((state: RootState) => state.marketwatch);
  // selectedList = WatchList.marketWatch.nSelectedWatchList;

  const user = useSelector((state: RootState) => state.user);
  const {
    nSelectedWatchList,
    sSelectedWatchList,
    bIsBind,
    bIsError,
    WatchList,
  } = useSelector((state: RootState) => {
    return {
      nSelectedWatchList: state.marketwatch.marketWatch.sSelectedWatchList,
      sSelectedWatchList: state.marketwatch.marketWatch.sSelectedWatchList,
      bIsBind: state.marketwatch.marketWatch.bIsBind,
      bIsError: state.marketwatch.marketWatch.bIsError,
      WatchList: state.marketwatch.marketWatch.MarketWatchList,
    };
  });

  const dispatch = useAppDispatch();

  function handleChange(event: any) {
    setName(event.target.value);
  }

  function SaveWatchList() {
    const UpdateReq: IUpdateWatchlist = {
      mwName: sName,
      scrips: "",
      // userid: UserId,
    };

    dispatch(UpdateWatchlist(UpdateReq, user.sessionKey));
    //dispatch(AddToWatchList(setName)); //API Call
  }

  function EditWatchList() {
    //setName(evt.target.value);
    const RenameReq: IRenameWatchlist = {
      oldmwName: sSelectedWatchList,
      newmwName: sName, //from input control
      userId: user.UserId,
    };
    //API Call TO rename watch list
    dispatch(RenameWatchlist(RenameReq, user.sessionKey));
    //dispatch(RenameWatchList(RenameWatchlist(Input))); //API Call
    SetEditFlag(false);
  }
  return (
    <div className="mw_headnew">
      <SmartSearch Type={1}></SmartSearch>
      <div className="mw-head-btns">
        <button id="btnSave" title="Save" onClick={SaveWatchList}>
          Save
        </button>

        <button id="btnCancelMode" title="Close" style={{ display: "none" }}>
          Cancel
        </button>
        {/* <div className="dot-menu">
          <input id="dot-menu" type="checkbox" className="dot-menu__checkbox" />
          <label htmlFor="dot-menu" className="dot-menu__label">
            <span>Menu</span>
          </label>
        </div> */}
        {bEdit && (
          <div className="Edit Watchlist">
            <input
              id="txtNewMW"
              type="text"
              className="EditwatchList"
              onChange={handleChange}
            ></input>
            <button id="btnSave" title="Save" onClick={() => EditWatchList()}>
              Save
            </button>
          </div>
        )}
      </div>
    </div>

    // <div className="mw_headnew">
    //   {/*<h1>
    //     <span>market Watch</span>
    //      <button id="mw_sort" title="Sort Market Watch">
    //       SORT
    //     </button>
    //   </h1>*/}
    //   {/* <input
    //     type="text"
    //     id="txtWatchlist"
    //     placeholder="Search for a symbol"
    //     onChange={(e) => handleChange}
    //     value={sName}
    //   ></input> */}
    //   <SmartSearch></SmartSearch>
    //   {/* <div className="mw-head-btns">
    //     <button id="btnEditMode" title="Edit" onClick={(e) => EditWatchList()}>
    //       Edit
    //     </button>
    //     <button id="btnSave" title="Save" onClick={SaveWatchList}>
    //       Save
    //     </button>
    //     <button
    //       id="btnDelete"
    //       title="Delete"
    //       onClick={(e) => RemoveWatchList()}
    //     >
    //       Delete
    //     </button>
    //     <button id="btnCancelMode" title="Close" style={{ display: "none" }}>
    //       Cancel
    //     </button>
    //     <div className="dot-menu">
    //       <input id="dot-menu" type="checkbox" className="dot-menu__checkbox" />
    //       <label htmlFor="dot-menu" className="dot-menu__label">
    //         <span>Menu</span>
    //       </label>
    //     </div>
    //   </div> */}
    // </div>
  );
};

export default MarketWatchHeader;
