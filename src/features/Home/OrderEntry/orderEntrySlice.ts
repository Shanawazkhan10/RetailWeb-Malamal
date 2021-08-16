import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderEntryprops } from "../../../types/IOrderEntryprops";

const initialState = {
  isOrderEntryOpen: false,
  isBuy: false,
  variety: 0,
  productCode: 0,
  orderType: 0,
  isPriceEnabled: false,
  isTriggerPriceEnabled: false,
  price: 0,
  triggerprice: 0,
  qty: 1,
  isValidityOpen: false,
  validity: 0,
  disclosedQty: 0,
  isDisclosedQtyVisible:true,
  isIOCVisible:true,
} as IOrderEntryprops;

// PRODUCT TYPE
// NRML		Normal          -->0
// CNC		Cash and Carry  -->1
// MIS		MIS             -->2
// INTRADAY	INTRADAY        -->3
// CO		Cover Order     -->4
// BO		Bracket Order   -->5

//ORDER TYPE
// L		Limit               -->0
// MKT		Market              -->1
// SL		Stop loss limit     -->2
// SL-M	    Stop loss market    -->3

export const orderEntrySlice = createSlice({
  name: "OrderEntry",
  initialState,
  reducers: {
    openBuyOrderEntry: (state) => {
      state.isOrderEntryOpen = true;
      state.isBuy = true;
    },
    openSellOrderEntry: (state) => {
      state.isOrderEntryOpen = true;
      state.isBuy = false;
    },
    closeOrderEntry: (state) => {
      state.isOrderEntryOpen = false;
      state.isBuy = false;
    },
    selectProductCode: (state, action: PayloadAction<number>) => {
      state.productCode = action.payload;
    },
    selectRegularVariety: (state) => {
      state.variety = 0;
      state.isDisclosedQtyVisible= true;
      state.isIOCVisible = true;
      state.validity=0;
    },
    selectCoverVariety: (state) => {
      state.variety = 1;
      state.productCode = 0;
      state.isDisclosedQtyVisible= false;
      state.isIOCVisible = false;
      state.validity=0;
    },
    selectAMOVariety: (state) => {
      state.variety = 2;
      state.isDisclosedQtyVisible= true;
      state.isIOCVisible = true;
      state.validity=0;
    },
    setMarketOrder: (state) => {
      state.isPriceEnabled = false;
      state.isTriggerPriceEnabled = false;
      state.orderType = 0;
      state.price = 0;
      state.triggerprice = 0;
    },
    setLimitOrder: (state) => {
      state.isPriceEnabled = true;
      state.isTriggerPriceEnabled = false;
      state.orderType = 1;
      state.triggerprice = 0;
    },
    setSLOrder: (state) => {
      state.isPriceEnabled = true;
      state.isTriggerPriceEnabled = true;
      state.orderType = 2;
    },
    setSLMOrder: (state) => {
      state.isPriceEnabled = false;
      state.isTriggerPriceEnabled = true;
      state.orderType = 3;
      state.price = 0;
      state.triggerprice = 0;
    },
    setQty: (state, action: PayloadAction<number>) => {
      state.qty = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setTriggerPrice: (state, action: PayloadAction<number>) => {
      state.triggerprice = action.payload;
    },
    setValidityWindow: (state) => {
      state.isValidityOpen = !state.isValidityOpen;
    },
    setDayValidity: (state) => {
      state.validity = 0;
      state.isDisclosedQtyVisible= true;
    },
    setIOCValidity: (state) => {
      state.validity = 1;
      state.isDisclosedQtyVisible= false;
    },
    setDisclosedQty: (state, action: PayloadAction<number>) => {
      state.disclosedQty = action.payload;      
    },
  },
});

export const {
  openBuyOrderEntry,
  openSellOrderEntry,
  closeOrderEntry,
  selectProductCode,
  selectRegularVariety,
  selectCoverVariety,
  selectAMOVariety,
  setMarketOrder,
  setLimitOrder,
  setSLOrder,
  setSLMOrder,
  setQty,
  setPrice,
  setTriggerPrice,
  setValidityWindow,
  setDayValidity,
  setIOCValidity,
  setDisclosedQty,  
} = orderEntrySlice.actions;

export default orderEntrySlice.reducer;
