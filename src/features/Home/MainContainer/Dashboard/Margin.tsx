import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { FetchMargin } from "./MarginSlice";

const Margin = () => {
  const dispatch = useAppDispatch();

  const userState = useAppSelector((state) => state.user);
  const marginState = useAppSelector((state) => state.margin);

  useEffect(() => {
    dispatch(FetchMargin(userState.sessionKey));
  }, []);

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="slideInDown-element">
          <img src="images/equity.svg" /> <span>Equity</span>
          <div>
            <h1>159.25</h1>
          </div>
          <div className="equitytxt">
            <p>Margin Available</p>
            <div className="row">
              <div className="col-md-9">
                <p>Margin Used</p>
              </div>
              <div className="col-md-3">
                <span>8.85</span>
              </div>
              <div className="col-md-9">
                <p>Opening Balance</p>
              </div>
              <div className="col-md-3">
                <span>168.1</span>
              </div>
            </div>
          </div>
          <div className="equitybtn"><a href="#"><img src="images/eye-web.svg"/>View Statement</a></div>
        </div>
      </div>
    </div>
  );
};

export default Margin;
