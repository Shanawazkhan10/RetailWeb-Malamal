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
            <h1>
              {Number(marginState.marginData.CollateralValue) -
                Number(marginState.marginData.MarginUsed)}
            </h1>
          </div>
          <div className="equitytxt">
            <p>Margin Available</p>
            <p>
              Margin Used <span>{marginState.marginData.MarginUsed}</span>
            </p>
            <p>
              Opening Balance{" "}
              <span>{marginState.marginData.CollateralValue}</span>
            </p>
          </div>
          <div className="equitybtn">
            <a href="#">
              <img src="" />
              View Statement
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Margin;
