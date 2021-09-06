import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export const PasswordSecurity = () => {
  function OnPaswordChanged() {
    alert("Done");
  }

  return (
    <div className="edit-profile-form">
      <h1> Account security </h1>
      <br />
      <br />
      <div className="row">
        <div className="five columns">
          <form style={{ display: "block" }}>
            <div className="form-header">
              <h2>Change password</h2>
            </div>
            <br />
            <div className="su-input-group">
              <label className="su-input-label su-dynamic-label">
                Current password
              </label>
              <br />
              <br />
              <input
                type="password"
                placeholder="Current password"
                aria-label="Current password"
                maxLength={30}
                style={{ width: "250px" }}
              />
            </div>{" "}
            <br />
            <div
              className="su-radio-group row change-type"
              style={{ display: "inline-flex" }}
            >
              <div className="su-radio-wrap">
                <input
                  type="radio"
                  aria-label="Change password"
                  style={{ border: "strong", marginRight: "30px" }}
                />
                <span></span>
                <label className="su-radio-label">Change password</label>
              </div>

              <div className="su-radio-wrap" style={{ marginLeft: "30px" }}>
                <input type="radio" aria-label="Change PIN" />
                <span></span>
                <label className="su-radio-label">Change PIN</label>
              </div>
            </div>
            <br />
            <br />
            <div>
              <div className="su-input-group">
                <label className="su-input-label su-dynamic-label">
                  New password
                </label>
                <br />
                <br />
                <input
                  type="password"
                  placeholder="New password"
                  style={{ width: "250px" }}
                />
              </div>
              <br />

              <div className="su-input-group">
                <label className="su-input-label su-dynamic-label">
                  Confirm new password
                </label>
                <br />
                <br />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  style={{ width: "250px" }}
                />
              </div>
            </div>
            <p className="actions">
              <button
                type="submit"
                className="button"
                style={{
                  width: "50px",
                  height: "30px",
                  marginRight: "15px",
                  color: "blue",
                }}
              >
                <span>Submit</span>
              </button>

              <button
                type="button"
                className="button button-outline cancel"
                style={{ width: "50px", height: "30px", color: "blue" }}
              >
                <span>Cancel</span>
              </button>
            </p>
          </form>
        </div>
        <div className="one columns"></div>
      </div>{" "}
      <br />
    </div>
  );
};
