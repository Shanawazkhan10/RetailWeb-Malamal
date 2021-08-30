const Position = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="row slideInDown-element">
          <div className="col-md-12">
            <img src="images/positions.svg" /> <span>Positions</span>
          </div>
          <div className="col-md-12 positions mt-4" id="bar-graph">
            <div className="row">
              <div className="col-md-6">
                <div className="progress flex-row-reverse">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-aria-valuenow="1"
                    data-aria-valuemin="0"
                    data-aria-valuemax="100"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="col-md-6">
                <p>HDFC</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="text-right">HINDUNILVR</p>
              </div>
              <div className="col-md-6 c-red">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-aria-valuenow="1"
                    data-aria-valuemin="0"
                    data-aria-valuemax="100"
                    style={{ width: "25%" }}
                    data-toggle="tooltip"
                    data-placement="right"
                  ></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress flex-row-reverse">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-aria-valuenow="1"
                    data-aria-valuemin="0"
                    data-aria-valuemax="100"
                    style={{ width: "40%" }}
                    data-toggle="tooltip"
                    data-placement="right"
                  ></div>
                </div>
              </div>
              <div className="col-md-6">
                <p>INFY</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress flex-row-reverse">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-aria-valuenow="1"
                    data-aria-valuemin="0"
                    data-aria-valuemax="100"
                    style={{ width: "20%" }}
                    data-toggle="tooltip"
                    data-placement="right"
                  ></div>
                </div>
              </div>
              <div className="col-md-6">
                <p>ONGC</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="text-right">TCS</p>
              </div>
              <div className="col-md-6">
                <div className="progress c-red">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-aria-valuenow="1"
                    data-aria-valuemin="0"
                    data-aria-valuemax="100"
                    style={{ width: "100%" }}
                    data-toggle="tooltip"
                    data-placement="right"
                  ></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="progress flex-row-reverse">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-aria-valuenow="1"
                    data-aria-valuemin="0"
                    data-aria-valuemax="100"
                    style={{ width: "70%" }}
                    data-toggle="tooltip"
                    data-placement="right"
                  ></div>
                </div>
              </div>
              <div className="col-md-6">
                <p>DOWN JONES</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p className="text-right">HDFC</p>
              </div>
              <div className="col-md-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-aria-valuenow="1"
                    data-aria-valuemin="0"
                    data-aria-valuemax="100"
                    style={{ width: "60%" }}
                    data-toggle="tooltip"
                    data-placement="right"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
