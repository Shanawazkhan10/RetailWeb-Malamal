import { useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import SmartSearch from "../SmartSearch/SmartSearch";

const AddWatchListItem = () => {
  const [sName, setName] = useState("");
  const [bAddButton, setAddButton] = useState(false);

  const marketWatch = useAppSelector(
    (state) => state.addwatch.newlyaddedWatchList
  );

  function AddNewName(event: any) {
    setName(event.target.value);
  }

  function AddWatchList() {
    // const ReqData: IMarketWatch = {
    //   mwName: sName,
    //   scrips: WatchList.newScrip,
    //   id: selectedList + 1,
    //   SymbolList: WatchList.marketWatch.SymbolList,
    // };

    // dispatch(NewWatchList(ReqData));

    setAddButton(false);
  }

  return (
    <div className="modal-container" style={{}}>
      {/* {bAddButton && ( */}
      <div className="Add Watchlist">
        <input
          id="txtNewMW"
          type="text"
          className="AddWatchList"
          onChange={AddNewName}
        ></input>
        <button id="btnSave" title="Save" onClick={() => AddWatchList()}>
          Save
        </button>
        <SmartSearch Type={3}></SmartSearch>
        <tbody>
          <tr className="slideInDown-element">
            <td className="price-box">
              {marketWatch != null &&
                marketWatch.scrips.map((symbolInfo) => (
                  <tr className="slideInDown-element">
                    <td>
                      <span>{symbolInfo}</span>
                    </td>
                  </tr>
                ))}
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default AddWatchListItem;
