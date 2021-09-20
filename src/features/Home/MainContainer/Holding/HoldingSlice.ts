import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, getHolding } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IHolding,IHoldingSate } from "../../../../types/Holding/IHolding";

const InitialHolding ={
  holdinglist:[],
  totalInvestMent:0.00,  
  currentValue:0.00,
  daysPandL:0.00,
  daysPandLPercent:0.00,
  totalPandL:0.00,
  totalPandLPercent:0.00,
}as IHoldingSate;

const holding = createSlice({
  name: "holding",
  initialState: {
    holding: InitialHolding
  },
  reducers: {
    HoldingSuccess: (state, action) => {
      state.holding.holdinglist = action.payload.hldVal;
      {state.holding.holdinglist?.map((holding: IHolding) => (
        state.holding.totalInvestMent = (state.holding.totalInvestMent + Number(holding.prc))
      ))}
    },
    HoldingUpdate: (state, action: PayloadAction<string>) => {
      // state.holding = state.holding.map((el) =>
      //   el.Token == action.payload.Token ? action.payload : el
      // );
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
