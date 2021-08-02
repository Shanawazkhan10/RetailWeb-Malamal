import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../store/store";
import { CIQ } from "chartiq/js/componentUI";

const initialState = {
  chart: new CIQ.UI.Chart(),
  stx: null,
};

export const chartSlice = createSlice({
  name: "Chart",
  initialState,
  reducers: {
    chartInitialized: (state) => {
        state.stx= null;
    },
  },
});

export const{ chartInitialized } = chartSlice.actions;

export const selectChart = (state: RootState) => state.chart;

export default chartSlice.reducer
