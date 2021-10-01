import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deleteWatchList,
  getWatchList,
  PostScritInfo,
  renameWatchList,
  updateWatchList,
} from "../../../../app/api";
import { toastNotification } from "../../../../app/Notification";
import { enumAPIStatus } from "../../../../constants/HSConstants";
import { AppThunk } from "../../../../store/store";
import { IChangeWatchlist } from "../../../../types/IChangeWatchlist";
import { IDepthReq } from "../../../../types/IDepthReq";
import {
  IMarketDepth,
  InitialMarketDepth,
} from "../../../../types/IMarketDepth";
import { IMarketWatch } from "../../../../types/IMarketWatch";
import { IMarketWatchList } from "../../../../types/IMarketWatchList";
import { IMarketWatchTokenInfo } from "../../../../types/IMarketWatchTokenInfo";
import { IRemoveFromWatch } from "../../../../types/IRemoveFromWatch";
import { ISession } from "../../../../types/ISession";
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
  sRemovedSymbol: "",
  sNewWatchlistSymbol: "",
  bIsNewWatchlist: false,
  //SymbolList: [],
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
      state.marketWatch.MarketWatchList.map((row, i) => (row.id = i));
    },
    onMarketWatchFailure: (state, action) => {
      state.marketWatch.bIsError = true;
      toastNotification("error", action.payload);
      //Tostify Call
    },
    ChangeWatchList: (state, action: PayloadAction<IChangeWatchlist>) => {
      state.marketWatch.nSelectedWatchList = action.payload.id;
      state.marketWatch.sSelectedWatchList = action.payload.mwname;
    },
    DeleteWatchList: (state, action) => {
      state.marketWatch.MarketWatchList =
        state.marketWatch.MarketWatchList.filter(
          (row) => row.mwName != action.payload.mwName
        );
      state.marketWatch.nSelectedWatchList = 0;
    },
    AddToWatchList: (state, action) => {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].SymbolList.push(action.payload.data[0]);
      state.marketWatch.nSelectedWatchList =
        state.marketWatch.nSelectedWatchList;
    },
    RenameWatchList: (state, action) => {
      // let selectedid = state.marketWatch.MarketWatchList.find(
      //   (row) => row.mwName == action.payload.oldmwName
      // )?.id;
      //if (selectedid != undefined) {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].mwName = action.payload.newmwName;
      state.marketWatch.sSelectedWatchList = action.payload.newmwName; //DM: Changing name
      //}
    },
    UpdateSymbolDetails: (state, action) => {
      let TokenInfo: IMarketWatchTokenInfo[] = action.payload.data;
      if (TokenInfo != undefined)
        state.marketWatch.MarketWatchList[
          state.marketWatch.Symbollistindex
        ].SymbolList = TokenInfo;
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

    ShowNewWatchlist: (state, action) => {
      state.marketWatch.bIsNewWatchlist = action.payload;
    },

    RemoveSymbolFromWatchlist(state, action: PayloadAction<IUpdateWatchlist>) {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].scrips = action.payload.scrips;

      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].SymbolList = state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].SymbolList.filter(
        (row) => row.tok !== state.marketWatch.sRemovedSymbol
      );
    },
    setRemovedSymbol: (state, action) => {
      state.marketWatch.sRemovedSymbol = action.payload;
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
    setNewWatchlistSymbol: (state, action) => {
      state.marketWatch.sNewWatchlistSymbol = action.payload;
    },
    AddSymbolFromNewWatchlist: (state, action) => {
      let TokenInfo: IMarketWatchTokenInfo[] = action.payload.data;
      // if (TokenInfo != undefined)
      //   state.marketWatch.MarketWatchList[
      //     state.marketWatch.nSelectedWatchList
      //   ].SymbolList.push(TokenInfo);
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].SymbolList.push(action.payload);
    },
    UpdateScriptFromNewWatchlist: (
      state,
      action: PayloadAction<IUpdateWatchlist>
    ) => {
      const AddWatchlist = {
        mwName: action.payload.mwName,
        scrips: action.payload.scrips,
        id: state.marketWatch.MarketWatchList.length,
        SymbolList: [],
      };

      state.marketWatch.MarketWatchList.push(AddWatchlist);
      state.marketWatch.nSelectedWatchList =
        state.marketWatch.MarketWatchList.length - 1;
      // state.marketWatch.MarketWatchList[
      //   state.marketWatch.nSelectedWatchList
      // ].scrips = action.payload.scrips;
      // state.marketWatch.MarketWatchList[
      //   state.marketWatch.nSelectedWatchList
      // ].mwName = action.payload.mwName;

      state.marketWatch.sSelectedWatchList = action.payload.mwName;
      state.marketWatch.sNewWatchlistSymbol = "";
    },
    UpdateScriptsFromSearch: (
      state,
      action: PayloadAction<IUpdateWatchlist>
    ) => {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].scrips = action.payload.scrips;
    },
    SortWatchlist: (state, action) => {
      state.marketWatch.MarketWatchList[
        state.marketWatch.nSelectedWatchList
      ].SymbolList.slice().sort((token: any) => token.sym);

      console.log(
        state.marketWatch.MarketWatchList[state.marketWatch.nSelectedWatchList]
          .SymbolList
      );
      // switch (action.payload) {
      //   case 1:
      //     state.marketWatch.MarketWatchList[
      //       state.marketWatch.nSelectedWatchList
      //     ].SymbolList.slice().sort((token: any) => token.sym);
      //     break;
      //   case 2:
      //     state.marketWatch.MarketWatchList[
      //       state.marketWatch.nSelectedWatchList
      //     ].SymbolList.slice().sort((token: any) => token.nc);
      //     break;
      //   case 3:
      //     state.marketWatch.MarketWatchList[
      //       state.marketWatch.nSelectedWatchList
      //     ].SymbolList.slice().sort((token: any) => token.ltp);
      //     break;
      //   case 4:
      //     state.marketWatch.MarketWatchList[
      //       state.marketWatch.nSelectedWatchList
      //     ].SymbolList.slice().sort((token: any) => token.sym);
      //     break;

      //   default:
      //     break;
      // }
    },
    ScriptUpdatefromSocket: (state, action) => {
      const script: IScriptUpdate = action.payload;

      // state.marketWatch.MarketWatchList.find((watchItem) => {
      //   watchItem.SymbolList.some((token) => {
      //     if (token.tok == script.tk) {
      //       if (script.ltp != undefined) {
      //         token.ltp = script.ltp;
      //       }
      //     }
      //   });
      // });

      //JSON.parse(action.payload).forEach((script: IScriptUpdate) => {
      if (state.marketWatch.MarketWatchList == undefined) return;
      state.marketWatch.MarketWatchList.forEach((MarketWatch: IMarketWatch) => {
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
            return;
          }
        });
      });
    },
    DepthUpdatefromSocket: (state, action) => {
      const depth: IMarketDepth = action.payload;
      //JSON.parse(action.payload).forEach((depth: IMarketDepth) => {
      state.marketWatch.MarketWatchList.forEach((MarketWatch: IMarketWatch) => {
        if (MarketWatch.SymbolList == undefined) return;
        MarketWatch.SymbolList.forEach((token: IMarketWatchTokenInfo) => {
          if (token.showDepth && token.tok == depth.tk && depth.name == "dp") {
            //void (token.marketDepth = depth);

            //return Object.assign({}, token, depth);
            if (token.marketDepth == undefined) {
              //token.marketDepth = {} as IMarketDepth;
              token.marketDepth = Object.assign({}, InitialMarketDepth);
            }
            if (depth.bp != undefined) token.marketDepth.bp = depth.bp;

            if (depth.bp1 != undefined) token.marketDepth.bp1 = depth.bp1;

            if (depth.bp2 != undefined) token.marketDepth.bp2 = depth.bp2;

            if (depth.bp3 != undefined) token.marketDepth.bp3 = depth.bp3;

            if (depth.bp4 != undefined) token.marketDepth.bp4 = depth.bp4;

            if (depth.sp != undefined) token.marketDepth.sp = depth.sp;

            if (depth.sp1 != undefined) token.marketDepth.sp1 = depth.sp1;

            if (depth.sp1 != undefined) token.marketDepth.sp2 = depth.sp2;

            if (depth.sp3 != undefined) token.marketDepth.sp3 = depth.sp3;

            if (depth.sp4 != undefined) token.marketDepth.sp4 = depth.sp4;

            if (depth.bq != undefined) token.marketDepth.bq = depth.bq;
            if (depth.bq1 != undefined) token.marketDepth.bq1 = depth.bq1;
            if (depth.bq2 != undefined) token.marketDepth.bq2 = depth.bq2;
            if (depth.bq3 != undefined) token.marketDepth.bq3 = depth.bq3;
            if (depth.bq4 != undefined) token.marketDepth.bq4 = depth.bq4;
            if (depth.bs != undefined) token.marketDepth.bs = depth.bs;
            if (depth.bs1 != undefined) token.marketDepth.bs1 = depth.bs1;
            if (depth.bs2 != undefined) token.marketDepth.bs2 = depth.bs2;
            if (depth.bs3 != undefined) token.marketDepth.bs3 = depth.bs3;
            if (depth.bs4 != undefined) token.marketDepth.bs4 = depth.bs4;
            if (depth.bno1 != undefined) token.marketDepth.bno1 = depth.bno1;
            if (depth.bno2 != undefined) token.marketDepth.bno2 = depth.bno2;
            if (depth.bno3 != undefined) token.marketDepth.bno3 = depth.bno3;
            if (depth.bno4 != undefined) token.marketDepth.bno4 = depth.bno4;
            if (depth.bno5 != undefined) token.marketDepth.bno5 = depth.bno5;
            if (depth.sno1 != undefined) token.marketDepth.sno1 = depth.sno1;
            if (depth.sno2 != undefined) token.marketDepth.sno2 = depth.sno2;
            if (depth.sno3 != undefined) token.marketDepth.sno3 = depth.sno3;
            if (depth.sno4 != undefined) token.marketDepth.sno4 = depth.sno4;
            if (depth.sno5 != undefined) token.marketDepth.sno5 = depth.sno5;
            if (depth.mul != undefined) token.marketDepth.mul = depth.mul;
            if (depth.prec != undefined) token.marketDepth.prec = depth.prec;
          }
          return; //Need To Confirm
        });
      });
      // });
      //return newState;
    },
    updateStorage: (state, action) => {
      //var Session: ISession = ;
      //{"status":"SUCCESS","code":200,"data":[{"mwName":"Test_2","scrips":"nse_cm|3426,nse_cm|22,nse_cm|1660,nse_fo|41140,nse_fo|39914"}]}
      var MarketWatchlist = action.payload;
      if (MarketWatchlist.data != undefined) {
        MarketWatchlist.data.map((data: any) => {
          console.log(data);
          var scrips: string = data.scrips;
          scrips.split(",").map((scripname: string) => {
            if (localStorage.getItem(scripname) == null) {
              localStorage.setItem(scripname, "1");
            } else {
              var count = Number(localStorage.getItem(scripname)) + 1;
              localStorage.setItem(scripname, String(count));
            }
          });
        });
      }
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
  onMarketWatchFailure,
  hideMore,
  showMore,
  setSymbollistindex,
  ScriptUpdatefromSocket,
  DepthUpdatefromSocket,
  setRemovedSymbol,
  setNewWatchlistSymbol,
  AddSymbolFromNewWatchlist,
  UpdateScriptFromNewWatchlist,
  //FetchSocketData,
  updateStorage,
  ShowNewWatchlist,
  UpdateScriptsFromSearch,
  SortWatchlist,
} = marketwatchSlice.actions;

export const fetchmarketWatch =
  (cache: boolean, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const MarketWatchData = await getWatchList(cache, sessionkey);
      if (MarketWatchData.status == enumAPIStatus.SUCCESS) {
        dispatch(updateStorage(MarketWatchData));
        dispatch(onMarketWatchSuccess(MarketWatchData));
      } else {
        dispatch(onMarketWatchFailure(MarketWatchData.message));
      }
    } catch (err: any) {
      dispatch(onMarketWatchFailure(err.toString()));
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
        dispatch(AddToWatchList(scriptInfoResponse));
      } else {
        dispatch(UpdateSymbolDetails(scriptInfoResponse));
      }
    } catch (err: any) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

export const FetchSymbol =
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
        dispatch(AddToWatchList(scriptInfoResponse));
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
      //handle error & add validations for MW Name
      dispatch(RenameWatchList(RenameReq));
    } catch (err: any) {
      dispatch(onMarketWatchFailure(err.toString()));
    }
  };

//Used for Adding and removing Symbol from watchlist
export const UpdateWatchlist =
  (
    UpdateReq: IUpdateWatchlist,
    sessionKey: string,
    ReqType: number
  ): AppThunk =>
  async (dispatch) => {
    try {
      const updateWatchlistResponse = await updateWatchList(
        UpdateReq,
        sessionKey
      );

      if (updateWatchlistResponse.status == "SUCCESS") {
        //condition for add or remove
        //1:Add Item from Search,2:Delete Watchlist,3:New Watchlist
        if (ReqType == 1) {
          dispatch(
            FetchWatchListSymbol(
              UpdateReq.scrips.split(",").slice(-1),
              sessionKey,
              0,
              1
            )
          );
          dispatch(UpdateScriptsFromSearch(UpdateReq));
        } else if (ReqType == 2) {
          //if (updateWatchlistResponse.status != "FAILURE") {
          dispatch(RemoveSymbolFromWatchlist(UpdateReq));
          //}
        } else if (ReqType == 3) {
          dispatch(UpdateScriptFromNewWatchlist(UpdateReq));
          dispatch(
            FetchWatchListSymbol(
              UpdateReq.scrips.split(",").slice(-1),
              sessionKey,
              0,
              1
            )
          );
        }
      } else {
        console.log(updateWatchlistResponse.message);
      }
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
