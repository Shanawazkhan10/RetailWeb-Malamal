import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { optionChain } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IoptionMater } from "../../../../types/OptionMaster/IOptionMaster";

// const InitialHolding = {
//   holdinglist: [],
//   totalInvestMent: 0.0,
//   currentValue: 0.0,
//   daysPandL: 0.0,
//   daysPandLPercent: 0.0,
//   totalPandL: 0.0,
//   totalPandLPercent: 0.0,
//   isLoad: false,
// } as IHoldingSate;

const InitialOption = {
  FUTIDX: {
    BANKNIFTY: {
      token: "",
      expiry: [],
    },
    FINNIFTY: {
      token: "",
    },
    NIFTY: {
      token: "",
    },
  },
} as IoptionMater;
const optionMaster = createSlice({
  name: "optionMaster",
  initialState: {
    optionMaster: InitialOption,
  },
  reducers: {
    optionMasterSuccess: (state, action) => {
      //   console.log(action.payload.data);
      state.optionMaster = action.payload.data;
    },
    HoldingError: (state, action) => {
      state.optionMaster = action.payload;
    },
  },
});
export const { optionMasterSuccess, HoldingError } = optionMaster.actions;
export const fetchOptionMaster =
  (sessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const holdingResponse = await optionChain(sessionKey);

      dispatch(optionMasterSuccess(holdingResponse));
    } catch (err: any) {
      dispatch(HoldingError(err.toString()));
    }
  };
export default optionMaster.reducer;
