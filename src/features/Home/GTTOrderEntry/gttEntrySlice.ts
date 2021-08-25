import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGTTEntry } from "../../../types/IGTTEntry";

const initialState = {
  isGTTEntryOpen: false,
  isBuy: true,
  triggerType: 0,
  variety: 0,
  productCode: 1,
  orderType: 1,
  slproductCode: 1,
  slorderType: 1,
  isPriceEnabled: false,
  isTriggerPriceEnabled: false,  
  isOCOenabled: false,  
} as IGTTEntry;

export const gttEntrySlice = createSlice({
  name: "GTTEntry",
  initialState,
  reducers: {
    setGTTEntryProps: (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
      state.price = action.payload.price;
      state.quantity = action.payload.quantity;
      state.symbol = action.payload.symbol;
      state.exchange = action.payload.exchange;
      state.isPriceEnabled = true;
      state.ltp = action.payload.ltp;
      state.slprice = action.payload.price;      
      state.slquantity = action.payload.quantity;
      state.LTPchange="5";
      state.triggerprice = (state.ltp+ (state.ltp * (Number(state.LTPchange)/100))).toFixed(2);
      state.slLTPChange="-5";
      state.sltriggerprice = (state.ltp + (state.ltp * (Number(state.slLTPChange)/100))).toFixed(2);
      state.orderType = 1;
    },
    openGTTEntry: (state) => {
      state.isBuy= true;
      state.triggerType = 0;
      state.isGTTEntryOpen = true;
    },
    closeGTTEntry: (state) => {
      state.isGTTEntryOpen = false;
    },
    setBuyOrderEntry: (state) => {
      state.isBuy = true;
      state.isOCOenabled = false;
    },
    setSellOrderEntry: (state) => {
      state.isBuy = false;
      state.isOCOenabled = true;
    },
    setCNCProductCode: (state) => {
      state.productCode = 1;
    },
    setMISProductCode: (state) => {
      state.productCode = 0;
    },
    setSLCNCProductCode: (state) => {
      state.slproductCode = 1;
    },
    setSLMISProductCode: (state) => {
      state.slproductCode = 0;
    },    
    setTriggertype: (state, action: PayloadAction<number>) => {
      state.triggerType = action.payload;
    },
    setTriggerPrice:(state, action: PayloadAction<string>) => {
      state.LTPchange =(((Number(action.payload) -state.ltp)/Number(action.payload))*100).toFixed(2);
      state.triggerprice = action.payload;
    },
    setQty:(state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    setPrice:(state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setSLTriggerPrice:(state, action: PayloadAction<string>) => {      
      state.slLTPChange=(((Number(action.payload) -state.ltp)/Number(action.payload))*100).toFixed(2);
      state.sltriggerprice = action.payload;
    },
    setSLQty:(state, action: PayloadAction<number>) => {
      state.slquantity = action.payload;
    },
    setSLPrice:(state, action: PayloadAction<string>) => {
      state.slprice = action.payload;
    },
    setLTPChange:(state, action: PayloadAction<string>) => {
      state.LTPchange = action.payload;
      state.triggerprice = (state.ltp+ (state.ltp * (Number(state.LTPchange)/100))).toFixed(2);
    },
    setSLLTPChange:(state, action: PayloadAction<string>) => {
      state.slLTPChange = action.payload;
      state.sltriggerprice = (state.ltp + (state.ltp * (Number(state.slLTPChange)/100))).toFixed(2);      
    },
  },
});

export const {
  openGTTEntry,
  closeGTTEntry,
  setBuyOrderEntry,
  setSellOrderEntry,
  setTriggertype,
  setGTTEntryProps,
  setTriggerPrice,
  setQty,
  setPrice,
  setSLPrice,
  setSLTriggerPrice,
  setSLQty,
  setLTPChange,
  setSLLTPChange,
} = gttEntrySlice.actions;

export default gttEntrySlice.reducer;
