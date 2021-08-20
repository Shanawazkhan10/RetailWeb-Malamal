import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import "../../style.css";
import {
  AddToWatchList,
  DeleteWatchList,
  RenameWatchList,
} from "./MarketWatchSlice";

const MarketWatchHeader = () => {
  const [sName, setName] = useState("");
  let selectedList: number;
  const WatchList = useSelector((state: RootState) => state.marketwatch);
  selectedList = WatchList.marketWatch.nSelectedWatchList;
  const dispatch = useAppDispatch();
  function RemoveWatchList() {
    dispatch(DeleteWatchList(selectedList)); //API Call
    WatchList.marketWatch.nSelectedWatchList = 1;
  }

  function handleChange(event: any) {
    setName(event.target.value);
  }

  function SaveWatchList() {
    dispatch(AddToWatchList(setName)); //API Call
  }

  function EditWatchList() {
    //setName("12345");
    //dispatch(RenameWatchList(setName)); //API Call
  }
  return (
    <div className="mw_headnew">
      {/*<h1>
        <span>market Watch</span>
         <button id="mw_sort" title="Sort Market Watch">
          SORT
        </button> 
      </h1>*/}
      <input
        type="text"
        id="txtWatchlist"
        placeholder="Search for a symbol"
        onChange={(e) => handleChange}
        value={sName}
      ></input>
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
