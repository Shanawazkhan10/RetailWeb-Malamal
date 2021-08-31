import React, { MouseEvent, useState } from "react";
import {
  ContractSearch,
  GetSymbolDetails,
  SubscribeMarketDepth,
} from "../../../../app/api";
import { useAppDispatch } from "../../../../app/hooks";
import { IContractSearch } from "../../../../types/IContractSearch";
import { IContractSearchReq } from "../../../../types/IContractSearchReq";
import {
  openBuyOrderEntry,
  openSellOrderEntry,
} from "../../OrderEntry/orderEntrySlice";
import { chartContainer, searchDepthContainer } from "../mainContainerSlice";
import {
  ShowDepthFromSearch,
  UpdateTokenInfo,
} from "../MarketPicture/MarketPictureSlice";
import { FetchSearch } from "./SmartSearchSlice";

const Search1 = () => {
  const dispatch = useAppDispatch();
  const [cursor, setCursor] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [Result, setResult] = useState<IContractSearch[]>([]);

  const onDepthClick = () => {
    //e.preventDefault();
    //dispatch(searchDepthContainer());
    dispatch(ShowDepthFromSearch(""));
    //Dummy call for fetch
    dispatch(UpdateTokenInfo(GetSymbolDetails()));
    dispatch(UpdateTokenInfo(SubscribeMarketDepth(0, 0)));
    //dispatch(updateMarketDepth(SubscribeMarketDepth(0, 0)));
  };

  function onBuyOrderEntryClick() {
    dispatch(openBuyOrderEntry());
  }
  function onSellOrderEntryClick() {
    dispatch(openSellOrderEntry());
  }
  function onChartClick() {
    dispatch(chartContainer());
  }

  // search world trading data for available stock symbols that match the search input
  const search = (val: string) => {
    if (val.length < 3) {
      return;
    }
    //API Call
    const ContractSearchReq: IContractSearchReq = {
      limit: 10,
      searchType: "all",
      keyword: val,
      allowed_exchange: [
        "nse_cm",
        "nse_fo",
        // "mcx_fo",
        // "bse_cm",
        // "bse_fo",
        // "cde_fo",
      ],
    };
    var result: any = dispatch(FetchSearch(ContractSearchReq));
    //setResult(result);
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
      //handleQuoteChange(Result[cursor].tsym);
      clearSearch();
      // Esc -- clear search and reset cursor
    } else if (
      e.keyCode === 27 ||
      // Delete -- reset cursor when value is empty
      (e.keyCode === 8 && searchValue.length <= 1)
    ) {
      clearSearch();
    }
  };
  return (
    <div className="search-container">
      <form className="searchForm">
        <div className="searchForm__inputs">
          <input
            type="text"
            className="searchForm__text"
            placeholder="Search by symbol or name"
            value={searchValue}
            onChange={(e) => handleSearchChange(e)}
            onKeyDown={handleSearchKeyDowns}
            onBlur={clearSearch}
          />
          {/* if the search input value is not empty show the clear button */}
          {searchValue !== "" && (
            <button
              className="searchForm__clear"
              onClick={(e) => {
                e.preventDefault();
                clearSearch();
              }}
            >
              clear
            </button>
          )}
        </div>
        {/* if the search results and search input value are not empty show this dropdown */}
        {Result != null && searchValue !== "" && (
          <div className="searchForm__results">
            {Result.map((result, i) => {
              //const { symbol, name } = result;
              return (
                <ul
                  className={
                    cursor === i
                      ? "searchForm__result active"
                      : "searchForm__result"
                  }
                  key={i}
                  // use onMouseDown instead of onClick because it fires before onBlur
                  onMouseDown={() => {
                    // handleQuoteChange(symbol);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <li>
                    <div id="divLeftV" className="container_mw mw_team1">
                      <div className="overlay_mw">
                        <button className=" btn_buy" title="Add">
                          A
                        </button>
                        <button
                          className=" btn_buy"
                          title="Chart(C )"
                          onMouseDown={onChartClick}
                        >
                          C
                        </button>
                        <button
                          className=" btn_buy"
                          title="BUY"
                          onMouseDown={onBuyOrderEntryClick}
                        >
                          B
                        </button>
                        <button
                          className=" btn_sell"
                          title="SELL"
                          onMouseDown={onSellOrderEntryClick}
                        >
                          S
                        </button>
                        <button
                          className=" btn_sell"
                          title="Depth"
                          onMouseDown={onDepthClick}
                        >
                          D
                        </button>
                      </div>

                      <div className="divLeftV_in">
                        <div className="mysymbolname">
                          <span id="spnsymbol">{result.tsym}</span>
                          <br />
                        </div>
                      </div>
                      <span
                        style={{ display: "none" }}
                        className="mw_hold"
                        id="spnPositionTakenLeftV"
                      ></span>
                    </div>
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
};

export default Search1;
