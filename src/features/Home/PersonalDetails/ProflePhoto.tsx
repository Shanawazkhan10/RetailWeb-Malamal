import React, { useState } from "react";

const ProfilePhoto = () => {
  return (
    <div className="profile-pic" style={{ width: "650px", height: "250px" }}>
      <h3 className="mt-5 mb-5"> Profile</h3>
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
          Deep Amit Mehta
        </h2>
      </div>
    </div>
  );
};

export default ProfilePhoto;
