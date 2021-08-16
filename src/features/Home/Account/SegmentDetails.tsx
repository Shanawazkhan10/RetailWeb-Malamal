import "./SegmentDetailsStyle.css";
import { getProfileSummary } from "../../../app/api";
import { OnProfileSummarySuccess } from "../PersonalDetails/PersonalDetailsSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect } from "react";
import { RootState } from "../../../store/store";

const SegmentDetails = () => {
  const dispatch = useAppDispatch();

  const enumSegments = {
    NSE: false,
    BSE: false,
    NFO: false,
    BFO: false,
    NCD: false,
    BCD: false,
  };

  const UserDetails = useAppSelector(
    (state: RootState) => state.personalContainer
  );

  const userSegments = UserDetails.userDetailsState.Segments.split(",");

  useEffect(() => {
    dispatch(OnProfileSummarySuccess(getProfileSummary()));
  }, []);
  return (
    <div
      className="profile-info segment-activation"
      style={{ marginLeft: "30px", display: "block" }}
    >
      <h1>Manage segments</h1> <br />
      <div>
        <br />
        <div id="form_segment_manage" className="row">
          <div className="six columns">
            <div className="segments-active">
              <div className="edit-segment-fields">
                <div className="edit-bank-fields">
                  <div className="manage-segment-box">
                    <label
                      className="segment-name"
                      style={{ marginRight: "250px", fontSize: "20px" }}
                    >
                      NSE - Equity
                    </label>

                    <label className="switch">
                      <input
                        type="checkbox"
                        title="NSE-EQ"
                        placeholder="NSEEQ"
                        checked={enumSegments.NSE}
                        style={{ width: "5px" }}
                      />
                      <div className="slider round"></div>
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="edit-segment-fields">
                <div className="edit-bank-fields">
                  <div className="manage-segment-box">
                    <label
                      className="segment-name"
                      style={{ marginRight: "250px", fontSize: "20px" }}
                    >
                      BSE - Equity
                    </label>
                    <label className="switch">
                      <input
                        className="switch"
                        type="checkbox"
                        title="BSE-EQ"
                        placeholder="BSEEQ"
                        checked={enumSegments.BSE}
                        style={{ width: "5px" }}
                      />
                      <div className="slider round"></div>
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="edit-segment-fields">
                <div className="edit-bank-fields">
                  <div className="manage-segment-box">
                    <label
                      className="segment-name"
                      style={{ marginRight: "145px", fontSize: "20px" }}
                    >
                      NSE - Futures & Options
                    </label>
                    <label className="switch">
                      <input
                        className="switch"
                        type="checkbox"
                        title="NSE-FO"
                        placeholder="NSEFO"
                        style={{ width: "5px" }}
                      />
                      <div className="slider round"></div>
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="edit-segment-fields">
                <div className="edit-bank-fields">
                  <div className="manage-segment-box">
                    <label
                      className="segment-name"
                      style={{ marginRight: "150px", fontSize: "20px" }}
                    >
                      BSE - Futures & Options
                    </label>
                    <label className="switch">
                      <input
                        className="switch"
                        type="checkbox"
                        title="BSE-FO"
                        placeholder="BSEFO"
                        style={{ width: "5px" }}
                      />
                      <div className="slider round"></div>
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="edit-segment-fields">
                <div className="edit-bank-fields">
                  <div className="manage-segment-box">
                    <label
                      className="segment-name"
                      style={{ marginRight: "137px", fontSize: "20px" }}
                    >
                      NSE - Currency Exchange
                    </label>
                    <label className="switch">
                      <input
                        className="switch"
                        type="checkbox"
                        title="NSE-CD"
                        placeholder="NSECD"
                        style={{ width: "5px" }}
                      />
                      <div className="slider round"></div>
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="edit-segment-fields">
                <div className="edit-bank-fields">
                  <div className="manage-segment-box">
                    <label
                      className="segment-name"
                      style={{ marginRight: "140px", fontSize: "20px" }}
                    >
                      BSE - Currency Exchange
                    </label>
                    <label className="switch">
                      <input
                        className="switch"
                        type="checkbox"
                        title="BSE-CD"
                        placeholder="BSECD"
                        style={{ width: "5px" }}
                      />
                      <div className="slider round"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-blue">
          Continue
        </button>
      </div>
      <br />
    </div>
  );
};

export default SegmentDetails;
