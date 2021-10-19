import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostScritInfo, SearchSymbol } from "../../../../app/api";
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
    onSetScripInfo(state, action: PayloadAction<any>) {
      state.searchResult[0].tsym = action.payload.data[0].sym;
      state.searchResult[0].hprcchg = action.payload.data[0].hPrcRng;
      state.searchResult[0].lprcchg = action.payload.data[0].lPrcRng;
      state.searchResult[0].lotSz = action.payload.data[0].lotSz;
    },
  },
});

export default smartsearch.reducer;

export const { SearchContractSuccess, SearchContractError, onSetScripInfo } =
  smartsearch.actions;

export const FetchSearch =
  (ContractSearchReq: IContractSearchReq, SessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const searchResponse = await SearchSymbol(ContractSearchReq, SessionKey);
      return searchResponse.data.data;
    } catch (err) {
      dispatch(SearchContractError(err));
    }
  };
export async function FetchSymbol(scriptInfoReq: string[], sessionkey: string) {
  try {
    const scriptInfoResponse = await PostScritInfo(scriptInfoReq, sessionkey);
    return scriptInfoResponse.data[0];
  } catch (err: any) {
    console.log(err);
  }
}
