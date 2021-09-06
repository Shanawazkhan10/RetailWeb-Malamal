const UpcomingIPODetails = () => {
  return (
    <div id="remove_container" className="container">
      <div className="container">
        <div className="row between v-align">
          <div className="six columns text-center">
            <img className="ipo-landing" src="/static/images/ipo_blank.png" />
          </div>
          <div className="six columns">
            <h2>Apply for IPOs online</h2>
            <p className="text-grey">
              Apply online and invest in companies listing on the Indian
              exchanges with an IPO (Initial Public Offering) using mobile UPI
              with your Nuniyo account.
              <a
                target="_blank"
                href="https://zerodha.com/z-connect/console/apply-for-ipos-using-upi"
              >
                Read more
              </a>
            </p>
            <br />
            <div>
              <a
                className="button landing-acop"
                href="https://console.zerodha.com/portfolio/ipo"
              >
                Apply for an IPO
              </a>
              <br />
              <br />
              <span className="text-12 color-grey">
                Don't have a Nuniyo account?
                <a href="/open-account/?c=ZMPHKJ">Sign up</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <section id="ipo" className="mini-container">
        <h2>Upcoming IPOs</h2>
        <br />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Date</th>
                <th className="text-right">Price range</th>
                <th className="text-right">Min. qty.</th>
                <th title="Red Herring Prospectus">(D)RHP</th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <td className="name">
                  <a href="/ipo/301569/aditya-birla-sun-life-amc-limited">
                    Shriram Properties
                  </a>
                </td>
                <td className="date">To be announced</td>
                <td className="text-right">–</td>
                <td className="text-right">–</td>
                <td title="Red Herring Prospectus">–</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2
          className="closed-ipo-head"
          style={{ marginTop: "50px", marginBottom: "20px" }}
        >
          Closed IPOs
        </h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Date</th>
                <th className="text-right">Price range</th>
                <th className="text-right">Min. qty.</th>
                <th title="Red Herring Prospectus">(D)RHP</th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr className="closed">
                <td className="name">
                  <span className="hidden">2021-08-10 </span>
                  <a href="/ipo/302597/nuvovo-vistas-corporation-ltd">
                    Nuvoco Vistas Corporation Ltd
                  </a>
                </td>
                <td className="date">09 Aug 2021 – 11 Aug 2021 </td>
                <td className="text-right">560 – 570 </td>
                <td className="text-right">26 </td>
                <td title="Red Herring Prospectus">
                  <a
                    href="https://www1.nseindia.com/content/equities/IPO_RHP_NUVOCO.pdf"
                    target="_blank"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UpcomingIPODetails;
