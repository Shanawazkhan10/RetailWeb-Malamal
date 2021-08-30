const Summary = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="row slideInDown-element">
          <div className="col-md-8">
            <img src="images/equity-summary.svg" /> <span>Equity Summary</span>
          </div>
          <div className="col-md-4 text-right">
            <span>
              <img src="images/filter.svg" />
            </span>
          </div>
          <div className="col-md-12">
            <div className="equity-summary">
              <div className="toptxt">
                <p>Top Gainers</p>
              </div>
              <table className="table table-responsive table-borderless">
                <thead>
                  <tr>
                    <th>Stock Name</th>
                    <th>Change ₹</th>
                    <th>Change %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HDFC</td>
                    <td>399.75</td>
                    <td>8.85%</td>
                  </tr>
                  <tr>
                    <td>HINDUNILVR</td>
                    <td>400.03</td>
                    <td>4.23%</td>
                  </tr>
                  <tr>
                    <td>INFY</td>
                    <td>221.42</td>
                    <td>23.8%</td>
                  </tr>
                  <tr>
                    <td>ONGC</td>
                    <td>123.52</td>
                    <td>2.83%</td>
                  </tr>
                  <tr>
                    <td>TCS</td>
                    <td>423.54</td>
                    <td>7.43%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
