import { input } from "@aws-amplify/ui";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { IMargin } from "../../../../types/IMargin";
import { FetchMargin } from "./MarginSlice";

const Margin = () => {
  const dispatch = useAppDispatch();

  const userState = useAppSelector((state) => state.user);
  const marginState = useAppSelector((state) => state.margin);

  useEffect(() => {
    dispatch(FetchMargin(userState.sessionKey));
  }, []);

  function fetchMarginAvailable(marginData: IMargin) {
    var inputCalc = 0;
    if (
      (marginData.CollateralValue != undefined &&
        marginData.MarginUsed != undefined) ||
      marginData.CollateralValue != ""
    ) {
      inputCalc =
        Number(marginData.CollateralValue) - Number(marginData.MarginUsed);
    } else {
      return 0;
    }

    return currDivide(inputCalc);
  }

  function currDivide(inputCalc: any) {
    var result = 0;
    if (inputCalc == "") {
      return 0;
    }

    if (inputCalc < 9999) {
      return inputCalc;
    } else if (inputCalc >= 10000 && inputCalc < 99999) {
      result = inputCalc / 10000;
      return result.toFixed(2) + " k";
    } else if (inputCalc >= 100000 && inputCalc < 999999) {
      result = inputCalc / 100000;
      return result.toFixed(2) + " lac";
    } else if (inputCalc >= 1000000 && inputCalc < 9999999) {
      result = inputCalc / 100000;
      return result.toFixed(2) + " lac";
    } else if (inputCalc >= 10000000) {
      result = inputCalc / 10000000;
      return result.toFixed(2) + " cr. ";
    }
  }

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
      <div className="plate fadeIn-element">
        <div className="slideInDown-element">
          <img src="images/equity.svg" /> <span>Equity</span>
          <div>
            <h1>
              {marginState.marginData.CollateralValue != ""
                ? String(
                    fetchMarginAvailable(marginState.marginData) != undefined
                      ? String(fetchMarginAvailable(marginState.marginData))
                      : 0
                  ).split(" ")[0]
                : 0}
              <span className="exchnage">
                {
                  String(fetchMarginAvailable(marginState.marginData)).split(
                    " "
                  )[1]
                }
              </span>
            </h1>
          </div>
          <div className="equitytxt">
            <p>Margin Available</p>
            <p>
              Margin Used <span>{marginState.marginData.MarginUsed}</span>
            </p>
            <p>
              Opening Balance
              <span>
                {currDivide(marginState.marginData.CollateralValue) != undefined
                  ? currDivide(marginState.marginData.CollateralValue)
                  : 0}
              </span>
            </p>
          </div>
          {/* <div className="equitybtn">
            <a href="#">
              <img src="" />
              View Statement
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Margin;
