import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { IDeleteWatchlist } from "../../../../app/IDeleteWatchlist";
import { RootState } from "../../../../store/store";
import { IRenameWatchlist } from "../../../../types/IRenameWatchlist";
import { IUpdateWatchlist } from "../../../../types/WatchList/IUpdateWatchList";
import "../../style.css";
import SmartSearch from "../SmartSearch/SmartSearch";
import {
  DeleteWatchlist,
  RenameWatchlist,
  UpdateWatchlist,
} from "./MarketWatchSlice";

const MarketWatchHeader = () => {
  const [sName, setName] = useState("");

  const UserId = useSelector((state: RootState) => state.user.UserId);
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

      userId: UserId,
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
      // userid: UserId,
    };

    dispatch(UpdateWatchlist(UpdateReq));
    //dispatch(AddToWatchList(setName)); //API Call
  }

  function EditWatchList() {
    const RenameReq: IRenameWatchlist = {
      oldmwName: sSelectedWatchList,
      newmwName: sName, //from input control
      id: Number(nSelectedWatchList),
      userId: UserId,
    };
    //API Call TO rename watch list
    dispatch(RenameWatchlist(RenameReq));
  }
  return (
    <div className="mw_headnew">
      <SmartSearch Type={1}></SmartSearch>
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
