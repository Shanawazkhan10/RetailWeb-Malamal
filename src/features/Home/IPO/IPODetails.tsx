const IPODetails = () => {
  return (
    <div className="section table-section">
      <h2>Ongoing IPOs</h2>
      <div>
        <table className="challenge-table ofs-table ipo-table">
          <thead>
            <tr>
              <td className="text-left">Instrument</td>
              <td className="text-left">Start date</td>
              <td className="text-left">End date</td> <td>Price range</td>
              <td>Minimum qty.</td>
              <td>&nbsp;</td> <td>&nbsp;</td>
            </tr>
          </thead>
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
                <span className="closed-flag">Closed</span>
              </td>
              <td>
                <a href="">
                  <span className="icon icon-chevron-left"></span>
                  Status
                </a>
              </td>
            </tr>
            <tr className="timeline timeline0">
              <td data-colspan="7">
                <div className="ipo-timeline">
                  <div className="span past">
                    <div className="pin"></div>
                    <p className="label">Offer start</p>
                    <p className="value">2021-08-12</p>
                  </div>
                  <div className="span past">
                    <div className="pin"></div>
                    <p className="label">Offer end</p>
                    <p className="value">2021-08-17</p>
                  </div>
                  <div className="span active past">
                    <div className="pin"></div>
                    <p className="label">Allotment finalisation</p>
                    <p className="value">2021-08-20</p>
                  </div>
                  <div className="span">
                    <div className="pin"></div>
                    <p className="label">Refund initiation</p>
                    <p className="value">2021-08-23</p>
                  </div>
                  <div className="span">
                    <div className="pin"></div>
                    <p className="label">Demat transfer</p>
                    <p className="value">2021-08-24</p>
                  </div>
                  <div className="span">
                    <div className="pin"></div> <p className="label">Listing</p>
                    <p className="value">2021-08-25</p>
                  </div>
                  <div className="span">
                    <div className="pin"></div>
                    <p className="label">Mandate end</p>
                    <p className="value">2021-09-01</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPODetails;
