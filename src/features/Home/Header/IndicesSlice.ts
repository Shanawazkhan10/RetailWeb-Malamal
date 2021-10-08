import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Getallindicesdata } from "../../../app/api";
import { AppThunk } from "../../../store/store";
import { IGetIndicesRequest } from "../../../types/Indices/IGetIndicesRequest";
import { IIndicesList } from "../../../types/Indices/IIndicesList";
import { IIndices } from "../../../types/MarketData/IIndices";
import { SubUnsubReq, userWS } from "../../WebSocket/HSSocket";
import {
  sendUnsubReq,
  waitForSocketConnection,
} from "../../WebSocket/HSSocket1";

const initialState = {
  IndicesList: [],
  isError: false,
  code: 0,
} as IIndicesList;

export const indicesSlice = createSlice({
  name: "indices",
  initialState,
  reducers: {
    onIndicesLoading: (state, action: PayloadAction<any>) => {
      state.isError = false;
    },
    onIndicesFetchSuccess: (state, action: PayloadAction<any>) => {
      state.isError = false;
      state.IndicesList.push(action.payload.data);
    },
    onIndicesFetchError: (state, action: PayloadAction<any>) => {
      state.isError = true;
    },
    onLogoutFetchError: (state, action: PayloadAction<any>) => {
      state.isError = true;
      state.code = action.payload.code;
    },
    onIndiceUpdate: (state, action: PayloadAction<any>) => {
      const searchIndex = state.IndicesList.find(
        (x) => x.omtkn === action.payload.tk
      );
      if (searchIndex !== undefined) {
        searchIndex.last = action.payload.iv;
        searchIndex.chg = action.payload.cng;
        searchIndex.netchg = action.payload.nc;
      }
    },
  },
});

export const {
  onIndicesLoading,
  onIndicesFetchSuccess,
  onIndicesFetchError,
  onIndiceUpdate,
  onLogoutFetchError,
} = indicesSlice.actions;

export default indicesSlice.reducer;

export const GetAllIndicesData =
  (getIndeicesRequest: IGetIndicesRequest, sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const indicesRepsonse = await Getallindicesdata(
        getIndeicesRequest,
        sessionkey
      );
      if (Number(indicesRepsonse.code) == 200) {
        dispatch(onIndicesFetchSuccess(indicesRepsonse));
      } else {
        if (Number(indicesRepsonse.code) == 503) {
          dispatch(onLogoutFetchError(indicesRepsonse));
        } else {
          dispatch(onIndicesFetchError(indicesRepsonse));
        }
      }
    } catch (error) {
      dispatch(onIndicesFetchError);
    }
  };

export const SendIndiceSubRequest =
  (indexList: any): AppThunk =>
  async (dispatch) => {
    //subscribe Script API Call
    const subUnsubReq: SubUnsubReq = {
      type: "ifs",
      scrips: indexList,
      channelnum: 1,
    };
    let req = JSON.stringify(subUnsubReq);
    waitForSocketConnection(userWS, function () {
      sendUnsubReq(subUnsubReq);
    });
  };
