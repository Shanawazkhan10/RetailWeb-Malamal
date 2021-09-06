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
      state.marketpicture.Type = 1;
      state.marketpicture.IsShow = true;
    },
    ShowDepthFromPosition: (state, action) => {
      state.marketpicture.Type = 2;
      state.marketpicture.IsShow = true;
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
    ScriptUpdatefromSocket: (state, action) => {
      const ScriptList: IScriptUpdate[] = action.payload;
      JSON.parse(action.payload).forEach((script: IScriptUpdate) => {
        if (state.marketpicture.TokenInfo.tok == script.tk) {
          const token: IMarketWatchTokenInfo = state.marketpicture.TokenInfo;
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
          if (script.c != undefined) {
            token.c = script.c;
          }
          if (script.lo != undefined) {
            token.lo = script.lo;
          }
          if (script.h != undefined) {
            token.h = script.h;
          }
          if (script.v != undefined) {
            token.v = script.v;
          }
          if (script.ltt != undefined) {
            token.ltt = script.ltt;
          }
          if (script.h != undefined) {
            token.h = script.h;
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

      //state.marketWatch.SymbolList[0].ltp
    },
    // DepthUpdatefromSocket: (state, action) => {
    //   const MarketDepth: IMarketDepth[] = action.payload;
    //   JSON.parse(action.payload).forEach((depth: IMarketDepth) => {
    //     state.marketWatch.MarketWatchList.forEach(
    //       (MarketWatch: IMarketWatch) => {
    //         MarketWatch.SymbolList.forEach((token: IMarketWatchTokenInfo) => {
    //           if (token.showDepth && token.tok == depth.tk) {
    //             token.marketDepth = depth;
    //           }
    //         });
    //       }
    //     );
    //   });
    // },
  },
});

export default marketpicture.reducer;

export const {
  ShowDepthFromSearch,
  ShowDepthFromPosition,
  updateMarketDepth,
  UpdateTokenInfo,
  CloseDepth,
} = marketpicture.actions;
