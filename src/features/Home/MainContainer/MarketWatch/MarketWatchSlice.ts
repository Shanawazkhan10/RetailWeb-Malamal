import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  api,
  getWatchList,
  GetWatchListSymbolDetails,
} from "../../../../app/api";
import { IChangeWatchlist } from "../../../../types/IChangeWatchlist";
import { IDepthReq } from "../../../../types/IDepthReq";
import { IMarketDepth } from "../../../../types/IMarketDepth";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IMarketWatchList } from "../../../../types/IMarketWatchList";
import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import { IRemoveFromWatch } from "../../../../types/IRemoveFromWatch";
import { AppThunk } from "../../../../store/store";

const InitialMarketWatch: IMarketWatchList = {
  MarketWatchList: [],
  nSelectedWatchList: 1,
  sSelectedWatchList: "",
  bIsBind: false,
};

const marketwatchSlice = createSlice({
  name: "marketwatch",
  initialState: {
    marketWatch: InitialMarketWatch,
  },
  reducers: {
    onMarketWatchSuccess: (state, action) => {
      state.marketWatch.MarketWatchList = action.payload;
      state.marketWatch.bIsBind = true;
      state.marketWatch.nSelectedWatchList = 1;
      // state.marketWatch.MarketWatchList.map(
      //   (row, i) => GetWatchListSymbolDetails(i + 1, row.scrips) //DUmmy Call for actual call send token info
      // );
    },
    ChangeWatchList: (state, action: PayloadAction<IChangeWatchlist>) => {
      state.marketWatch.nSelectedWatchList = action.payload.id;
      state.marketWatch.sSelectedWatchList = action.payload.mwname;
      // state.marketWatch.bIsBind = true;
    },
    DeleteWatchList: (state, action) => {
      //state.marketWatch.nSelectedWatchList = 1;
      state.marketWatch.MarketWatchList =
        state.marketWatch.MarketWatchList.filter(
          (row) => row.id != action.payload
        );
    },
    AddToWatchList: (state, action) => {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].SymbolList.push(action.payload);
    },
    RenameWatchList: (state, action) => {
      state.marketWatch.MarketWatchList =
        state.marketWatch.MarketWatchList.filter(
          (row) => row.id == action.payload
        );
    },
    UpdateSymbolDetails: (state, action) => {
      let TokenInfo: IMarketWatchTokenInfo[] = action.payload;
      if (TokenInfo != undefined)
        state.marketWatch.MarketWatchList[TokenInfo[0].mwId - 1].SymbolList =
          TokenInfo;
      // state.marketWatch.MarketWatchList[2].SymbolList = TokenInfo;
      // state.marketWatch.MarketWatchList[3].SymbolList = TokenInfo;
      // state.marketWatch.MarketWatchList[4].SymbolList = TokenInfo;
      // state.marketWatch.MarketWatchList[5].SymbolList = TokenInfo;
    },
    getMarketDepthSuccess: (state, action) => {
      let MarketDepth: IMarketDepth = action.payload;
      if (MarketDepth != undefined)
        state.marketWatch.MarketWatchList[MarketDepth.id - 1].SymbolList[
          MarketDepth.index
        ].marketDepth = action.payload;
    },
    ShowMarketDepth: (state, action: PayloadAction<IDepthReq>) => {
      state.marketWatch.MarketWatchList[action.payload.id - 1].SymbolList[
        action.payload.index
      ].showDepth =
        !state.marketWatch.MarketWatchList[action.payload.id - 1].SymbolList[
          action.payload.index
        ].showDepth;
    },

    RemoveSymbolFromWatchlist(state, action: PayloadAction<IRemoveFromWatch>) {
      state.marketWatch.MarketWatchList[action.payload.id].scrips =
        action.payload.scrips;
    },
    showMore: (state, action: PayloadAction<number>) => {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList - 1
      ].SymbolList[action.payload].showMore = true; //Temp Watchlist Id -1 need to change
    },
    hideMore: (state, action: PayloadAction<number>) => {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList - 1
      ].SymbolList[action.payload].showMore = false; //Temp Watchlist Id -1 need to change
    },
  },
});

export default marketwatchSlice.reducer;
export const {
  onMarketWatchSuccess,
  ChangeWatchList,
  DeleteWatchList,
  AddToWatchList,
  RenameWatchList,
  UpdateSymbolDetails,
  getMarketDepthSuccess,
  RemoveSymbolFromWatchlist,
  ShowMarketDepth,
  showMore,
  hideMore,
} = marketwatchSlice.actions;

export const fetchmarketWatch =
  (cache: boolean): AppThunk =>
  async (dispatch) => {
    try {
      const MarketWatchData = await getWatchList(cache);
      dispatch(onMarketWatchSuccess(MarketWatchData));
    } catch (err) {
      console.log(err);
    }
  };

export const deletemarketWatch =
  (MarketRequestData: any): AppThunk =>
  async (dispatch) => {
    try {
      const MarketWatchData = await getWatchList(MarketRequestData);
      dispatch(onMarketWatchSuccess(MarketWatchData));
    } catch (err) {
      //TO ADD
    }
  };

export const updatemarketWatch =
  (MarketRequestData: any): AppThunk =>
  async (dispatch) => {
    try {
      const MarketWatchData = await getWatchList(MarketRequestData);
      dispatch(onMarketWatchSuccess(MarketWatchData));
    } catch (err) {
      //TO ADD
    }
  };

export const renamemarketWatch =
  (MarketRequestData: any): AppThunk =>
  async (dispatch) => {
    try {
      const MarketWatchData = await getWatchList(MarketRequestData);
      dispatch(onMarketWatchSuccess(MarketWatchData));
    } catch (err) {
      //TO ADD
    }
  };
