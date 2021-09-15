import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, getHolding } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IHolding } from "../../../../types/Holding/IHolding";

const InitialHolding: IHolding[] = [];

const holding = createSlice({
  name: "holding",
  initialState: {
    holding: InitialHolding,
  },
  reducers: {
    HoldingSuccess: (state, action: PayloadAction<any>) => {
      state.holding = action.payload.hldVal;
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
