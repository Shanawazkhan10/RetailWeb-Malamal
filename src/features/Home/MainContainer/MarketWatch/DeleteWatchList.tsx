import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IDeleteWatchlist } from "../../../../app/IDeleteWatchlist";
import { RootState } from "../../../../store/store";
import { DeleteWatchlist } from "./MarketWatchSlice";

const DeleteWatchListComp = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  const sSelectedWatchList = useSelector(
    (state: RootState) => state.marketwatch.marketWatch.sSelectedWatchList
  );
  function RemoveWatchList() {
    const DeleteReq: IDeleteWatchlist = {
      mwName: sSelectedWatchList,
      userId: user.UserId,
    };
    dispatch(DeleteWatchlist(DeleteReq, user.sessionKey)); //API Call
  }

  return (
    <div
      className="modal fade show"
      id="DeleteCModal"
      data-tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: "block", paddingRight: "4px" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Confirmation
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
            <div className="text-center">
              <p>Are you sure you want to delete this watchlist?</p>
              <button
                type="submit"
                className="btn btn-primary w-100 submitbtn"
                onClick={RemoveWatchList}
              >
                Yes
              </button>
              <button type="submit" className="btn btn-primary w-100 submitbtn">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteWatchListComp;
