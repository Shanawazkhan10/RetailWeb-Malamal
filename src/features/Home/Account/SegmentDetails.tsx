import "./SegmentDetailsStyle.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect, useReducer, useState } from "react";
import { RootState } from "../../../store/store";
import Popup from "reactjs-popup";
import UpdateSegment from "./UpdateSegment";
import {
  SetSegmentCheck,
  SetSegmentDetails,
  GetEnumName,
} from "./SegmentDetailsSlice";
import { enumSegments } from "../../../Constants/enumSegments";
import { act } from "react-dom/test-utils";

const SegmentDetails = () => {
  const [btnflag, Setbtnflag] = useState(false);
  const [btndisableflag, Setdisableflag] = useState(true);

  const dispatch = useAppDispatch();

  const UserDetails = useAppSelector(
    (state: RootState) => state.personalContainer
  );

  const userSegments = UserDetails.userDetailsState.Segments.split(",");

  dispatch(() => SetSegmentDetails(userSegments));

  function GetStatus(value: string) {
    var flag = dispatch(() => SetSegmentCheck(value));
    return flag;
  }

  var activateSegments: Array<string> = [];
  var deActivateSegments: Array<string> = [];

  function handleChange(e: any) {
    var segmentName = GetEnumName(e.target.value);

    if (e.target.checked) {
      if (userSegments.some((element) => element == segmentName)) {
        deActivateSegments.splice(deActivateSegments.indexOf(segmentName), 1);
      } else {
        activateSegments.push(segmentName);
      }
    } else {
      if (userSegments.some((element) => element == segmentName)) {
        deActivateSegments.push(segmentName);
      } else {
        activateSegments.splice(activateSegments.indexOf(segmentName), 1);
      }
    }

    if (activateSegments.length > 0 || deActivateSegments.length > 0) {
      Setdisableflag(false);
    } else {
      Setdisableflag(true);
    }
  }

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
                        value="NSE - Equity"
                        onChange={handleChange}
                        defaultChecked={GetStatus("NSE")}
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
                        value="BSE - Equity"
                        onChange={handleChange}
                        defaultChecked={GetStatus("BSE")}
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
                        value="NSE - Future & Options"
                        onChange={handleChange}
                        defaultChecked={GetStatus("NFO")}
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
                        value="BSE - Future & Options"
                        onChange={handleChange}
                        placeholder="BSEFO"
                        defaultChecked={GetStatus("BFO")}
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
                        value="NSE - Currency"
                        onChange={handleChange}
                        defaultChecked={GetStatus("NCD")}
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
                        defaultChecked={GetStatus("BCD")}
                        value="BSE - Currency"
                        onChange={handleChange}
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
        <br />

        <Popup
          trigger={
            <button
              type="button"
              id="btnUpdateSegments"
              className="btn btn-blue"
              onClick={() => Setbtnflag(true)}
              style={{ color: "blue" }}
              disabled={btndisableflag}
            >
              Continue
            </button>
          }
          position="center center"
        >
          <div
            className="modal-container"
            style={{
              width: "800px",
              height: "300px",
              color: "#444",
              margin: "0 auto",
              maxWidth: "100%",
              maxHeight: "100vh",
              background: "#fff",
              padding: "20px 40px",
              position: "relative",
              border: "1px solid #ddd",
              boxShadow: "2px 2px 0 #f3f3f3",
              boxSizing: "border-box",
            }}
          >
            <UpdateSegment
              addsegments={activateSegments}
              removesegments={deActivateSegments}
            />
          </div>
        </Popup>
      </div>
      <br />
    </div>
  );
};

export default SegmentDetails;
