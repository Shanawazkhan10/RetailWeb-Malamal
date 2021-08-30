import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendOrderEntryRequest } from "../../../app/api";
import { toastNotification } from "../../../app/Notification";
import { AppThunk } from "../../../store/store";
import { IOrderEntry } from "../../../types/OrderEntry/IOrderEntry";
import { IOrderEntryRequest } from "../../../types/Request/IOrderEntryRequest";

const initialState = {
  isOrderEntryOpen: false,
  isBuy: false,
  variety: 0,
  productCode: "MIS",
  orderType: "MKT",
  isPriceEnabled: false,
  isTriggerPriceEnabled: false,
  isValidityOpen: false,
  validity: "DAY",
  disclosedQty: 0,
  isDisclosedQtyVisible: true,
  isIOCVisible: true,
  triggerprice: "0",
} as IOrderEntry;

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
    setOrderEntryProps: (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
      state.price = action.payload.price;
      state.quantity = action.payload.quantity;
      state.symbol = action.payload.symbol;
      state.exchange = action.payload.exchange;
      state.isPriceEnabled = true;
      state.ltp = action.payload.ltp;
      state.orderType = "L";
    },
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
    selectProductCode: (state, action: PayloadAction<string>) => {
      state.productCode = action.payload;
    },
    selectRegularVariety: (state) => {
      state.variety = 0;
      state.isDisclosedQtyVisible = true;
      state.isIOCVisible = true;
      state.validity = "DAY";
    },
    selectCoverVariety: (state) => {
      state.variety = 1;
      state.productCode = "MIS";
      state.isDisclosedQtyVisible = false;
      state.isIOCVisible = false;
      state.validity = "DAY";
    },
    selectAMOVariety: (state) => {
      state.variety = 2;
      state.isDisclosedQtyVisible = true;
      state.isIOCVisible = true;
      state.validity = "DAY";
    },
    setMarketOrder: (state) => {
      state.isPriceEnabled = false;
      state.isTriggerPriceEnabled = false;
      state.orderType = "MKT";
      state.price = "0";
      state.triggerprice = "0";
    },
    setLimitOrder: (state) => {
      state.isPriceEnabled = true;
      state.isTriggerPriceEnabled = false;
      state.orderType = "L";
      state.triggerprice = "0";
    },
    setSLOrder: (state) => {
      state.isPriceEnabled = true;
      state.isTriggerPriceEnabled = true;
      state.orderType = "SL";
    },
    setSLMOrder: (state) => {
      state.isPriceEnabled = false;
      state.isTriggerPriceEnabled = true;
      state.orderType = "SL-M";
      state.price = "0";
      state.triggerprice = "0";
    },
    setQty: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setTriggerPrice: (state, action: PayloadAction<string>) => {
      state.triggerprice = action.payload;
    },
    setValidityWindow: (state) => {
      state.isValidityOpen = !state.isValidityOpen;
    },
    setDayValidity: (state) => {
      state.validity = "DAY";
      state.isDisclosedQtyVisible = true;
    },
    setIOCValidity: (state) => {
      state.validity = "IOC";
      state.isDisclosedQtyVisible = false;
    },
    setDisclosedQty: (state, action: PayloadAction<number>) => {
      state.disclosedQty = action.payload;
    },
    onOrderEntrySuccess: (state, action: PayloadAction<any>) => {            
      state.isOrderEntryOpen = false;
      toastNotification("success","Order Placed");
    },
    onOrderEntryError: (state, action: PayloadAction<any>) => {      
      state.isOrderEntryOpen = false;
      toastNotification("error",action.payload.message);
    },
  },
});

export const placeOrder =
  (orderentryRequest: IOrderEntryRequest): AppThunk =>
  async (dispatch) => {
    try {
      const orderResponse = await sendOrderEntryRequest(orderentryRequest);
      dispatch(onOrderEntrySuccess(orderResponse));
    } catch (err) {
      dispatch(onOrderEntryError(err));
    }
  };

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
  setOrderEntryProps,
  onOrderEntrySuccess,
  onOrderEntryError
} = orderEntrySlice.actions;

export default orderEntrySlice.reducer;
