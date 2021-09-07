import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Getallindicesdata } from "../../../app/api";
import { AppThunk } from "../../../store/store";
import { IIndicesList } from "../../../types/Indices/IIndicesList";

const initialState = {
  IndicesList: [],
  isError: false,
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
    },
    onIndicesFetchError: (state, action: PayloadAction<any>) => {
      state.isError = true;
    },
  },
});

export const{onIndicesLoading,onIndicesFetchSuccess,onIndicesFetchError}=indicesSlice.actions;

export default indicesSlice.reducer;

export const GetAllIndicesData =
  (sessionkey:string): AppThunk =>
  async (dispatch) => {
    try {
      const indicesRepsonse = await Getallindicesdata(sessionkey);

      
    } catch (error) {
      dispatch(onIndicesFetchError);
    } 
  };


