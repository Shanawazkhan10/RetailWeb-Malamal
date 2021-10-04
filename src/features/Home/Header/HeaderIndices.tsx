import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { IGetIndicesRequest } from "../../../types/Indices/IGetIndicesRequest";
import { GetAllIndicesData, SendIndiceSubRequest } from "./IndicesSlice";

const HeaderIndices = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const idicesState = useAppSelector((state) => state.indices);
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
    <div className="marketlive">
      {idicesState.IndicesList.length > 0 && (
        <>
          {idicesState.IndicesList[0] != undefined && (
            <div className="niftymain">
              <div className="nname">{idicesState.IndicesList[0].omtkn}</div>
              <div
                className={
                  Number(idicesState.IndicesList[0].chg) > 0 ? "pgreen" : "pred"
                }
              >
                {idicesState.IndicesList[0].last}
              </div>
              <div className="mpercent">
                {idicesState.IndicesList[0].netchg}%
              </div>
            </div>
          )}
          {idicesState.IndicesList[1] != undefined && (
            <div className="sensexmain">
              <div className="nname">{idicesState.IndicesList[1].omtkn}</div>
              <div
                className={
                  Number(idicesState.IndicesList[1].netchg) > 0
                    ? "pgreen"
                    : "pred"
                }
              >
                {idicesState.IndicesList[1].last}
              </div>
              <div className="mpercent">
                {idicesState.IndicesList[1].netchg}%
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default HeaderIndices;
