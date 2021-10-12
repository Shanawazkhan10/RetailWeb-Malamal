import { createSlice } from "@reduxjs/toolkit";
import { api, getNetposition } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { NetpositionSummary } from "../../../../types/INetpositionSummary";
import { INetPosition } from "./../../../../types/INetposition";

// interface NetpositionState {
//   //isLoading: boolean;
//   //error: string | null;
//   NetpositionList: Netposition[] | null;
// }

// const NetpositionInitialState: NetpositionState = {
//   //isLoading: false,
//   //error: null,
//   NetpositionList: [],
// };

const InitialNetposition: INetPosition[] = [];

// const InitialNetposition: NetpositionSummary = {
//     Invested: null,
//     Current: null,
//     PL: null,
//     Netposition: [],
// };

const netposition = createSlice({
  name: "netposition",
  initialState: {
    netposition: InitialNetposition,
  },
  reducers: {
    NetpositionSuccess: (state, action) => {
      state.netposition = action.payload.data;
    },
    NetpositionUpdate(state, action) {
      const depth = action.payload;
      if (state.netposition !== undefined) {
        state.netposition.forEach((netposition: INetPosition) => {
          if (netposition.tok == depth.tk && depth.name == "sf") {
            if (depth.ltp != undefined) {
              netposition.ltp = depth.ltp;
              netposition.NetQty =
                Number(netposition.flBuyQty) - Number(netposition.flSellQty);

              if (netposition.NetQty != 0) {
                netposition.AvgPrice =
                  netposition.NetQty > 0
                    ? Math.abs(
                        Number(netposition.buyAmt) - Number(netposition.sellAmt)
                      ) / Math.abs(netposition.NetQty)
                    : Math.abs(
                        Number(netposition.sellAmt) - Number(netposition.buyAmt)
                      ) / Math.abs(netposition.NetQty);

                netposition.PnL =
                  (Number(netposition.ltp) - Number(netposition.AvgPrice)) *
                  netposition.NetQty;

                //netposition.Change = depth.cng;
                netposition.Change =
                  netposition.NetQty > 0
                    ? ((Number(netposition.ltp) -
                        Number(netposition.AvgPrice)) /
                        Number(netposition.AvgPrice)) *
                      100
                    : ((Number(netposition.AvgPrice) -
                        Number(netposition.ltp)) /
                        Number(netposition.AvgPrice)) *
                      100;
              } else {
                netposition.AvgPrice = 0;
                netposition.PnL = 0;
              }
            }
          }
        });
      }
    },
  },
});

export default netposition.reducer;

export const { NetpositionSuccess, NetpositionUpdate } = netposition.actions;

export const fetchNetposition =
  (sessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const positionResponse = await getNetposition(sessionKey);
      dispatch(NetpositionSuccess(positionResponse));
    } catch (err) {
      //dispatch(TradeError(err.toString()));
    }
  };
