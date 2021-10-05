import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, getHolding } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IHolding, IHoldingSate } from "../../../../types/Holding/IHolding";

const InitialHolding = {
  holdinglist: [],
  totalInvestMent: 0.0,
  currentValue: 0.0,
  daysPandL: 0.0,
  daysPandLPercent: 0.0,
  totalPandL: 0.0,
  totalPandLPercent: 0.0,
} as IHoldingSate;

const holding = createSlice({
  name: "holding",
  initialState: {
    holding: InitialHolding,
  },
  reducers: {
    HoldingSuccess: (state, action) => {
      state.holding.holdinglist = action.payload.hldVal;
      {
        state.holding.totalInvestMent = 0;
        state.holding.holdinglist?.map((holding: IHolding) => {
          if (holding.prc != undefined) {
            if (Number(holding.prc) > 0) {
              holding.avg = String(
                Number(holding.prc) * Number(holding.hldQty)
              );
            }
          }
          if (holding.avg != undefined) {
            state.holding.totalInvestMent =
              state.holding.totalInvestMent + Number(holding.avg);
          }
          // state.holding.currentValue =
          //   state.holding.currentValue + Number(holding.curval);
        });
      }
    },
    HoldingUpdate: (state, action) => {
      if (state.holding.holdinglist !== undefined) {
        const depth = action.payload;
        state.holding.holdinglist.forEach((holding: IHolding) => {
          if (holding.tok1 == depth.tk && depth.name == "sf") {
            if (depth.ltp != undefined) {
              holding.ltp = Number(depth.ltp).toFixed(2);
              holding.pnl = String(
                parseFloat(
                  String(
                    parseFloat(holding.ltp) * parseFloat(holding.hldQty) -
                      parseFloat(holding.prc) * parseFloat(holding.hldQty)
                  )
                ).toFixed(2)
              );
              holding.curval = String(
                parseFloat(
                  String(parseFloat(holding.ltp) * parseFloat(holding.hldQty))
                ).toFixed(2)
              );

              holding.netchg = String(
                parseFloat(
                  String(
                    ((Number(holding.ltp) - Number(holding.prc)) * 100) /
                      Number(holding.prc)
                  )
                ).toFixed(2)
              );

              if (depth.nc != undefined) holding.daychgperc = depth.nc;
              if (depth.cng != undefined) holding.daychg = depth.cng;
              state.holding.currentValue = 0;
              state.holding.currentValue =
                state.holding.currentValue + Number(holding.curval);
              state.holding.daysPandL = 0;
              //                state.holding.daysPandL - Number(holding.daychg);
              state.holding.daysPandLPercent = 0;
              //state.holding.daysPandLPercent + Number(holding.daychgperc);
              state.holding.totalPandL = 0;
              //state.holding.totalPandL + Number(holding.pnl);
              state.holding.totalPandLPercent = 0;
              //state.holding.totalPandLPercent + Number(holding.netchg);
            } else {
              holding.ltp = "0";
              holding.pnl = "0";
              holding.daychg = "0";
            }
          }
        });
      }
    },
    HoldingError: (state, action) => {
      state.holding = action.payload;
    },
  },
});

export default holding.reducer;

export const { HoldingSuccess, HoldingError, HoldingUpdate } = holding.actions;

export const fetchHolding =
  (sessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const holdingResponse = await getHolding(sessionKey);
      dispatch(HoldingSuccess(holdingResponse));
    } catch (err: any) {
      dispatch(HoldingError(err.toString()));
    }
  };
