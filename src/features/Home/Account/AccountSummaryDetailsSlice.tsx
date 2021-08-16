import { createSlice } from "@reduxjs/toolkit";
import { start } from "repl";

interface IAccountContainer {
  rightContainer: number;
}

const initialState = {
  rightContainer: 0,
} as IAccountContainer;

const accountSummarySlice = createSlice({
  name: "AccountSummaryContainer",
  initialState,
  reducers: {
    AccountDetailsContainer: (state) => {
      state.rightContainer = 0;
    },
    BankContainer: (state) => {
      state.rightContainer = 1;
    },
    SegmentContainer: (state) => {
      state.rightContainer = 2;
    },
    DematDetailsContainer: (state) => {
      state.rightContainer = 3;
    },
    DocumentContainer: (state) => {
      state.rightContainer = 4;
    },
  },
});

export const {
  AccountDetailsContainer,
  BankContainer,
  SegmentContainer,
  DematDetailsContainer,
  DocumentContainer,
} = accountSummarySlice.actions;

export default accountSummarySlice.reducer;
