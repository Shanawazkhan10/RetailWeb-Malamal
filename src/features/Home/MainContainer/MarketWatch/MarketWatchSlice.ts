import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  api,
  deleteWatchList,
  getWatchList,
  PostScritInfo,
  renameWatchList,
  updateWatchList,
} from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IChangeWatchlist } from "../../../../types/IChangeWatchlist";
import { IDepthReq } from "../../../../types/IDepthReq";
import { IMarketDepth } from "../../../../types/IMarketDepth";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IMarketWatchList } from "../../../../types/IMarketWatchList";
import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import { IRemoveFromWatch } from "../../../../types/IRemoveFromWatch";
import { IScriptUpdate } from "../../../../types/MarketData/IScriptUpdate";
import { IUpdateWatchlist } from "../../../../types/WatchList/IUpdateWatchList";
import { IDeleteWatchlist } from "./../../../../app/IDeleteWatchlist";
import { IRenameWatchlist } from "./../../../../types/IRenameWatchlist";

const InitialMarketWatch: IMarketWatchList = {
  MarketWatchList: [],
  nSelectedWatchList: 0,
  sSelectedWatchList: "",
  bIsBind: false,
  bIsError: false,
  Symbollistindex: 0,
  SymbolList: [],
};

const marketwatchSlice = createSlice({
  name: "marketwatch",
  initialState: {
    marketWatch: InitialMarketWatch,
  },
  reducers: {
    onMarketWatchSuccess: (state, action) => {
      state.marketWatch.MarketWatchList = action.payload.data;
      state.marketWatch.bIsBind = true;
      state.marketWatch.nSelectedWatchList = 0;
      state.marketWatch.Symbollistindex = 0;
      state.marketWatch.MarketWatchList.map(
        //(row, i) => GetWatchListSymbolDetails(i + 1, row.scrips) //DUmmy Call for actual call send token info
        (row, i) => (row.id = i)
      );
    },
    onMarketWatchFailure: (state, action) => {
      state.marketWatch.bIsError = true;
      //Tostify Call
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
      state.marketWatch.nSelectedWatchList = 1;
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
      let TokenInfo: IMarketWatchTokenInfo[] = action.payload.data;
      if (TokenInfo != undefined)
        state.marketWatch.MarketWatchList[
          state.marketWatch.Symbollistindex
        ].SymbolList = TokenInfo;

      // state.marketWatch.SymbolList[Number(state.marketWatch.Symbollistindex)] =
      //   action.payload.data;
    },
    getMarketDepthSuccess: (state, action) => {
      let MarketDepth: IMarketDepth = action.payload;
      if (MarketDepth != undefined)
        state.marketWatch.MarketWatchList[MarketDepth.id].SymbolList[
          MarketDepth.index
        ].marketDepth = action.payload;
    },
    ShowMarketDepth: (state, action: PayloadAction<IDepthReq>) => {
      state.marketWatch.MarketWatchList[action.payload.id].SymbolList[
        action.payload.index
      ].showDepth =
        !state.marketWatch.MarketWatchList[action.payload.id].SymbolList[
          action.payload.index
        ].showDepth;
    },

    RemoveSymbolFromWatchlist(state, action: PayloadAction<IRemoveFromWatch>) {
      state.marketWatch.MarketWatchList[action.payload.id].scrips =
        action.payload.scrips;
    },
    showMore: (state, action: PayloadAction<number>) => {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].SymbolList[action.payload].showMore = true; //Temp Watchlist Id -1 need to change
    },
    hideMore: (state, action: PayloadAction<number>) => {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].SymbolList[action.payload].showMore = false; //Temp Watchlist Id -1 need to change
    },
    AddToWatchlistFromSearch(state, action: PayloadAction<IRemoveFromWatch>) {
      state.marketWatch.MarketWatchList[action.payload.id].scrips =
        action.payload.scrips;
    },
    setSymbollistindex: (state, action) => {
      state.marketWatch.Symbollistindex = action.payload;
    },
    ScriptUpdatefromSocket: (state, action) => {
      const ScriptList: IScriptUpdate[] = action.payload;
      JSON.parse(action.payload).forEach((script: IScriptUpdate) => {
        // state.socketdata.Script[Number(script.tk)] = script;
        //
        //state.marketWatch.SymbolList[0].ltp = script.ltp;
        //state.marketWatch.MarketWatchList[0].SymbolList[0].sym = script.ltp;
        if (state.marketWatch.MarketWatchList == undefined) return;
        state.marketWatch.MarketWatchList.forEach(
          (MarketWatch: IMarketWatch) => {
            MarketWatch.SymbolList.forEach((token: IMarketWatchTokenInfo) => {
              if (token.tok == script.tk) {
                if (script.ltp != undefined) {
                  token.ltp = script.ltp;
                }
                if (script.nc != undefined) {
                  token.nc = script.nc;
                }
                if (script.cng != undefined) {
                  token.cng = script.cng;
                }
                // token.op = script.op;
                // token.lo = script.lo;
                // token.h = script.h;
                // token.c = script.c;
                // token.v = script.v;
                // token.ltq = script.ltq;
                // token.ltt = script.ltt;
                // token.lcl = script.lcl;
                // token.ucl = script.ucl;
              }
            });
          }
        );
      });
      //state.marketWatch.SymbolList[0].ltp
    },
    DepthUpdatefromSocket: (state, action) => {
      const MarketDepth: IMarketDepth[] = action.payload;
      JSON.parse(action.payload).forEach((depth: IMarketDepth) => {
        state.marketWatch.MarketWatchList.forEach(
          (MarketWatch: IMarketWatch) => {
            MarketWatch.SymbolList.forEach((token: IMarketWatchTokenInfo) => {
              if (token.showDepth && token.tok == depth.tk) {
                token.marketDepth = depth;
              }
            });
          }
        );
      });
    },
    // FetchSocketData: (state, action) => {
    //   // const ScriptData = useSelector(
    //   //   (state: RootState) => state.socketData.socketdata.Script
    //   // );
    //   // state.marketWatch.MarketWatchList[
    //   //   state.marketWatch.nSelectedWatchList
    //   // ].SymbolList[0].ltp =
    //   //   store.getState().socketData.socketdata.Script[22].ltp;
    //   //const x = store.getState().socketData.socketdata.Script[22].ltp;
    // },
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
  onMarketWatchFailure,
  hideMore,
  showMore,
  setSymbollistindex,
  ScriptUpdatefromSocket,
  DepthUpdatefromSocket,
  //FetchSocketData,
} = marketwatchSlice.actions;

export const fetchmarketWatch =
  (cache: boolean, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const MarketWatchData = await getWatchList(cache, sessionkey);
      dispatch(onMarketWatchSuccess(MarketWatchData));
    } catch (err) {
      console.log(err);
    }
  };

export const deletemarketWatch =
  (MarketRequestData: any, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const MarketWatchData = await getWatchList(MarketRequestData, sessionkey);
      dispatch(onMarketWatchSuccess(MarketWatchData));
    } catch (err) {
      //TO ADD
    }
  };

export const updatemarketWatch =
  (MarketRequestData: any, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const MarketWatchData = await getWatchList(MarketRequestData, sessionkey);
      dispatch(onMarketWatchSuccess(MarketWatchData));
    } catch (err) {
      //TO ADD
    }
  };

export const renamemarketWatch =
  (MarketRequestData: any, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const MarketWatchData = await getWatchList(MarketRequestData, sessionkey);
      dispatch(onMarketWatchSuccess(MarketWatchData));
    } catch (err) {
      //TO ADD
    }
  };

export const FetchWatchListSymbol =
  (scriptInfoReq: string[], sessionkey: string, index: number): AppThunk =>
  async (dispatch) => {
    try {
      const scriptInfoResponse = await PostScritInfo(scriptInfoReq, sessionkey);
      dispatch(setSymbollistindex(index));
      dispatch(UpdateSymbolDetails(scriptInfoResponse));
    } catch (err) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const DeleteWatchlist =
  (DelReq: IDeleteWatchlist, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const deleteWatchlistResponse = await deleteWatchList(DelReq, sessionkey);
      dispatch(DeleteWatchList(deleteWatchlistResponse));
    } catch (err) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const RenameWatchlist =
  (RenameReq: IRenameWatchlist, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const renameWatchlistResponse = await renameWatchList(
        RenameReq,
        sessionkey
      );
      dispatch(RenameWatchList(renameWatchlistResponse));
    } catch (err) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const UpdateWatchlist =
  (UpdateReq: IUpdateWatchlist, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const renameWatchlistResponse = await updateWatchList(
        UpdateReq,
        sessionkey
      );
      //dispatch(RenameWatchList(renameWatchlistResponse));
    } catch (err) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const UpdateFeed =
  (msg: IScriptUpdate): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(ScriptUpdatefromSocket(msg as IScriptUpdate));
    } catch (err) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const UpdateDepth =
  (msg: IMarketDepth): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(DepthUpdatefromSocket(msg as IMarketDepth));
    } catch (err) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };
