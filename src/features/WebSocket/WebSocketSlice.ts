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
  Script: InitialScriptUpdate,
  Depth: InitialMarketDepth,
  Indices: InitialIndices,
};

const socketdata = createSlice({
  name: "socketdata",
  initialState: {
    socketdata: InitialSocketData,
  },
  reducers: {
    ScriptUpdate: (state, action: PayloadAction<IScriptUpdate>) => {
      state.socketdata.Script = action.payload;
    },
    DepthUpdate: (state, action: PayloadAction<IMarketDepth>) => {
      state.socketdata.Depth = action.payload;
    },
    IndicesUpdate: (state, action: PayloadAction<IIndices>) => {
      state.socketdata.Indices = action.payload;
    },
    ChannelPause: (state, action) => {
      state.socketdata.Script = action.payload;
    },
    ChannelResume: (state, action) => {
      state.socketdata.Script = action.payload;
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
