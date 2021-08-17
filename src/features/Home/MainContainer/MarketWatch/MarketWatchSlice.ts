import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, GetWatchListSymbolDetails } from "../../../../app/api";
import { IMarketDepth } from "../../../../types/IMarketDepth";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IMarketWatchList } from "../../../../types/IMarketWatchList";
import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import { IRemoveFromWatch } from "../../../../types/IRemoveFromWatch";

const InitialMarketWatch: IMarketWatchList = {
  MarketWatchList: [],
  nSelectedWatchList: 0,
  bIsBind: false,
};

const marketwatchSlice = createSlice({
  name: "marketwatch",
  initialState: {
    marketWatch: InitialMarketWatch,
  },
  reducers: {
    getMarketWatchSuccess(state, action) {
      state.marketWatch.MarketWatchList = action.payload;
      state.marketWatch.bIsBind = true;
      state.marketWatch.nSelectedWatchList = 1;
      // state.marketWatch.MarketWatchList.map(
      //   (row, i) => GetWatchListSymbolDetails(i + 1, row.scrips) //DUmmy Call for actual call send token info
      // );
    },
    ChangeWatchList(state, action) {
      state.marketWatch.nSelectedWatchList = action.payload;
      // state.marketWatch.bIsBind = true;
    },
    DeleteWatchList(state, action) {
      //state.marketWatch.nSelectedWatchList = 1;
      state.marketWatch.MarketWatchList =
        state.marketWatch.MarketWatchList.filter(
          (row) => row.id != action.payload
        );
    },
    AddToWatchList(state, action) {
      state.marketWatch.MarketWatchList.concat(action.payload);
    },
    RenameWatchList(state, action) {
      state.marketWatch.MarketWatchList =
        state.marketWatch.MarketWatchList.filter(
          (row) => row.id == action.payload
        );
    },
    UpdateSymbolDetails(state, action) {
      let TokenInfo: IMarketWatchTokenInfo[] = action.payload;
      if (TokenInfo != undefined)
        state.marketWatch.MarketWatchList[TokenInfo[0].mwId - 1].SymbolList =
          TokenInfo;
      // state.marketWatch.MarketWatchList[2].SymbolList = TokenInfo;
      // state.marketWatch.MarketWatchList[3].SymbolList = TokenInfo;
      // state.marketWatch.MarketWatchList[4].SymbolList = TokenInfo;
      // state.marketWatch.MarketWatchList[5].SymbolList = TokenInfo;
    },
    getMarketDepthSuccess(state, action) {
      let MarketDepth: IMarketDepth = action.payload;
      if (MarketDepth != undefined)
        state.marketWatch.MarketWatchList[MarketDepth.id - 1].SymbolList[
          MarketDepth.index
        ].marketDepth = action.payload;
    },
    RemoveSymbolFromWatchlist(state, action: PayloadAction<IRemoveFromWatch>) {
      state.marketWatch.MarketWatchList[action.payload.id].scrips =
        action.payload.scrips;
    },
  },
});

export default marketwatchSlice.reducer;
export const {
  getMarketWatchSuccess,
  ChangeWatchList,
  DeleteWatchList,
  AddToWatchList,
  RenameWatchList,
  UpdateSymbolDetails,
  getMarketDepthSuccess,
  RemoveSymbolFromWatchlist,
} = marketwatchSlice.actions;

export const fetchmarketWatch = () => async (dispatch: any) => {
  try {
    await api
      .get<IMarketWatchList[]>("/users")
      .then((response) => dispatch(getMarketWatchSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};
