const SegmentDetails = () => {
  return (
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
          Activate or deactivate trading segments on your account. Once a
          segment is deactivated, it cannot be activated for the next 12 hours.{" "}
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
                    <label className="segment-name"> NSE - Equity </label>
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
                    <label className="segment-name">Commodity account</label>{" "}
                    <div className="su-switch-group">
                      <input id="MCX" type="checkbox" className="su-switch" />{" "}
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
  );
};

export default SegmentDetails;
