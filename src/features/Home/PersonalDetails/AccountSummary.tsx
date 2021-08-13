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
        style={{ marginTop: "300px" }}
      >
        <span className="open-side-nav show-inline-on-mobile">
          ☰ View all categories
        </span>
        <div className="row profile-container">
          <div id="mobile-side-nav" className="four columns">
            <a
              href="javascript:void(0)"
              className="close-side-nav show-on-mobile"
            >
              ×
            </a>
            <div className="profile-list personal">Personal</div>{" "}
            <div className="active profile-list bank">Bank</div>{" "}
            <div className="profile-list demat">Demat</div>{" "}
            <div className="profile-list segment-activation">Segments</div>{" "}
            <div className="profile-list documents">Documents</div>{" "}
            <div className="profile-list comm-clasify">
              Commodity declaration
            </div>
          </div>{" "}
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
            <div className="profile-info segment-activation">
              <h1>
                Manage segments
                <a
                  href="https://support.zerodha.com/category/trading-and-markets/nudge/killswitch/articles/what-is-the-kill-switch"
                  className="segment-kill-icon"
                ></a>
              </h1>{" "}
              <br />{" "}
              <div>
                <p className="text-grey">
                  Activate or deactivate trading segments on your account. Once
                  a segment is deactivated, it cannot be activated for the next
                  12 hours.{" "}
                  <a href="https://support.zerodha.com/category/trading-and-markets/nudge/killswitch/articles/what-is-the-kill-switch">
                    Learn more
                  </a>
                  .
                </p>
                <br />
                <div id="form_segment_manage" className="row">
                  <div className="six columns">
                    <div className="segments-active">
                      <div className="edit-segment-fields">
                        <div className="edit-bank-fields">
                          <div className="manage-segment-box">
                            <label className="segment-name">
                              {" "}
                              NSE - Equity{" "}
                            </label>
                            <div className="su-switch-group">
                              <input
                                id="NSE_EQ"
                                type="checkbox"
                                className="su-switch"
                              />
                              <label className="su-switch-control"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="edit-segment-fields">
                        <div className="edit-bank-fields">
                          <div className="manage-segment-box">
                            <label className="segment-name">BSE - Equity</label>
                            <div className="su-switch-group">
                              <input
                                id="BSE_EQ"
                                type="checkbox"
                                className="su-switch"
                              />
                              <label className="su-switch-control"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                    </div>{" "}
                    <div className="segments-active">
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields">
                        <div className="edit-bank-fields">
                          <div className="manage-segment-box">
                            <label className="segment-name">
                              NSE - Futures &amp; Options
                            </label>{" "}
                            <div className="su-switch-group">
                              <input
                                id="NSE_FO"
                                type="checkbox"
                                className="su-switch"
                              />{" "}
                              <label className="su-switch-control"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="edit-segment-fields">
                        <div className="edit-bank-fields">
                          <div className="manage-segment-box">
                            <label className="segment-name">
                              BSE - Futures &amp; Options
                            </label>{" "}
                            <div className="su-switch-group">
                              <input
                                id="BSE_FO"
                                type="checkbox"
                                className="su-switch"
                              />{" "}
                              <label className="su-switch-control"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                    </div>{" "}
                    <div className="segments-active">
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields">
                        <div className="edit-bank-fields">
                          <div className="manage-segment-box">
                            <label className="segment-name">
                              NSE - Currency Exchange
                            </label>{" "}
                            <div className="su-switch-group">
                              <input
                                id="NSE_CFX"
                                type="checkbox"
                                className="su-switch"
                              />{" "}
                              <label className="su-switch-control"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields">
                        <div className="edit-bank-fields">
                          <div className="manage-segment-box">
                            <label className="segment-name">
                              BSE - Currency Exchange
                            </label>{" "}
                            <div className="su-switch-group">
                              <input
                                id="BSE_CDS"
                                type="checkbox"
                                className="su-switch"
                              />{" "}
                              <label className="su-switch-control"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                    </div>{" "}
                    <div className="segments-active">
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields">
                        <div className="edit-bank-fields">
                          <div className="manage-segment-box">
                            <label className="segment-name">
                              Commodity account
                            </label>{" "}
                            <div className="su-switch-group">
                              <input
                                id="MCX"
                                type="checkbox"
                                className="su-switch"
                              />{" "}
                              <label className="su-switch-control"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                      <div className="edit-segment-fields"></div>
                    </div>
                    <br />
                  </div>
                </div>
                <button type="button" className="btn btn-blue">
                  Continue{" "}
                </button>
              </div>
              <br />{" "}
              <div id="pending_requests" className="pending-requests">
                <h3> Modification requests </h3>
                <div className="table-container">
                  <table className="history-table">
                    <thead>
                      <tr>
                        <td className="text-left">Category</td>
                        <td className="text-left">Status</td>
                        <td>Last updated</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">Segments</td>
                        <td className="text-left">Completed</td>
                        <td>2021-06-05 19:48:12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="profile-info demat">
              <h1>Demat</h1>
              <br />
              <label>
                {" "}
                Demat ID <br />
                <span className="text-light-grey text-small">
                  (For IPO application and CDSL TPIN authorisation)
                </span>
              </label>
              <h3>1208160026716401</h3>
              <div className="row">
                <div className="six columns">
                  <label>DP ID</label>
                  <h3>12081600</h3>
                </div>
                <div className="six columns">
                  <label>BO ID</label>
                  <h3>26716401</h3>
                </div>
              </div>
              <div className="row">
                <div className="six columns">
                  <label>Depository Participant (DP)</label>
                  <h3>Zerodha Broking Limited</h3>
                </div>
                <div className="six columns">
                  <label>Depository</label>
                  <h3>CDSL</h3>
                </div>
              </div>
            </div>
            <div className="profile-info documents">
              <h1>Documents</h1>
              <br />
              <div>
                <button type="button" className="btn btn-blue">
                  E-mail to me{" "}
                </button>
                <br />
                <br />
                <p className="text-grey">
                  <span className="icon icon-info"></span> Selected document
                  will be sent to your registered e-mail.
                </p>
              </div>
            </div>{" "}
            <div className="profile-info proofs">
              <h1>Income proof for derivatives trading</h1>{" "}
              <p className="notice-new">
                <span className="icon icon-info"></span> Financial details along
                with proofs are required to be reviewed by Brokers / Trading
                members on a periodic basis, to allow clients to continue
                trading in the derivatives segment, as per Exchange guidelines.
                Please share your financial information below so that you may
                continue trading in Equity &amp; Commodity derivatives
                seamlessly.
              </p>{" "}
              <br />{" "}
              <div>
                <form className="financial-upload-form su-input-group su-static-label inputcontainer">
                  <label className="su-input-label">Income range</label>{" "}
                  <select>
                    <option value="1">Below ₹ 1 Lac</option>{" "}
                    <option value="2">₹ 1 Lac to ₹ 5 Lacs</option>{" "}
                    <option value="3">₹ 5 Lacs to ₹ 10 Lacs</option>{" "}
                    <option value="4">₹ 10 Lacs to ₹ 25 Lacs</option>{" "}
                    <option value="5">₹ 25 Lacs to ₹ 1 Crore</option>{" "}
                    <option value="6">Above ₹ 1 Crore</option>
                  </select>{" "}
                  <div className="row">
                    <div className="four columns">
                      <label className="file-input-label">
                        Upload
                        <div
                          className="password-help"
                          data-balloon="Supported types: pdf, png, jpg, jpeg, xls, xlsx | Please provide the password if your file is protected"
                          data-balloon-pos="up"
                        >
                          <div className="icon icon-info"></div>
                        </div>
                      </label>{" "}
                      <input id="financial_proof_file" type="file" />
                      <br />
                    </div>{" "}
                    <div className="four columns">
                      <div className="file-pwd su-input-group" dynamic-label="">
                        <label className="su-input-label su-dynamic-label">
                          File password
                        </label>{" "}
                        <div className="">
                          <input type="text" placeholder="File password" />
                        </div>
                      </div>
                    </div>
                    <div className="two columns">
                      <label>&nbsp;</label>
                      <br />{" "}
                      <button type="submit" className="btn-blue">
                        Upload{" "}
                      </button>
                    </div>
                  </div>
                  <p>
                    <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/articles/financial-proof-console">
                      Need help regarding file upload?
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="profile-info mcx-classNameification">
              <h1>Commodity declaration – Type of trader</h1>
              <br />
              <div className="mcx-classNameify-form"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
