import { IMarketDepth, InitialMarketDepth } from "../../types/IMarketDepth";
import { IScriptUpdate } from "../../types/MarketData/IScriptUpdate";
import { ISocketData } from "../../types/MarketData/ISocketData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIndices, InitialIndices } from "../../types/MarketData/IIndices";

const InitialSocketData: ISocketData = {
  IsShow: false,
  Script: [],
  Depth: [],
  Indices: [],
  TokenStatus: [],
};

const socketdata = createSlice({
  name: "socketdata",
  initialState: {
    socketdata: InitialSocketData,
  },
  reducers: {
    ScriptUpdate: (state, action: PayloadAction<IScriptUpdate>) => {
      state.socketdata.Script[Number(action.payload.tk)] = action.payload;
    },
    DepthUpdate: (state, action: PayloadAction<IMarketDepth>) => {
      state.socketdata.Depth[Number(action.payload.tk)] = action.payload;
    },
    IndicesUpdate: (state, action: PayloadAction<IIndices>) => {
      state.socketdata.Indices[Number(action.payload.tk)] = action.payload;
    },
    ChannelPause: (state, action) => {
      state.socketdata.Script = action.payload;
    },
    ChannelResume: (state, action) => {
      state.socketdata.Script = action.payload;
    },
    SubcribeDepth: (state, action) => {
      state.socketdata.TokenStatus[Number(action)].Depth.status = 1;
    },
    UnSubcribeDepth: (state, action) => {
      state.socketdata.TokenStatus[Number(action)].Depth.status = 0;
    },

    SubcribeScript: (state, action) => {
      state.socketdata.TokenStatus[Number(action)].Depth.status = 1;
    },
    UnSubcribeScript: (state, action) => {
      state.socketdata.TokenStatus[Number(action)].Depth.status = 0;
    },
    SubcribeIndices: (state, action) => {
      state.socketdata.TokenStatus[Number(action)].Depth.status = 1;
    },
    UnSubcribeIndices: (state, action) => {
      state.socketdata.TokenStatus[Number(action)].Depth.status = 0;
    },
  },
});

export default socketdata.reducer;

export const {
  ScriptUpdate,
  DepthUpdate,
  IndicesUpdate,
  ChannelPause,
  ChannelResume,
} = socketdata.actions;
