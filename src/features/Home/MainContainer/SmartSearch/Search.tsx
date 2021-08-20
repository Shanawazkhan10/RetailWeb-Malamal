import { stat } from "fs";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ContractSearch } from "../../../../app/api";
import { useAppDispatch } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IContractSearchReq } from "../../../../types/IContractSearchReq";
import AutoSuggest from "react-autosuggest";

import ReactDOM from "react-dom";
import { IContractSearch } from "../../../../types/IContractSearch";
import "../../style.css";

const Search = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<IContractSearch[]>([]);
  let test: IContractSearch[];
  // const dispatch = useAppDispatch();
  // //let item: any[];
  // const [result, setResult] = useState([]);
  // //const items = useSelector((state: RootState) => state.smartSearch);
  // const [value, setValue] = useState("");

  // const [value, setValue] = useState("");
  // const [suggestions, setSuggestions] = useState<string[]>([]);

  // handleOnSearch: (string: any, results: any) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results);
  // };

  // handleOnHover: (result: any) => {
  //   // the item hovered
  //   console.log(result);
  // };

  // handleOnSelect: (item: any) => {
  //   // the item selected
  //   console.log(item);
  // };

  // handleOnFocus: () => {
  //   console.log("Focused");
  // };

  // formatResult: (item: any) => {
  //   return item;
  //   // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  // };

  // getSuggestions: (value: string) => {
  //   //API Call
  //   const ContractSearchReq: IContractSearchReq = {
  //     limit: 10,
  //     searchType: "all",
  //     keyword: value,
  //     allowed_exchange: 1,
  //   };
  //   return ContractSearch(ContractSearchReq);
  // };

  // // Trigger suggestions
  // getSuggestionValue: (suggestion: any) => suggestion.Title;

  // // OnChange event handler
  // onChange: (newvalue: string) => {
  //   setValue(newvalue);
  // };

  // // Suggestion rerender when user types
  // onSuggestionsFetchRequested: (value: string) => {
  //   //setResult(getSuggestions(value));
  // };

  // // Triggered on clear
  // onSuggestionsClearRequested: () => {
  //   setResult([]);
  // };

  // // Option props
  // const inputProps = {
  //   placeholder: "Type movie name",
  //   value,
  //   onChange: onChange,
  // };
  function getSuggestions(value: string): IContractSearch[] {
    //API Call
    const ContractSearchReq: IContractSearchReq = {
      limit: 10,
      searchType: "all",
      keyword: value,
      allowed_exchange: 1,
    };

    return ContractSearch(ContractSearchReq);
  }

  // Render Each Option
  function renderSearch(suggestion: IContractSearch) {
    return (
      <div id="divLeftV" className="container_mw mw_team1">
        <div className="overlay_mw">
          <button className=" btn_buy" title="Delete">
            A
          </button>
          <button className=" btn_buy" title="Chart(C )">
            C
          </button>
          <button className=" btn_buy" title="BUY">
            B
          </button>
          <button className=" btn_sell" title="SELL">
            S
          </button>
        </div>

        <div className="divLeftV_in">
          <div className="mysymbolname">
            <span id="spnsymbol">{suggestion.tsym}</span>
            <br />
          </div>
        </div>
        <span
          style={{ display: "none" }}
          className="mw_hold"
          id="spnPositionTakenLeftV"
        ></span>
      </div>
    );
  }

  return (
    // <Autosuggest
    //   suggestions={result}
    //   onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    //   onSuggestionsClearRequested={onSuggestionsClearRequested}
    //   getSuggestionValue={getSuggestionValue}
    //   renderSuggestion={renderSuggestion}
    //   inputProps={inputProps}
    // />

    <div>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={(suggestion: any) => suggestion}
        renderSuggestion={(suggestion: any) => renderSearch(suggestion)}
        // renderSuggestion={(suggestion: any) => {
        //   getSuggestions;
        //}
        inputProps={{
          placeholder: "Search eg: infy bse, nify fut weekly",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
    </div>
  );
};

export default Search;
