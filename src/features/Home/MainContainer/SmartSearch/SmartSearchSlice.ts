import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContractSearch } from "../../../../types/IContractSearch";

const InitialSearch: IContractSearch[] = [];

const smartsearch = createSlice({
  name: "smartsearch",
  initialState: {
    searchResult: InitialSearch,
  },
  reducers: {
    SearchContractSuccess(state, action) {
      state.searchResult = action.payload;
    },
  },
});

export default smartsearch.reducer;

export const { SearchContractSuccess } = smartsearch.actions;
