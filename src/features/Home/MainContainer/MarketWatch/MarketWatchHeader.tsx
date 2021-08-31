import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { IDeleteWatchlist } from "../../../../app/IDeleteWatchlist";
import { RootState } from "../../../../store/store";
import { IRenameWatchlist } from "../../../../types/IRenameWatchlist";
import { IUpdateWatchlist } from "../../../../types/WatchList/IUpdateWatchList";
import "../../style.css";
import Search1 from "../SmartSearch/Search1";
import {
  DeleteWatchlist,
  RenameWatchlist,
  UpdateWatchlist,
} from "./MarketWatchSlice";

const MarketWatchHeader = () => {
  const [sName, setName] = useState("");
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
  function RemoveWatchList() {
    const DeleteReq: IDeleteWatchlist = {
      mwName: sSelectedWatchList,
      userId: user.UserId,
    };
    dispatch(DeleteWatchlist(DeleteReq)); //API Call
  }

  function handleChange(event: any) {
    setName(event.target.value);
  }

  function SaveWatchList() {
    const UpdateReq: IUpdateWatchlist = {
      mwName: sName,
      scrips: "",
      userid: user.UserId,
    };

    dispatch(UpdateWatchlist(UpdateReq,user.sessionKey));
    //dispatch(AddToWatchList(setName)); //API Call
  }

  function EditWatchList() {
    const RenameReq: IRenameWatchlist = {
      oldmwName: sSelectedWatchList,
      newmwName: sName, //from input control
      id: Number(nSelectedWatchList),
      userId: user.UserId,
    };
    //API Call TO rename watch list
    dispatch(RenameWatchlist(RenameReq,user.sessionKey));
    //dispatch(RenameWatchList(RenameWatchlist(Input))); //API Call
  }
  return (
    <div className="mw_headnew">
      {/*<h1>
        <span>market Watch</span>
         <button id="mw_sort" title="Sort Market Watch">
          SORT
        </button> 
      </h1>*/}
      {/* <input
        type="text"
        id="txtWatchlist"
        placeholder="Search for a symbol"
        onChange={(e) => handleChange}
        value={sName}
      ></input> */}
      <Search1></Search1>
      <div className="mw-head-btns">
        <button id="btnEditMode" title="Edit" onClick={(e) => EditWatchList()}>
          Edit
        </button>
        <button id="btnSave" title="Save" onClick={SaveWatchList}>
          Save
        </button>
        <button
          id="btnDelete"
          title="Delete"
          onClick={(e) => RemoveWatchList()}
        >
          Delete
        </button>
        <button id="btnCancelMode" title="Close" style={{ display: "none" }}>
          Cancel
        </button>
        <div className="dot-menu">
          <input id="dot-menu" type="checkbox" className="dot-menu__checkbox" />
          <label htmlFor="dot-menu" className="dot-menu__label">
            <span>Menu</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MarketWatchHeader;
