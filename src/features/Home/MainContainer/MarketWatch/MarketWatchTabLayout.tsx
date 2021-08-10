import React, { useState } from "react";
import PropTypes from "prop-types";
import { IWatchListProps } from "../../../../types/IWatchListProps";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useAppDispatch } from "../../../../app/hooks";
import { IMarketWatchList } from "../../../../types/IMarketWatchList";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { ChangeWatchList } from "./MarketWatchSlice";
function MarketWatchTabLayout(props: { MarketWatchProps: IMarketWatch }) {
  //const [IsActive, ChangeTab] = useState(false);
  const [appState, changeState] = useState(1);
  //const dispatch = useAppDispatch();
  //const onListClicked = (e: any) => {
  // e.preventDefault();
  //ChangeTab(IsActive ? false : true);
  //dispatch(ChangeWatchList(e.currentTarget.id));
  //onListClicked(IsActive ? false : true);
  //};

  function toggleActive() {
    changeState(props.MarketWatchProps.id);
  }

  function toggleActiveStyle() {
    if (appState === props.MarketWatchProps.id) {
      return "scroll_tab_first tab_selected";
    } else {
      return "scroll_tab_first ";
    }
  }
  return (
    // <li
    //   key={props.MarketWatchProps.id}
    //   className={"scroll_tab_first" + (IsActive ? " tab_selected" : "")}
    //   style={{ display: "inline-block", zoom: "1" }}
    // >
    // <a href="" id={props.MarketWatchProps.mwName} onClick={onListClicked}>
    //     {props.MarketWatchProps.mwName}
    //   </a>
    // </li>
    <li
      key={props.MarketWatchProps.id}
      className={toggleActiveStyle()}
      style={{ display: "inline-block", zoom: "1" }}
    >
      <a
        href=""
        id={props.MarketWatchProps.mwName}
        onClick={() => toggleActive()}
      >
        {props.MarketWatchProps.mwName}
      </a>
    </li>
  );

  // tab_selected
}

export default MarketWatchTabLayout;
