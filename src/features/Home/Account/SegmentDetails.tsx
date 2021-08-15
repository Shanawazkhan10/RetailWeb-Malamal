import "./SegmentDetailsStyle.css";

const SegmentDetails = () => {
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
                      style={{ marginRight: "150px" }}
                    >
                      NSE - Equity
                    </label>

                    <label className="switch">
                      <input
                        type="checkbox"
                        title="NSE-EQ"
                        placeholder="NSEEQ"
                        style={{ width: "5px" }}
                      />
                      <div
                        className="slider"
                        style={{
                          height: "35px",
                          borderRadius: "10px",
                        }}
                      ></div>
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
                      style={{ marginRight: "150px" }}
                    >
                      BSE - Equity
                    </label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        title="BSE-EQ"
                        placeholder="BSEEQ"
                        style={{ width: "5px" }}
                      />
                      <div
                        className="slider"
                        style={{
                          height: "35px",
                          borderRadius: "10px",
                        }}
                      ></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="segments-active">
              <div className="edit-segment-fields">
                <div className="edit-bank-fields">
                  <div className="manage-segment-box">
                    <label
                      className="segment-name"
                      style={{ marginRight: "80px" }}
                    >
                      NSE - Futures &amp; Options
                    </label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        title="NSE-EQ"
                        placeholder="NSEEQ"
                        style={{ width: "5px" }}
                      />
                      <div
                        className="slider"
                        style={{
                          height: "35px",
                          borderRadius: "10px",
                        }}
                      ></div>
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
                      style={{ marginRight: "80px" }}
                    >
                      BSE - Futures &amp; Options
                    </label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        title="BSE-EQ"
                        placeholder="BSEEQ"
                        style={{ width: "5px" }}
                      />
                      <div
                        className="slider"
                        style={{
                          height: "35px",
                          borderRadius: "10px",
                        }}
                      ></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="segments-active">
              <div className="edit-segment-fields">
                <div className="edit-bank-fields">
                  <div className="manage-segment-box">
                    <label
                      className="segment-name"
                      style={{ marginRight: "70px" }}
                    >
                      NSE - Currency Exchange
                    </label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        title="NSE-CD"
                        placeholder="NSECD"
                        style={{ width: "5px" }}
                      />
                      <div
                        className="slider"
                        style={{
                          height: "35px",
                          borderRadius: "10px",
                        }}
                      ></div>
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
                      style={{ marginRight: "70px" }}
                    >
                      BSE - Currency Exchange
                    </label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        title="BSE-CD"
                        placeholder="BSECD"
                        style={{ width: "5px" }}
                      />
                      <div
                        className="slider"
                        style={{
                          height: "35px",
                          borderRadius: "10px",
                        }}
                      ></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="segments-active">
              <div className="edit-segment-fields">
                <label className="segment-name" style={{ marginRight: "50px" }}>
                  Commodity account
                </label>
                <div className="su-switch-group">
                  <input id="MCX" type="checkbox" className="su-switch" />
                  <label className="switch">
                    <input
                      type="checkbox"
                      title="MCX"
                      placeholder="MCX"
                      style={{ width: "5px" }}
                    />
                    <div
                      className="slider"
                      style={{
                        height: "35px",
                        borderRadius: "10px",
                      }}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
            <br />
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
