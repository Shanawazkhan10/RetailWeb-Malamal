import editimage from "../../../assets/mw-edit.png";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { OnProfileSummarySuccess } from "../PersonalDetails/PersonalDetailsSlice";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { getProfileSummary } from "../../../app/api";
import Popup from "reactjs-popup";
import UpdateMobileEmail from "./UpdateMobileEmail";

const AccountDetails = () => {
  const dispatch = useAppDispatch();

  const UserDetails = useAppSelector(
    (state: RootState) => state.personalContainer
  );

  useEffect(() => {
    dispatch(OnProfileSummarySuccess(getProfileSummary()));
  }, []);

  return (
    <div className="active profile-info personal">
      <h1>Personal</h1>
      <br />
      <br />
      <div className="row">
        <div className="six columns" style={{ float: "left" }}>
          <label>
            E-mail
            <span className="icon icon-edit" style={{ marginLeft: "8px" }}>
              <Popup
                trigger={<img src={editimage}></img>}
                position="center center"
              >
                <div
                  className="modal-container"
                  style={{
                    width: "700px",
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
                  <UpdateMobileEmail></UpdateMobileEmail>
                </div>
              </Popup>
            </span>
          </label>
          <h3 style={{ marginBottom: "10px", marginTop: "10px" }}>
            {UserDetails.userDetailsState.Email.toUpperCase()}
          </h3>
        </div>
        <div
          className="six columns"
          style={{
            float: "left",
            clear: "none",
            marginLeft: "50px",
            marginBottom: "10px",
          }}
        >
          <label>
            Mobile
            <span className="icon icon-edit" style={{ marginLeft: "8px" }}>
              <Popup
                trigger={<img src={editimage}></img>}
                position="center center"
              >
                <div
                  className="modal-container"
                  style={{
                    width: "700px",
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
                  <UpdateMobileEmail></UpdateMobileEmail>
                </div>
              </Popup>
            </span>
          </label>
          <h3 style={{ marginBottom: "10px", marginTop: "10px" }}>
            {UserDetails.userDetailsState.MobileNumber}
          </h3>
        </div>

        <div
          className="six columns"
          style={{
            float: "left",
            clear: "none",
            marginLeft: "50px",
            marginBottom: "10px",
          }}
        >
          <label>PAN</label>
          <h3 style={{ marginBottom: "10px", marginTop: "10px" }}>
            {UserDetails.userDetailsState.PanNumber}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
