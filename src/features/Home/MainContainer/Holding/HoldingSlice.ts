import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHolding } from "../../../../types/IHolding";
import { api, getHolding } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";

const InitialHolding: IHolding[] = [];

const holding = createSlice({
  name: "holding",
  initialState: {
    holding: InitialHolding,
  },
  reducers: {
    HoldingSuccess: (state, action) => {
      state.holding = action.payload;
    },
    HoldingUpdate: (state, action) => {
      state.holding = state.holding.map((el) =>
        el.Token == action.payload.Token ? action.payload : el
      );
    },
    HoldingError: (state, action) => {
      state.holding = action.payload;
    },
  },
});

export default holding.reducer;

export const { HoldingSuccess, HoldingError, HoldingUpdate } = holding.actions;

export const fetchHolding = (): AppThunk => async (dispatch) => {
  try {
    const holdingResponse = await getHolding();
    dispatch(HoldingSuccess(holdingResponse));
  } catch (err) {
    dispatch(HoldingError(err.toString()));
  }
};
