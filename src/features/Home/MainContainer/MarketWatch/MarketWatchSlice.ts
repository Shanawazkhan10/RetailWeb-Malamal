import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
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
import MarketDepth from "./MarketDepth";

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
      state.marketWatch.sSelectedWatchList = action.payload.data[0].mwName;
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
            if (MarketWatch.SymbolList == undefined) return;
            MarketWatch.SymbolList.forEach((token: IMarketWatchTokenInfo) => {
              if (token.tok == script.tk && script.name == "sf") {
                if (script.ltp != undefined) {
                  token.ltp = script.ltp;
                }
                if (script.nc != undefined) {
                  token.nc = script.nc;
                }
                if (script.cng != undefined) {
                  token.cng = script.cng;
                }

                if (script.op != undefined) {
                  token.op = script.op;
                }

                if (script.lo != undefined) {
                  token.lo = script.lo;
                }
                if (script.h != undefined) {
                  token.h = script.h;
                }
                if (script.c != undefined) {
                  token.c = script.c;
                }
                if (script.ltq != undefined) {
                  token.ltq = script.ltq;
                }
                if (script.ucl != undefined) {
                  token.ucl = script.ucl;
                }

                if (script.ltt != undefined) {
                  token.ltt = script.ltt;
                }
                if (script.lcl != undefined) {
                  token.lcl = script.lcl;
                }
                if (script.ap != undefined) {
                  token.ap = script.ap;
                }
                if (script.v != undefined) {
                  token.v = script.v;
                }
              }
            });
          }
        );
      });
      //state.marketWatch.SymbolList[0].ltp
    },
    DepthUpdatefromSocket: (state, action) => {
      // let newState = { ...state };
      //const MarketDepth: IMarketDepth[] = action.payload;
      JSON.parse(action.payload).forEach((depth: IMarketDepth) => {
        state.marketWatch.MarketWatchList.forEach(
          (MarketWatch: IMarketWatch) => {
            MarketWatch.SymbolList.forEach((token: IMarketWatchTokenInfo) => {
              if (
                token.showDepth &&
                token.tok == depth.tk &&
                depth.name == "dp"
              ) {
                //void (token.marketDepth = depth);

                //return Object.assign({}, token, depth);
                if (token.marketDepth == undefined) {
                  //token.marketDepth = [];
                }
                if (depth.bp != undefined) {
                  token.marketDepth.bp = depth.bp;
                }
                // if (depth.bp2 != undefined) {
                //   token.marketDepth.bp2 = depth.bp2;
                // }
                // if (depth.bp3 != undefined) {
                //   token.marketDepth.bp3 = depth.bp3;
                // }
                // if (depth.bp4 != undefined) {
                //   token.marketDepth.bp4 = depth.bp4;
                // }
                // if (depth.sp != undefined) {
                //   token.marketDepth.sp = depth.bp2;
                // }
                // if (depth.sp1 != undefined) {
                //   token.marketDepth.sp2 = depth.sp2;
                // }
                // if (depth.sp3 != undefined) {
                //   token.marketDepth.sp3 = depth.sp3;
                // }
                // if (depth.sp4 != undefined) {
                //   token.marketDepth.sp4 = depth.sp4;
                // }
                // if (depth.bq != undefined) token.marketDepth.bq = depth.bq;
                // if (depth.bq1 != undefined) token.marketDepth.bq1 = depth.bq1;
                // if (depth.bq2 != undefined) token.marketDepth.bq2 = depth.bq2;
                // if (depth.bq3 != undefined) token.marketDepth.bq3 = depth.bq3;
                // if (depth.bq4 != undefined) token.marketDepth.bq4 = depth.bq4;
                // if (depth.bs != undefined) token.marketDepth.bs = depth.bs;
                // if (depth.bs1 != undefined) token.marketDepth.bs1 = depth.bs1;
                // if (depth.bs2 != undefined) token.marketDepth.bs2 = depth.bs2;
                // if (depth.bs3 != undefined) token.marketDepth.bs3 = depth.bs3;
                // if (depth.bs4 != undefined) token.marketDepth.bs4 = depth.bs4;
                // if (depth.bno1 != undefined)
                //   token.marketDepth.bno1 = depth.bno1;
                // if (depth.bno2 != undefined)
                //   token.marketDepth.bno2 = depth.bno2;
                // if (depth.bno3 != undefined)
                //   token.marketDepth.bno3 = depth.bno3;
                // if (depth.bno4 != undefined)
                //   token.marketDepth.bno4 = depth.bno4;
                // if (depth.bno5 != undefined)
                //   token.marketDepth.bno5 = depth.bno5;
                // if (depth.sno1 != undefined)
                //   token.marketDepth.sno1 = depth.sno1;
                // if (depth.sno2 != undefined)
                //   token.marketDepth.sno2 = depth.sno2;
                // if (depth.sno3 != undefined)
                //   token.marketDepth.sno3 = depth.sno3;
                // if (depth.sno4 != undefined)
                //   token.marketDepth.sno4 = depth.sno4;
                // if (depth.sno5 != undefined)
                //   token.marketDepth.sno5 = depth.sno5;
                // if (depth.mul != undefined) token.marketDepth.mul = depth.mul;
                // if (depth.prec != undefined)
                //   token.marketDepth.prec = depth.prec;
              }
              //return token;
            });
          }
        );
      });
      //return newState;
    },
    AddNewWatchList: (state, action) => {
      state.marketWatch.MarketWatchList.push(action.payload);
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
  AddNewWatchList,
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

export const FetchWatchListSymbol =
  (
    scriptInfoReq: string[],
    sessionkey: string,
    index: number,
    AddorUpdate = 0
  ): AppThunk =>
  async (dispatch) => {
    try {
      const scriptInfoResponse = await PostScritInfo(scriptInfoReq, sessionkey);
      dispatch(setSymbollistindex(index));
      if (AddorUpdate) {
        AddToWatchList(scriptInfoResponse);
      } else {
        dispatch(UpdateSymbolDetails(scriptInfoResponse));
      }
    } catch (err: any) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const DeleteWatchlist =
  (DelReq: IDeleteWatchlist, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const deleteWatchlistResponse = await deleteWatchList(DelReq, sessionkey);
      console.log(deleteWatchlistResponse);
      dispatch(DeleteWatchList(deleteWatchlistResponse));
    } catch (err: any) {
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
    } catch (err: any) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const UpdateWatchlist =
  (UpdateReq: IUpdateWatchlist): AppThunk =>
  async (dispatch) => {
    try {
      const updateWatchlistResponse = await updateWatchList(UpdateReq);
      console.log(updateWatchlistResponse);
    } catch (err: any) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const UpdateFeed =
  (msg: IScriptUpdate): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(ScriptUpdatefromSocket(msg as IScriptUpdate));
    } catch (err: any) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const UpdateDepth =
  (msg: IMarketDepth): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(DepthUpdatefromSocket(msg as IMarketDepth));
    } catch (err: any) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const NewWatchList =
  (newWatchList: IMarketWatch): AppThunk =>
  (dispatch) => {
    try {
      dispatch(AddNewWatchList(newWatchList));
    } catch (err: any) {}
  };
