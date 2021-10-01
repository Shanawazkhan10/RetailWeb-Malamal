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
        state.holding.holdinglist?.map(
          (holding: IHolding) =>
            (state.holding.totalInvestMent =
              state.holding.totalInvestMent + Number(holding.prc))
        );
      }
    },
    HoldingUpdate: (state, action) => {
      if (state.holding.holdinglist !== undefined) {
        const depth = action.payload;
        state.holding.holdinglist.forEach((holding: IHolding) => {
          var curentvalue = 0;
          if (holding.tok1 == depth.tk && depth.name == "sf") {
            if (depth.ltp != undefined) {
              holding.ltp = depth.ltp;
              holding.pnl = String(Number(holding.ltp) - Number(holding.prc));
              holding.curval = String(
                Number(holding.ltp) * Number(holding.hldQty)
              );
              curentvalue += Number(holding.curval);
              holding.netchg = String(
                ((Number(holding.ltp) - Number(holding.prc)) * 100) /
                  Number(holding.prc)
              );
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
