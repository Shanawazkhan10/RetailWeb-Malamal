import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IUpdateWatchlist } from "../../../../types/WatchList/IUpdateWatchList";
import SmartSearch from "../SmartSearch/SmartSearch";
import { ShowNewWatchlist, UpdateWatchlist } from "./MarketWatchSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const AddWatchListItem = (index: any) => {
  const dispatch = useAppDispatch();
  const [sName, setName] = useState("");
  const user = useAppSelector((state) => state.user);
  // const { newScript, bIsNewWatchlist } = useSelector((state: RootState) => {
  //   return {
  //     newScript: state.marketwatch.marketWatch.sNewWatchlistSymbol,
  //     bIsNewWatchlist: state.marketwatch.marketWatch.bIsNewWatchlist,
  //   };
  // });
  const newScript = useSelector(
    (state: RootState) => state.marketwatch.marketWatch.sNewWatchlistSymbol
  );
  const bIsNewWatchlist = useSelector(
    (state: RootState) => state.marketwatch.marketWatch.bIsNewWatchlist
  );
  //newScript = newlist.scrips.split(",");

  function AddNewName(event: any) {
    setName(event.target.value);
  }

  function AddWatchList(event: any) {
    event.preventDefault();
    // dispatch(
    //   FetchWatchListSymbol(newlist.scrips.split(","), user.sessionKey, index, 1)
    // );
    const updateWatchlist: IUpdateWatchlist = {
      mwName: sName,
      scrips: newScript,
    };
    dispatch(UpdateWatchlist(updateWatchlist, user.sessionKey, 3));
  }

  function setCloseButton() {
    dispatch(ShowNewWatchlist(false));
  }

  return bIsNewWatchlist ? (
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
              onClick={() => setCloseButton()}
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
                    // data-autocomplete="off"
                    // placeholder=" "
                    // data-required=""
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
                    onClick={(e) => AddWatchList(e)}
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
  ) : (
    <Fragment></Fragment>
  );
};

export default AddWatchListItem;
