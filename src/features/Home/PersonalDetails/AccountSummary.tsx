// font-weight: "300"; color: "rgb(156, 39, 176)""; line-height: "26px"}}
const AccountSummary = () => {
  return (
    <div
      className="page-container profile-content"
      style={{ width: "1100px", height: "1500px" }}
    >
      <h1>Account</h1>
      <br />
      <br />
      <div className="section">
        <div
          className="row"
          style={{
            display: "inline-flex",
            width: "700px",
            height: "40px",
          }}
        >
          <div className="four columns profile-avatar-container">
            <div id="avatar-22" className="profile-avatar">
              <div
                className="avatar"
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  textAlign: "center",
                  verticalAlign: "middle",
                  backgroundColor: "rgba(156,39,176,0.1)",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "rgb(156,39,176)",
                  lineHeight: "75px",
                }}
              >
                <span>DA</span>
              </div>
            </div>
            <div className="profile-name">
              <label>Name</label>
              <span></span>
              <h3>Deep Amit Mehta</h3>
            </div>
          </div>
          <div id="profile_client_id" className="two columns">
            <label>Client ID</label>
            <span></span>
            <h3>PF7937</h3>
          </div>
          <span></span>
          <div className="two columns" style={{ marginLeft: "30px" }}>
            <label>CKYC no.</label>
            <h3>10095635008625</h3>
          </div>
        </div>
      </div>

      <div
        id="profile_basic"
        className="section"
        style={{ marginTop: "100px" }}
      >
        <div className="row profile-container">
          <div className="eight columns">
            <div className="profile-info personal">
              <h1>Personal</h1> <br />{" "}
              <div className="row">
                <div className="six columns">
                  <label>
                    E-mail
                    <div
                      className="edit-email"
                      data-balloon="Edit e-mail"
                      data-balloon-pos="up"
                    >
                      <span className="icon icon-edit"></span>
                    </div>{" "}
                  </label>{" "}
                  <h3>MDEEP859@GMAIL.COM</h3>
                </div>{" "}
                <div className="six columns">
                  <label>
                    Mobile
                    <div
                      className="edit-mobile"
                      data-balloon="Edit mobile"
                      data-balloon-pos="up"
                    >
                      <span className="icon icon-edit"></span>
                    </div>{" "}
                  </label>{" "}
                  <h3>*4140</h3>
                </div>
              </div>{" "}
              <div className="row">
                <div className="six columns">
                  <label>PAN</label> <h3>*554L</h3>
                </div>
              </div>{" "}
              <div className="row"> </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
