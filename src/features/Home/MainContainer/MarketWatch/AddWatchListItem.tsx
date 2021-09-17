import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IUpdateWatchlist } from "../../../../types/WatchList/IUpdateWatchList";
import SmartSearch from "../SmartSearch/SmartSearch";
import { FetchWatchListSymbol, UpdateWatchlist } from "./MarketWatchSlice";

const AddWatchListItem = (index: any) => {
  const dispatch = useAppDispatch();

  const [sName, setName] = useState("");
  const [bCloseButton, setCloseButton] = useState(false);
  //let newScript: String[] = [];

  //const newlist = useAppSelector((state) => state.addwatch.newlyaddedWatchList);
  const user = useAppSelector((state) => state.user);
  const newScript = useAppSelector(
    (state) => state.marketwatch.marketWatch.sNewWatchlistSymbol
  );
  //newScript = newlist.scrips.split(",");

  function AddNewName(event: any) {
    setName(event.target.value);
  }

  function AddWatchList() {
    // dispatch(
    //   FetchWatchListSymbol(newlist.scrips.split(","), user.sessionKey, index, 1)
    // );
    const updateWatchlist: IUpdateWatchlist = {
      mwName: sName,
      scrips: newScript,
    };
    dispatch(UpdateWatchlist(updateWatchlist, user.sessionKey, 3));
  }

  return (
    <div
      className="modal fade show"
      id="AddModal"
      data-tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-modal="true"
      style={{ display: "block", paddingRight: "4px" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Watchlist
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setCloseButton(true)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="">
              <form>
                <div className="form">
                  <input
                    type="text"
                    id="userid"
                    className="form__input"
                    data-autocomplete="off"
                    placeholder=" "
                    data-required=""
                    onChange={(e) => AddNewName(e)}
                  />
                  <label data-for="userid" className="form__label">
                    Watchlist Name
                  </label>
                  <span className="icon-inside">
                    <i className="far fa-envelope"></i>
                  </span>
                </div>
                <div className="form">
                  <div className="input-group slideInDown-element" id="search">
                    <SmartSearch Type={3}></SmartSearch>
                  </div>
                </div>

                {/* <tbody>
                  <tr className="slideInDown-element">
                    <td className="price-box">
                      {newScript != [] &&
                        newScript.map(() => (
                          <tr className="slideInDown-element">
                            <td>
                              <span>{newlist.symbol}</span>
                            </td>
                          </tr>
                        ))}
                    </td>
                  </tr>
                </tbody> */}
                <div className="form">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 submitbtn"
                    onClick={() => AddWatchList()}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWatchListItem;
