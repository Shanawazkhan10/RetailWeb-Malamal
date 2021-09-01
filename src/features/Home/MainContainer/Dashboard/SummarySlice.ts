import { createSlice } from "@reduxjs/toolkit";
import { getSummaryData } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";

const InitialSummaryState = {
  SummaryList: [],
};

const SummarySlice = createSlice({
  name: "summary",
  initialState: {
    summaryData: InitialSummaryState,
  },
  reducers: {
    OnTopGainers: (state, action) => {
      state.summaryData.SummaryList = action.payload.data;
    },
  },
});

export default SummarySlice.reducer;
export const { OnTopGainers } = SummarySlice.actions;

export const FetchGainer =
  (SessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const SummaryData = await getSummaryData(SessionKey);
      dispatch(OnTopGainers(SummaryData));
    } catch (err) {
      //dispatch(onMarketWatchFailure(err.toString()));
    }
  };
