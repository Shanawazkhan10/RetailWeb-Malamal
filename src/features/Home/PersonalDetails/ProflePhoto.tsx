import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  passwordChangeContainer,
  OnProfileSummarySuccess,
} from "./PersonalDetailsSlice";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { getProfileSummary } from "../../../app/api";

const ProfilePhoto = () => {
  const dispatch = useAppDispatch();

  const UserDetails = useAppSelector(
    (state: RootState) => state.personalContainer
  );

  function OnOpenPassword() {
    dispatch(passwordChangeContainer());
  }
  return (
    <div className="profile-pic" style={{ width: "650px", height: "250px" }}>
      <h3
        className="mt-5 mb-5"
        style={{
          float: "left",
          marginBottom: "30px",
          marginRight: "400px",
          marginLeft: "15px",
          fontSize: "20px",
        }}
      >
        Profile
      </h3>

      <div
        className="Password"
        style={{
          marginBottom: "10px",
          marginTop: "30px",
        }}
      >
        <a
          href="#"
          className="passwordsecurity"
          onClick={OnOpenPassword}
          style={{
            display: "inline-block",
            color: "orange",
          }}
        >
          Password & Security
        </a>
      </div>
      <div
        className="avatar-upload"
        style={{
          marginLeft: "0px",
          marginTop: "25px",
          marginBottom: "20px",
          marginRight: "0px",
        }}
      >
        <div className="avatar-preview">
          <div id="imagePreview">
            <img src=""></img>
          </div>
        </div>
      </div>

      <div
        className="context-menu-button"
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        <a href="#">Change photo</a>
      </div>
      <div className="ten columns">
        <h2
          className="full-name"
          style={{
            position: "relative",
            fontSize: "15px",
          }}
        >
          {UserDetails.userDetailsState.FullName}
        </h2>
      </div>
    </div>
  );
};

export default ProfilePhoto;
