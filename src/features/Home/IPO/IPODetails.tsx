import CSS from "csstype";

const TimeLineStyle: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
  width: "979",
  height: "103",
  marginBottom: "10px",
  marginLeft: "250px",
};

const SpanPastStyle: CSS.Properties = {
  display: "inline-block",
  width: "150px",
  textAlign: "center",
  marginTop: "10px",
  verticalAlign: "top",
  marginRight: "30px",
};

const IPODetails = () => {
  return (
    <div className="page-container challenge-content">
      <h1>
        <span className="icon icon-file-text"></span>
        IPO
        <p className="text-right float-right">
          <a href="https://zerodha.com/ipo" target="_blank">
            Check upcoming IPOs
          </a>
        </p>
      </h1>
      <hr className="header-hr" />
      <br />
      <div className="notice text-box yellow">
        <ul>
          <li>
            <span>
              IPO window will remain open from 10 AM till 4:30 PM on trading
              days. You can accept the UPI mandate request till noon one day
              after the IPO window closes. If you don't receive the UPI request
              till the end of the day due to delays from the bank, please delete
              and apply again.
            </span>
          </li>
          <li>
            <span>
              If you're facing issues applying for the IPO using UPI, you can
              also apply through ASBA from your netbanking portal.
              <a href="https://support.zerodha.com/category/console/ipo/articles/apply-for-ipo-without-upi">
                Learn more
              </a>
              .
            </span>
          </li>
        </ul>
      </div>
      <br />
      <div className="section table-section">
        <h2>Ongoing IPOs</h2>
        <br />
        <div>
          <table className="challenge-table ofs-table ipo-table">
            <thead>
              <tr>
                <td className="text-left">Instrument</td>
                <td className="text-left">Start date</td>
                <td className="text-left">End date</td> <td>Price range</td>
                <td>Minimum qty.</td> <td>&nbsp;</td> <td>&nbsp;</td>
              </tr>
            </thead>
            <br />
            <tbody className="">
              <tr>
                <td className="text-left">DUDIGITAL</td>
                <td className="text-left">
                  <span>2021-08-12</span>
                </td>
                <td className="text-left">
                  <span>2021-08-17</span>
                </td>
                <td>
                  <span>65 - 65</span>
                </td>
                <td>2000</td>
                <td>
                  <span
                    className="closed-flag"
                    style={{
                      textTransform: "uppercase",
                      fontSize: ".6875rem",
                      padding: "3px 11px",
                      borderRadius: "2px",
                      position: "relative",
                      display: "inline",
                      lineHeight: "1.7",
                      textAlign: "center",
                      color: "#666",
                      backgroundColor: "#eee",
                      marginLeft: "5px",
                    }}
                  >
                    Closed
                  </span>
                </td>
                <td>
                  <a
                    href=""
                    style={{ color: "#0059c1", textDecoration: "none" }}
                  >
                    <span className="icon icon-chevron-down"></span>
                    Status
                  </a>
                </td>
              </tr>
              <tr
                className="timeline timeline0"
                style={{ display: "table-row" }}
              >
                <td data-colspan="7">
                  <div className="ipo-timeline" style={TimeLineStyle}>
                    <div className="span past" style={SpanPastStyle}>
                      <div
                        className="pin"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          border: "4px solid #0059c1",
                          position: "relative",
                          left: "calc(50% - 10px)",
                        }}
                      ></div>
                      <p
                        className="label"
                        style={{
                          marginTop: "15px",
                          marginBottom: "0",
                          color: "#0059c1",
                        }}
                      >
                        Offer start
                      </p>
                      <p
                        className="value"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                      >
                        2021-08-12
                      </p>
                    </div>
                    <div className="span past" style={SpanPastStyle}>
                      <div
                        className="pin"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          border: "4px solid #0059c1",
                          position: "relative",
                          left: "calc(50% - 10px)",
                        }}
                      ></div>
                      <p
                        className="label"
                        style={{
                          marginTop: "15px",
                          marginBottom: "0",
                          color: "#0059c1",
                        }}
                      >
                        Offer end
                      </p>
                      <p
                        className="value"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                      >
                        2021-08-17
                      </p>
                    </div>
                    <div className="span" style={SpanPastStyle}>
                      <div
                        className="pin"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          border: "4px solid #0059c1",
                          position: "relative",
                          left: "calc(50% - 10px)",
                        }}
                      ></div>
                      <p
                        className="label"
                        style={{
                          marginTop: "15px",
                          marginBottom: "0",
                          color: "#0059c1",
                        }}
                      >
                        Allotment finalisation
                      </p>
                      <p
                        className="value"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                      >
                        2021-08-20
                      </p>
                    </div>
                    <div className="span" style={SpanPastStyle}>
                      <div
                        className="pin"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          border: "4px solid #0059c1",
                          position: "relative",
                          left: "calc(50% - 10px)",
                        }}
                      ></div>
                      <p
                        className="label"
                        style={{
                          marginTop: "15px",
                          marginBottom: "0",
                          color: "#0059c1",
                        }}
                      >
                        Refund initiation
                      </p>
                      <p
                        className="value"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                      >
                        2021-08-23
                      </p>
                    </div>
                    <div className="span" style={SpanPastStyle}>
                      <div
                        className="pin"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          border: "4px solid #0059c1",
                          position: "relative",
                          left: "calc(50% - 10px)",
                        }}
                      ></div>
                      <p
                        className="label"
                        style={{
                          marginTop: "15px",
                          marginBottom: "0",
                          color: "#0059c1",
                        }}
                      >
                        Demat transfer
                      </p>
                      <p
                        className="value"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                      >
                        2021-08-24
                      </p>
                    </div>
                    <div className="span" style={SpanPastStyle}>
                      <div
                        className="pin"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          border: "4px solid #0059c1",
                          position: "relative",
                          left: "calc(50% - 10px)",
                        }}
                      ></div>
                      <p
                        className="label"
                        style={{
                          marginTop: "15px",
                          marginBottom: "0",
                          color: "#0059c1",
                        }}
                      >
                        Listing
                      </p>
                      <p
                        className="value"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                      >
                        2021-08-25
                      </p>
                    </div>
                    <div className="span" style={SpanPastStyle}>
                      <div
                        className="pin"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          border: "4px solid #0059c1",
                          position: "relative",
                          left: "calc(50% - 10px)",
                        }}
                      ></div>
                      <p
                        className="label"
                        style={{
                          marginTop: "15px",
                          marginBottom: "0",
                          color: "#0059c1",
                        }}
                      >
                        Mandate end
                      </p>
                      <p
                        className="value"
                        style={{ marginBottom: "10px", marginTop: "5px" }}
                      >
                        2021-09-01
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="section">
        <h2 className="ipo-history-head">
          Bids history
          <div
            className="ipo-history-chevron"
            data-balloon="View historical bids"
            data-balloon-pos="up"
          >
            <span className="icon icon-chevron-down"></span>
          </div>
        </h2>
        <hr />
      </div>
    </div>
  );
};

export default IPODetails;
