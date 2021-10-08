import { useEffect } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { IGetIndicesRequest } from "../../../types/Indices/IGetIndicesRequest";
import { loggedout } from "../../Login/userSlice";
import { GetAllIndicesData, SendIndiceSubRequest } from "./IndicesSlice";

const HeaderIndices = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const user = useAppSelector((state) => state.user);
  const idicesState = useAppSelector((state) => state.indices);

  function OnLogout() {
    dispatch(loggedout());
    history.push("/login");
  }

  if (idicesState.isError && idicesState.code == 503) {
    OnLogout();
  }

  useEffect(() => {
    const getIndicesNiftyRequest: IGetIndicesRequest = {
      exchange_segment: "nse_cm",
      scrip_token: "nifty50",
    };
    dispatch(GetAllIndicesData(getIndicesNiftyRequest, user.sessionKey));

    const getIndicesNiftyBankRequest: IGetIndicesRequest = {
      exchange_segment: "nse_cm",
      scrip_token: "niftybank",
    };
    dispatch(GetAllIndicesData(getIndicesNiftyBankRequest, user.sessionKey));

    const indexOne = "nse_cm|Nifty 50";
    dispatch(SendIndiceSubRequest(indexOne));

    const indexTwo = "nse_cm|Nifty Bank";
    dispatch(SendIndiceSubRequest(indexTwo));
  }, []);
  return (
    <div className="marketbox border-bottom">
      {idicesState.IndicesList.length > 0 && (
        <>
          {idicesState.IndicesList[0] != undefined && (
            // <div className="niftymain">
            //   <div className="nname">{idicesState.IndicesList[0].omtkn}</div>
            //   <div
            //     className={
            //       Number(idicesState.IndicesList[0].chg) > 0 ? "pgreen" : "pred"
            //     }
            //   >
            //     {idicesState.IndicesList[0].last}
            //   </div>
            //   <div className="mpercent">
            //     {idicesState.IndicesList[0].netchg}%
            //   </div>
            // </div>
            <div id="watchlistinner-market" className="table marketlive">
              <div className="table-cell">
                <h4 className="nname">{idicesState.IndicesList[0].omtkn}</h4>
              </div>
              <div className="table-cell">
                <h4
                  className={
                    Number(idicesState.IndicesList[0].chg) > 0
                      ? "pgreen"
                      : "pred"
                  }
                >
                  {idicesState.IndicesList[0].last}
                </h4>
              </div>
              <div className="table-row nsebse">
                <div className="table-cell">
                  <h6>NSE INDEX</h6>
                </div>
                <div className="table-cell">
                  <h6 className="mpercent">
                    {idicesState.IndicesList[0].netchg}%
                  </h6>
                </div>
              </div>
            </div>
          )}
          {idicesState.IndicesList[1] != undefined && (
            <div id="watchlistinner-market" className="table marketlive2">
              <div className="table-cell">
                <h4 className="nname">{idicesState.IndicesList[1].omtkn}</h4>
              </div>
              <div className="table-cell">
                <h4
                  className={
                    Number(idicesState.IndicesList[1].chg) > 0
                      ? "pgreen"
                      : "pred"
                  }
                >
                  {idicesState.IndicesList[1].last}
                </h4>
              </div>
              <div className="table-row nsebse">
                <div className="table-cell">
                  <h6>NSE INDEX</h6>
                </div>
                <div className="table-cell">
                  <h6 className="mpercent">
                    {idicesState.IndicesList[1].netchg}%
                  </h6>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default HeaderIndices;
