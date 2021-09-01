import { createSlice } from "@reduxjs/toolkit";
import { getUserMargin } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IMargin } from "../../../../types/IMargin";

const InitialMarginState: IMargin = {
  MarginUsed: "",
};

const MarginSlice = createSlice({
  name: "margin",
  initialState: {
    marginData: InitialMarginState,
  },
  reducers: {
    OnTopGainers: (state, action) => {
      state.marginData = action.payload.data;
    },
  },
});

export default MarginSlice.reducer;
export const { OnTopGainers } = MarginSlice.actions;

export const FetchMargin =
  (SessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const MarginData = await getUserMargin(SessionKey);
      dispatch(OnTopGainers(MarginData));
    } catch (err) {
      //dispatch(onMarketWatchFailure(err.toString()));
    }
  };
