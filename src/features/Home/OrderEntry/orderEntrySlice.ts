import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PostScritInfo,
  sendCancelOrderRequest,
  sendModifyOrderRequest,
  sendOrderEntryRequest,
} from "../../../app/api";
import { toastNotification } from "../../../app/Notification";
import { AppThunk } from "../../../store/store";
import { IOrderEntry } from "../../../types/OrderEntry/IOrderEntry";
import {
  IOrderCancelRequest,
  IOrderEntryRequest,
  IOrderModifyRequest,
} from "../../../types/Request/IOrderEntryRequest";

const initialState = {
  isOrderEntryOpen: false,
  isBuy: false,
  variety: 0,
  productCode: "I",
  orderType: "MKT",
  isPriceEnabled: false,
  isTriggerPriceEnabled: false,
  isValidityOpen: false,
  validity: "DAY",
  disclosedQty: 0,
  isDisclosedQtyVisible: true,
  isIOCVisible: true,
  triggerprice: "0",
  price: "0",
  typeofOrder: 1, //1:Order Entry 2:Modify,
  on: "",
  vd: "",
  lprcchg: "",
  hprcchg: "",
  lotSz: "",
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
      if (action.payload.price === undefined) {
        state.price = "0";
        state.orderType = "MKT";
        state.isPriceEnabled = false;
      } else {
        state.price = action.payload.price;
        state.orderType = "L";
        state.isPriceEnabled = true;
      }
      state.quantity = action.payload.quantity;
      state.symbol = action.payload.symbol;
      state.exchange = action.payload.exchange;
      state.ltp = action.payload.ltp;
      state.triggerprice = "0";
      state.disclosedQty = 0;
      if (
        //action.payload.order != undefined &&
        action.payload.typeofOrder == 2
      ) {
        state.on = action.payload.on;
        state.vd = action.payload.vd;
        state.typeofOrder = action.payload.typeofOrder;
      } else {
        state.typeofOrder = 1;
      }
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
      state.productCode = "I";
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
      toastNotification("success", "Order Placed : " + action.payload.nOrdNo);
    },
    onOrderEntryRejected: (state, action: PayloadAction<any>) => {
      state.isOrderEntryOpen = false;
      toastNotification("error", "Order Rejected : " + action.payload.comment);
    },
    onOrderEntryError: (state, action: PayloadAction<any>) => {
      state.isOrderEntryOpen = false;
      toastNotification("error", action.payload.message);
    },
    onOrderModifySuccess: (state, action: PayloadAction<any>) => {
      state.isOrderEntryOpen = false;
      toastNotification("success", "Order Modified : " + action.payload.nOrdNo);
    },
    onOrderModifyRejected: (state, action: PayloadAction<any>) => {
      state.isOrderEntryOpen = false;
      toastNotification(
        "error",
        "Order Modification Rejected : " + action.payload.comment
      );
    },
    onOrderCancelSuccess: (state, action: PayloadAction<any>) => {
      //state.isOrderEntryOpen = false;
      toastNotification(
        "success",
        "Order Cancelled : " + action.payload.result
      );
    },
    onOrderCancelRejected: (state, action: PayloadAction<any>) => {
      //state.isOrderEntryOpen = false;
      toastNotification(
        "error",
        "Order Cancellation Rejected : " + action.payload.comment
      );
    },
    onSetScripInfo: (state, action: PayloadAction<any>) => {
      state.symbol = action.payload.data[0].sym;
      state.hprcchg = action.payload.data[0].hPrcRng;
      state.lprcchg = action.payload.data[0].lPrcRng;
      state.lotSz = action.payload.data[0].lotSz;
    },
  },
});

export const placeOrder =
  (orderentryRequest: IOrderEntryRequest): AppThunk =>
  async (dispatch) => {
    try {
      const orderResponse = await sendOrderEntryRequest(orderentryRequest);
      if (Number(orderResponse.stCode) === 200) {
        dispatch(onOrderEntrySuccess(orderResponse));
      } else {
        dispatch(onOrderEntryRejected(orderResponse));
      }
    } catch (err: any) {
      dispatch(onOrderEntryError(err));
    }
  };

export const modifyOrder =
  (orderModifyRequest: IOrderModifyRequest): AppThunk =>
  async (dispatch) => {
    try {
      const orderResponse = await sendModifyOrderRequest(orderModifyRequest);
      if (Number(orderResponse.stCode) === 200) {
        dispatch(onOrderModifySuccess(orderResponse));
      } else {
        dispatch(onOrderModifyRejected(orderResponse));
      }
    } catch (err) {
      dispatch(onOrderEntryError(err));
    }
  };

export const cancelOrder =
  (orderCancelRequest: IOrderCancelRequest): AppThunk =>
  async (dispatch) => {
    try {
      const orderResponse = await sendCancelOrderRequest(orderCancelRequest);
      if (Number(orderResponse.stCode) === 200) {
        dispatch(onOrderCancelSuccess(orderResponse));
      } else {
        dispatch(onOrderCancelRejected(orderResponse));
      }
    } catch (err) {
      dispatch(onOrderEntryError(err));
    }
  };

export const FetchSymbol =
  (scriptInfoReq: string[], sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const scriptInfoResponse = await PostScritInfo(scriptInfoReq, sessionkey);

      dispatch(onSetScripInfo(scriptInfoResponse));
    } catch (err: any) {
      dispatch(onOrderEntryError(err.toString()));
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
  onOrderEntryError,
  onOrderEntryRejected,
  onOrderModifySuccess,
  onOrderModifyRejected,
  onOrderCancelSuccess,
  onOrderCancelRejected,
  onSetScripInfo,
} = orderEntrySlice.actions;

export default orderEntrySlice.reducer;
