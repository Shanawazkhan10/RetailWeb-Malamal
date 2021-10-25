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
  symbol: [],
  symbolInfo: [],
  OptionSeries: "",
  Expire: [],
  underLineToken: "",
  expiry: [],
  // symbolName
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
      const DataKey = Object.keys(state.optionMaster);
      const DataValue = Object.values(state.optionMaster)[1];
      const dataofdata = Object.keys(DataValue);
      //getting all keys value
      const ArrayAllSymbol = [];
      const ArrayAllexpiry = [];
      const ArrayAllToken = [];
      const dataVal = Object.values(state.optionMaster);
      for (let k of dataVal) {
        for (let m of Object.keys(k)) {
          ArrayAllSymbol.push(m);
        }
      }
      for (let k of dataVal) {
        for (let m of Object.values(k)) {
          ArrayAllexpiry.push(m.expiry);
          ArrayAllToken.push(m.token);
        }
      }
      console.log("Expiry", ArrayAllexpiry);
      console.log("TOKEN", ArrayAllToken);
      // console.log("SYMBOL", state.optionMaster);
      console.log("SYMBOL", ArrayAllSymbol);
      // for Getting Expiry an token
      const OptionExpiry = [];
      const OptionToken = [];
      for (const elm of Object.values(DataValue)) {
        OptionExpiry.push(elm.expiry);
        OptionToken.push(elm.token);
      }
      // for OPTION MASTER
      var OptionArray = [];
      for (const element of DataKey) {
        OptionArray.push(element);
      }
      // get from array an asign to state
      state.optionMaster.symbol = OptionArray;
      // console.log("optionMaster", state.optionMaster.symbol);
      // setting to state
      state.optionMaster.symbol = ArrayAllSymbol;
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
