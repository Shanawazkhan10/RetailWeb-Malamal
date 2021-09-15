import { useSelector } from "react-redux";
import { Progress } from "reactstrap";

import { RootState } from "../../../../store/store";

const Position = () => {
  function onprogress() {}
  const NetpositionList = useSelector((state: RootState) => state.netposition);

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="row slideInDown-element">
          <div className="col-md-12">
            <img src="images/positions.svg" /> <span>Positions</span>
          </div>
          {/* {NetpositionList.netposition &&
          NetpositionList.netposition.length > 0 ? ( */}
          <div className="col-md-12 positions mt-4" id="bar-graph">
            <div className="row">
              <div className="col-md-6">
                <Progress
                  className="flex-row-reverse"
                  value="100"
                  min="0"
                  max="100"
                ></Progress>
                {/* <div
                    className="progress-bar"
                    role="progressbar"
                    data-aria-valuenow="1"
                    data-aria-valuemin="0"
                    data-aria-valuemax="100"
                    style={{ width: "100%" }}
                  ></div> */}
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
                <Progress value="50" min="0" max="100"></Progress>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Progress
                  className="flex-row-reverse"
                  value="40"
                  min="0"
                  max="100"
                ></Progress>
              </div>
              <div className="col-md-6">
                <p>INFY</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Progress
                  className="flex-row-reverse"
                  value="20"
                  min="0"
                  max="100"
                ></Progress>
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
                <Progress
                  className="c-red"
                  value="100"
                  min="0"
                  max="100"
                ></Progress>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <Progress
                  className="flex-row-reverse"
                  value="70"
                  min="0"
                  max="100"
                ></Progress>
              </div>
              <div className="col-md-6">
                <p>DOWN JONES</p>
              </div>
            </div>
          </div>
          {/* ) : (
            <div className="plate fadeIn-element">
              <div className="row slideInDown-element">
                <div>
                  <p>You don't have any positions yet</p>
                </div>
                <br />
                <button type="button" className="button-blue">
                  Get started
                </button>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Position;
