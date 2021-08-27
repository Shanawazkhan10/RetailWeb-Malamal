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
  },
});

export default marketpicture.reducer;

export const {
  ShowDepthFromSearch,
  ShowDepthFromPosition,
  updateMarketDepth,
  UpdateTokenInfo,
} = marketpicture.actions;
