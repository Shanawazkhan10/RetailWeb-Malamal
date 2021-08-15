import editimage from "../../../assets/mw-edit.png";

const AccountDetails = () => {
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
              <img src={editimage}></img>
            </span>
          </label>
          <h3 style={{ marginBottom: "10px", marginTop: "10px" }}>
            MDEEP859@GMAIL.COM
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
              <img src={editimage}></img>
            </span>
          </label>
          <h3 style={{ marginBottom: "10px", marginTop: "10px" }}>*4140</h3>
        </div>
      </div>
      <div className="row">
        <div className="six columns" style={{ float: "left", clear: "none" }}>
          <label>PAN</label>
          <h3>*554L</h3>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
