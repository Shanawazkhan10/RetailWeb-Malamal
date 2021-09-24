import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { api } from "../../../../app/api";
import {
  IMarketDepth,
  InitialMarketDepth,
} from "../../../../types/IMarketDepth";
import { IMarketPicture } from "../../../../types/IMarketPicture";
import MarketDepth from "./../MarketWatch/MarketDepth";
import {
  IMarketWatchTokenInfo,
  InitialTokenInfo,
} from "./../../../../types/IMarketWatchTokenInfo";
import { IScriptUpdate } from "../../../../types/MarketData/IScriptUpdate";

const InitialMarketPicture: IMarketPicture = {
  IsShow: false,
  Type: 0,
  script: "",
  token: "",
  TokenInfo: InitialTokenInfo,
  Depth: InitialMarketDepth,
};

const marketpicture = createSlice({
  name: "marketpicture",
  initialState: {
    marketpicture: InitialMarketPicture,
  },
  reducers: {
    ShowDepthFromSearch: (state, action) => {
      state.marketpicture.Type = 2;
      state.marketpicture.IsShow = true;
      state.marketpicture.script = action.payload;
      state.marketpicture.token = state.marketpicture.script.split("|")[1];
    },
    ShowDepthFromPosition: (state, action) => {
      state.marketpicture.Type = 2;
      state.marketpicture.IsShow = true;
      state.marketpicture.script = action.payload;
      state.marketpicture.token = state.marketpicture.script.split("|")[1];
    },
    updateMarketDepth: (state, action: PayloadAction<IMarketDepth>) => {
      state.marketpicture.Depth = action.payload;
    },

    UpdateTokenInfo: (state, action: PayloadAction<IMarketWatchTokenInfo>) => {
      state.marketpicture.TokenInfo = action.payload;
    },

    ShowDepth: (state, action) => {
      state.marketpicture.IsShow = true;
    },
    CloseDepth: (state, action) => {
      state.marketpicture.IsShow = false;
    },
    SearchScriptUpdate: (state, action) => {
      const script: IScriptUpdate = action.payload;
      //Local Storage check if token is present.
      //JSON.parse(action.payload).forEach((script: IScriptUpdate) => {
      if (state.marketpicture.token == script.tk && script.name == "sf") {
        const token: IMarketWatchTokenInfo = state.marketpicture.TokenInfo;
        if (script.ltp != undefined) {
          token.ltp = script.ltp;
        }
        if (script.nc != undefined) {
          token.nc = script.nc;
        }
        if (script.cng != undefined) {
          //        token.cng = script.cng;
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
        if (script.tbq != undefined) {
          token.tbq = script.tbq;
        }
        if (script.tsq != undefined) {
          token.tsq = script.tsq;
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

      //state.marketWatch.SymbolList[0].ltp
    },
    SearchDepthUpdate: (state, action) => {
      const depth = action.payload;
      //JSON.parse(action.payload).forEach((depth: IMarketDepth) => {
      if (state.marketpicture.token == depth.tk && depth.name == "dp") {
        // state.marketpicture.Depth = depth;
        if (state.marketpicture.Depth == undefined) {
          //token.marketDepth = {} as IMarketDepth;
          state.marketpicture.Depth = Object.assign({}, InitialMarketDepth);
        }
        if (depth.bp != undefined) state.marketpicture.Depth.bp = depth.bp;
        if (depth.bp1 != undefined) state.marketpicture.Depth.bp1 = depth.bp1;

        if (depth.bp2 != undefined) state.marketpicture.Depth.bp2 = depth.bp2;

        if (depth.bp3 != undefined) state.marketpicture.Depth.bp3 = depth.bp3;

        if (depth.bp4 != undefined) state.marketpicture.Depth.bp4 = depth.bp4;

        if (depth.sp != undefined) state.marketpicture.Depth.sp = depth.bp2;

        if (depth.sp1 != undefined) state.marketpicture.Depth.sp1 = depth.sp1;
        if (depth.sp2 != undefined) state.marketpicture.Depth.sp2 = depth.sp2;

        if (depth.sp3 != undefined) state.marketpicture.Depth.sp3 = depth.sp3;

        if (depth.sp4 != undefined) state.marketpicture.Depth.sp4 = depth.sp4;

        if (depth.bq != undefined) state.marketpicture.Depth.bq = depth.bq;
        if (depth.bq1 != undefined) state.marketpicture.Depth.bq1 = depth.bq1;
        if (depth.bq2 != undefined) state.marketpicture.Depth.bq2 = depth.bq2;
        if (depth.bq3 != undefined) state.marketpicture.Depth.bq3 = depth.bq3;
        if (depth.bq4 != undefined) state.marketpicture.Depth.bq4 = depth.bq4;
        if (depth.bs != undefined) state.marketpicture.Depth.bs = depth.bs;
        if (depth.bs1 != undefined) state.marketpicture.Depth.bs1 = depth.bs1;
        if (depth.bs2 != undefined) state.marketpicture.Depth.bs2 = depth.bs2;
        if (depth.bs3 != undefined) state.marketpicture.Depth.bs3 = depth.bs3;
        if (depth.bs4 != undefined) state.marketpicture.Depth.bs4 = depth.bs4;
        if (depth.bno1 != undefined)
          state.marketpicture.Depth.bno1 = depth.bno1;
        if (depth.bno2 != undefined)
          state.marketpicture.Depth.bno2 = depth.bno2;
        if (depth.bno3 != undefined)
          state.marketpicture.Depth.bno3 = depth.bno3;
        if (depth.bno4 != undefined)
          state.marketpicture.Depth.bno4 = depth.bno4;
        if (depth.bno5 != undefined)
          state.marketpicture.Depth.bno5 = depth.bno5;
        if (depth.sno1 != undefined)
          state.marketpicture.Depth.sno1 = depth.sno1;
        if (depth.sno2 != undefined)
          state.marketpicture.Depth.sno2 = depth.sno2;
        if (depth.sno3 != undefined)
          state.marketpicture.Depth.sno3 = depth.sno3;
        if (depth.sno4 != undefined)
          state.marketpicture.Depth.sno4 = depth.sno4;
        if (depth.sno5 != undefined)
          state.marketpicture.Depth.sno5 = depth.sno5;
        if (depth.mul != undefined) state.marketpicture.Depth.mul = depth.mul;
        if (depth.prec != undefined)
          state.marketpicture.Depth.prec = depth.prec;
      }
      //});
    },
  },
});

export default marketpicture.reducer;

export const {
  ShowDepthFromSearch,
  ShowDepthFromPosition,
  updateMarketDepth,
  UpdateTokenInfo,
  CloseDepth,
  SearchScriptUpdate,
  SearchDepthUpdate,
} = marketpicture.actions;
