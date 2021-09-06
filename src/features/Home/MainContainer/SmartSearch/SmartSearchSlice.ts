import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchSymbol } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IContractSearch } from "../../../../types/IContractSearch";
import { IContractSearchReq } from "../../../../types/IContractSearchReq";

const InitialSearch: IContractSearch[] = [];

const smartsearch = createSlice({
  name: "smartsearch",
  initialState: {
    searchResult: InitialSearch,
  },
  reducers: {
    SearchContractSuccess(state, action) {
      state.searchResult = action.payload.data;
    },
    SearchContractError(state, action) {},
  },
});

export default smartsearch.reducer;

export const { SearchContractSuccess, SearchContractError } =
  smartsearch.actions;

export const FetchSearch =
  (ContractSearchReq: IContractSearchReq): AppThunk =>
  async (dispatch) => {
    try {
      const searchResponse = await SearchSymbol(ContractSearchReq);
      dispatch(SearchContractSuccess(searchResponse));
    } catch (err: any) {
      dispatch(SearchContractError(err.toString()));
    }
  };
