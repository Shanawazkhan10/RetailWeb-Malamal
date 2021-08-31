import { IMarketDepth, InitialMarketDepth } from "../../types/IMarketDepth";
import {
  InitialScriptUpdate,
  IScriptUpdate,
} from "../../types/MarketData/IScriptUpdate";
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
    //ScriptUpdate: (state, action: PayloadAction<IScriptUpdate>) => {
    ScriptUpdate: (state, action) => {
      //ScriptUpdate: (state, { payload }: PayloadAction<IScriptUpdate>) => {
      const ScriptList: IScriptUpdate[] = action.payload;
      //state.socketdata.Script[Number(action.payload.tk)] = action.payload;
      JSON.parse(action.payload).forEach((script: IScriptUpdate) => {
        state.socketdata.Script[Number(script.tk)] = script;
      });
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
    RecevidedMessage: (state, action) => {
      state.socketdata.TokenStatus[Number(action)].Depth.status = 0;
    },
    FetchSocketData: (state, action) => {
      //state.socketdata.Script[22].ltp;
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
  FetchSocketData,
} = socketdata.actions;
