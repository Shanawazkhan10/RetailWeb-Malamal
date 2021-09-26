import React, { useState } from "react";
import Popup from "reactjs-popup";
import { api } from "../../../../app/api";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IContractSearch } from "../../../../types/IContractSearch";
import { IContractSearchReq } from "../../../../types/IContractSearchReq";
import { IUpdateWatchlist } from "../../../../types/WatchList/IUpdateWatchList";
import { SubUnsubReq, userWS } from "../../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  waitForSocketConnection,
} from "../../../WebSocket/HSSocket1";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
} from "../../OrderEntry/orderEntrySlice";
import { chartContainer } from "../mainContainerSlice";
import MarketPicture from "../MarketPicture/MarketPicture";
import {
  ShowDepthFromPosition,
  ShowDepthFromSearch,
} from "../MarketPicture/MarketPictureSlice";
import {
  setNewWatchlistSymbol,
  UpdateWatchlist,
} from "../MarketWatch/MarketWatchSlice";

const SmartSearch = (props: { Type: Number }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [cursor, setCursor] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [Result, setResult] = useState<IContractSearch[]>([]);

  const WatchList = useAppSelector((state) => state.marketwatch.marketWatch);
  let selectedList: number;
  selectedList = WatchList.nSelectedWatchList;
  let selectlistname: string;
  selectlistname = WatchList.sSelectedWatchList;
  let scriptList: string;
  if (selectedList != undefined && WatchList.MarketWatchList.length > 0) {
    scriptList = WatchList.MarketWatchList[selectedList].scrips;
  }

  const nIsOpenFrom = props.Type;
  const onDepthClick = (data: IContractSearch) => {
    //e.preventDefault();
    //dispatch(searchDepthContainer());
    dispatch(ShowDepthFromSearch(data.exseg + "|" + data.omtkn));
    clearSearch();
    //Dummy call for fetch
    //dispatch(UpdateTokenInfo(GetSymbolDetails()));
    //dispatch(UpdateTokenInfo(SubscribeMarketDepth(0, 0)));
    //dispatch(updateMarketDepth(SubscribeMarketDepth(0, 0)));
  };

  function onBuyOrderEntryClick(e: any) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(openBuyOrderEntry());
  }
  function onSellOrderEntryClick(e: any) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(openSellOrderEntry());
  }
  function onChartClick(e: any) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(chartContainer());
  }

  const onAddClick = (data: IContractSearch, e: any, addType: number) => {
    e.preventDefault();
    e.stopPropagation();
    clearSearch();
    if (addType == 2) {
      return;
    }

    if (props.Type == 1) {
      let newscript: string[] = []; // DM: To fetch[TODO]
      let newscrips: string = "";
      newscript.push(data.exseg + "|" + data.omtkn);
      if (WatchList.MarketWatchList.length >= selectedList) {
        newscrips = WatchList.MarketWatchList[selectedList].scrips;
        newscrips = newscrips + "," + newscript;
      } else {
        newscrips = newscript[0]; //DM: new added symbol will be always first
        selectlistname = selectlistname;
      }

      const ReqUpdateData: IUpdateWatchlist = {
        mwName: selectlistname,
        scrips: newscrips,
      };

      dispatch(UpdateWatchlist(ReqUpdateData, user.sessionKey, 1));

      //subscribe Script API Call
      const subUnsubReq: SubUnsubReq = {
        type: "mws",
        scrips: data.exseg + "|" + data.omtkn.replaceAll(",", "&"),
        channelnum: 1,
      };

      let req = JSON.stringify(subUnsubReq);
      waitForSocketConnection(userWS, function () {
        sendUnsubReq(subUnsubReq);
      });
    } else if (props.Type == 2) {
      dispatch(ShowDepthFromPosition(data.exseg + "|" + data.omtkn));
      clearSearch();
    } else if (props.Type == 3) {
      let newScrip = data.exseg + "|" + data.omtkn;

      // const RequestData: INewWatchList = {
      //   scrips: newScrip,
      //   symbol: data.usym,
      // };

      //dispatch(onNewWatchList(RequestData));

      dispatch(setNewWatchlistSymbol(newScrip));
    }
    //dispatch(AddToWatchList(contractSearch));
  };

  // search world trading data for available stock symbols that match the search input
  const search = async (val: string) => {
    if (val.length < 3) {
      setResult([]);
      return;
    }
    //API Call
    const ContractSearchReq: IContractSearchReq = {
      //limit: 10,
      search_type: "all",
      keyword: val,
      allowed_exchange: [
        "nse_cm",
        "nse_fo",
        "mcx_fo",
        "bse_cm",
        "bse_fo",
        "cde_fo",
      ],
    };
    //var result: any = dispatch(FetchSearch(ContractSearchReq));
    //const asd: IContractSearch[] = SearchSymbol(ContractSearchReq);
    //setResult(result);
    await api
      .post(
        "https://uathsdiscovery.hypertrade.in/htpl/search/symbol",
        JSON.stringify(ContractSearchReq),
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "x-access-token": user.sessionKey,
            "api-key": "UzL0HZiHPTc1rNVr",
          },
        }
      )
      .then((response) => setResult(response.data.data))

      .catch((error) => error);
  };

  // handles changes to the search input
  const handleSearchChange = (e: any) => {
    search(e.target.value);
    setSearchValue(e.target.value);
  };

  // clears the search input and sets cursor value back to 0
  const clearSearch = () => {
    setSearchValue("");
    setCursor(0);
  };

  function ClearResult(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setSearchValue("");
    setCursor(0);
  }

  // handles behavior of Up, Down, Return, Escape & Delete keys while using the search dropdown
  const handleSearchKeyDowns = (e: any) => {
    //const { cursor, searchResults, searchValue } = state;
    // Up Arrow -- navigate up
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
      // Down Arrow -- navigate down
    } else if (e.keyCode === 40 && cursor < Result.length - 1) {
      setCursor(cursor + 1);
      // Return -- select symbol & show details
    } else if (e.keyCode === 13) {
      e.preventDefault();
      //handleQuoteChange();
      clearSearch();
      // Esc -- clear search and reset cursor
    } else if (
      e.keyCode === 27 ||
      // Delete -- reset cursor when value is empty
      (e.keyCode === 8 && searchValue.length <= 1)
    ) {
    }
  };
  return (
    <>
      <div className="input-group slideInDown-element" id="search">
        <div>
          <span>
            <img src="images/search.svg" />
          </span>
        </div>
        <input
          type="text"
          className="searchForm__text"
          placeholder="Search & Add"
          value={searchValue}
          onChange={(e) => handleSearchChange(e)}
          onKeyDown={handleSearchKeyDowns}
          style={{ color: "black" }}
          onBlur={(e) => ClearResult(e)}
        />
        <div className="listingnum">
          <span>15</span>/<span>50</span>
        </div>
      </div>
      {/* if the search input value is not empty show the clear button */}{" "}
      {/* {searchValue !== "" && (
      //   <button
      //     className="searchForm__clear"
      //     onClick={(e) => {
      //       e.preventDefault();
      //       clearSearch();
      //     }}
      //   >
      //     clear
      //   </button>
      // )} */}
      {/* if the search results and search input value are not empty show this dropdown */}
      {Result != null && searchValue !== "" && (
        <div className="search-results" style={{ display: "block" }}>
          <table
            id="searchwatchlist"
            className="table table-borderless search-results"
            style={{ display: "table" }}
          >
            <tbody>
              {Result.map((result, i) => {
                //const { symbol, name } = result;
                return (
                  <tr
                    key={i}
                    className={
                      "slideInDown-element" +
                      (scriptList != undefined &&
                      scriptList.indexOf(result.exseg + "|" + result.omtkn) < 0
                        ? ""
                        : " watchlistadded")
                    }
                    onClick={(e) => {
                      onAddClick(
                        result,
                        e,
                        scriptList != undefined &&
                          scriptList.indexOf(
                            result.exseg + "|" + result.omtkn
                          ) < 0
                          ? 1 //New Entry
                          : 2
                      ); //Already Added);
                    }}
                    // style={{ cursor: "pointer" }}
                  >
                    <td style={{ width: "50%" }}>
                      <h4>{result.tsym.toString().split("-")[0]}</h4>
                      <p>{result.symdes}</p>
                    </td>
                    <td style={{ width: "50%" }} className="search-box">
                      <p
                        className={result.exseg.includes("NSE") ? "nse" : "bse"}
                      >
                        {result.exseg}
                      </p>
                      <div className="watchlistbox">
                        <button
                          type="button"
                          className="btn btn-primary wbuy"
                          onClick={(e) => onBuyOrderEntryClick(e)}
                        >
                          B
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary wsell"
                          onClick={(e) => onSellOrderEntryClick(e)}
                        >
                          S
                        </button>
                        {/* <button
                        type="button"
                        className="btn btn-primary wmarketdepth"
                        onMouseDown={(e) => onDepthClick(result)}
                      ></button> */}

                        <Popup
                          trigger={
                            // <a
                            //   className="dropdown-item"
                            //   href="#"
                            //   data-toggle="modal"
                            //   data-target="#SChartModal"
                            // >
                            //   <img src="images/watchlist/delete.svg" /> Delete
                            //   watchlist
                            // </a>

                            <button
                              type="button"
                              className="btn btn-primary wmarketdepth"
                              data-toggle="modal"
                              data-target="#SChartModal"
                              onClick={(e) => onDepthClick(result)}
                            ></button>
                          }
                        >
                          <MarketPicture
                            script={result.exseg == "NSE" + "|" + result.omtkn}
                            Token={result.omtkn}
                            IsShow={true}
                            Type={2}
                            symbolExg={
                              result.tsym.toString().split("-")[0] +
                              "|" +
                              result.exseg
                            }
                          ></MarketPicture>
                        </Popup>

                        <button
                          type="button"
                          className="btn btn-primary wchart"
                          data-toggle="modal"
                          data-target="#SChartModal"
                          onMouseDown={(e) => onChartClick(e)}
                        ></button>
                        <button
                          type="button"
                          className="btn btn-primary searchadd"
                          style={{
                            backgroundImage:
                              scriptList != undefined &&
                              scriptList.indexOf(
                                result.exseg + "|" + result.omtkn
                              ) < 0
                                ? "url(images/add.svg) center center no-repeat #ffffff"
                                : "url(images/tick.svg) center center no-repeat #ffffff",
                            backgroundColor:
                              (result.exseg == scriptList) != undefined &&
                              scriptList.indexOf(
                                result.exseg + "|" + result.omtkn
                              ) < 0
                                ? "#00c707"
                                : "#9e9e9e",
                          }}
                          onClick={(e) =>
                            onAddClick(
                              result,
                              e,
                              scriptList != undefined &&
                                scriptList.indexOf(
                                  result.exseg + "|" + result.omtkn
                                ) < 0
                                ? 1 //New Entry
                                : 2 //Already Added
                            )
                          }
                        ></button>
                      </div>
                    </td>
                  </tr>

                  // <ul
                  //   className={
                  //     cursor === i
                  //       ? "searchForm__result active"
                  //       : "searchForm__result"
                  //   }
                  //   key={i}
                  //   // use onMouseDown instead of onClick because it fires before onBlur
                  //   // onMouseDown={() => {
                  //   //   console.log(result);
                  //   // }}
                  //   // onMouseDown={() => {
                  //   //   onAddClick(result);
                  //   // }}
                  //   style={{ cursor: "pointer" }}
                  // >
                  //   <li>
                  //     <div id="divLeftV" className="container_mw mw_team1">
                  //       <div className="overlay_mw">
                  //         {scriptList != undefined &&
                  //         scriptList.indexOf(result.exseg + "|" + result.omtkn) <
                  //           0 ? (
                  //           <button
                  //             className=" btn_buy"
                  //             title="Add"
                  //             onClick={() => onAddClick(result)}
                  //           >
                  //             +
                  //           </button>
                  //         ) : (
                  //           <button className=" btn_buy" title="Added"></button>
                  //         )}

                  //         {/* <button
                  //             className=" btn_buy"
                  //             title="Chart(C )"
                  //             onMouseDown={onChartClick}
                  //           >
                  //             C
                  //           </button>
                  //           <button
                  //             className=" btn_buy"
                  //             title="BUY"
                  //             onMouseDown={onBuyOrderEntryClick}
                  //           >
                  //             B
                  //           </button>
                  //           <button
                  //             className=" btn_sell"
                  //             title="SELL"
                  //             onMouseDown={onSellOrderEntryClick}
                  //           >
                  //             S
                  //           </button>
                  //           <button
                  //             className=" btn_sell"
                  //             title="Depth"
                  //             onMouseDown={(e) => onDepthClick(result)}
                  //           >
                  //             D
                  //           </button> */}
                  //       </div>

                  //       <div className="divLeftV_in">
                  //         <div className="mysymbolname">
                  //           <span id="spnsymbol">{result.tsym}</span>
                  //           <br />
                  //         </div>
                  //       </div>
                  //       <span
                  //         style={{ display: "none" }}
                  //         className="mw_hold"
                  //         id="spnPositionTakenLeftV"
                  //       ></span>
                  //     </div>
                  //   </li>
                  // </ul>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SmartSearch;
