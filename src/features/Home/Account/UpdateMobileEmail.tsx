const UpdateMobileEmail = () => {
  return (
    <div className="modal-body">
      <h1>Confirm update</h1>
      <br />
      <br />
      <div className="su-checkbox-group" style={{ display: "inline-flex" }}>
        <input
          type="checkbox"
          value="false"
          aria-label="chkTerm"
          placeholder="GetDetails"
          style={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            minWidth: "15px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            borderRadius: "2px",
            top: "3px",
          }}
        />
        <span></span>
        <label style={{ marginLeft: "30px" }}>
          I/We hereby declare that the email ID being updated here belongs to
          me/us. Further, I authorise XYZ. to use this to send me any
          information/alert/email. This change will affect the Trading and Demat
          account that I hold with XYZ.
        </label>
      </div>
      <br />
      <p className="notice-new">
        <span className="icon icon-info"></span>
        Updating e-mail and phone number will take up to 24 hours to reflect
        (owing to updation on exchanges and depositories)
      </p>
      <br />
      <div className="bank-secondary-edit" style={{ display: "inline-flex" }}>
        <label>Receive OTP on</label>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <div className="su-radio-group" style={{ float: "left" }}>
          <div className="su-radio-wrap" style={{ float: "left" }}>
            <input
              id="radio-36"
              type="radio"
              data-label="E-mail"
              className="su-radio"
              value="email"
            />
            <span>&nbsp;</span>
            <label data-for="radio-36" className="su-radio-label">
              E-mail
            </label>
          </div>
          <span>&nbsp;</span>
          <div className="su-radio-wrap" style={{ float: "left" }}>
            <input
              id="radio-37"
              type="radio"
              data-label="Mobile"
              className="su-radio"
              value="mobile"
            />
            <span>&nbsp;</span>
            <label data-for="radio-37" className="su-radio-label">
              Mobile
            </label>{" "}
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="text-right">
        <button
          data-disabled="disabled"
          type="button"
          className="btn btn-blue"
          style={{ color: "blue" }}
        >
          Send OTP
        </button>

        <button
          className="btn btn-blue"
          type="button"
          style={{ marginLeft: "5px", color: "blue" }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateMobileEmail;
