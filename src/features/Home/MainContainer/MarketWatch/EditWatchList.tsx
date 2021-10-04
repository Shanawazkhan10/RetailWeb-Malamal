import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { RootState } from "../../../../store/store";
import { IRenameWatchlist } from "../../../../types/IRenameWatchlist";
import { RenameWatchlist } from "./MarketWatchSlice";
import CSS from "csstype";

// const CloseModal: CSS.Properties = { display: "none" };
// const ShowModal: CSS.Properties = { display: "block", paddingRight: "4px" };

const EditWatchListComp = () => {
  const dispatch = useAppDispatch();

  const [showList, setList] = useState(true);
  const user = useAppSelector((state) => state.user);
  const sSelectedWatchList = useSelector(
    (state: RootState) => state.marketwatch.marketWatch.sSelectedWatchList
  );
  const [sName, setName] = useState(sSelectedWatchList);
  function handleChange(event: any) {
    setName(event.target.value);
  }

  function SendRenameWatchList(e: any) {
    e.preventDefault();
    //setName(evt.target.value);
    const RenameReq: IRenameWatchlist = {
      oldmwName: sSelectedWatchList,
      newmwName: sName, //from input control
      userId: user.UserId,
    };
    //API Call TO rename watch list
    dispatch(RenameWatchlist(RenameReq, user.sessionKey));
    //dispatch(RenameWatchList(RenameWatchlist(Input))); //API Call

    setList(false);
  }
  return showList ? (
    <div
      className="modal fade show"
      id="EditWModal"
      data-tabindex="-1"
      role="dialog"
      style={{ display: "block", paddingRight: "4px" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Watchlist name
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="col">
              <form>
                <div className="form">
                  <input
                    type="text"
                    id="userid"
                    className="form__input"
                    onChange={handleChange}
                    value={sName}
                  />

                  <label data-for="userid" className="form__label">
                    Watchlist Name
                  </label>
                  <span className="icon-inside">
                    <i className="far fa-envelope"></i>
                  </span>
                </div>
                <div className="form">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 submitbtn"
                    onClick={(e) => SendRenameWatchList(e)}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default EditWatchListComp;
