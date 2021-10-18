import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, GetOrderBook, PostScritInfo } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IOrderView } from "../../../../types/IOrderView";
import { IOrderResponse } from "./../../../../types/Order/IOrderResponse";

const InitialOrderView: IOrderResponse[] = [];

const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState: {
    OrderViewData: InitialOrderView,
  },
  reducers: {
    OrderViewSuccess: (state, action) => {
      state.OrderViewData = action.payload.data;
    },
    OrderUpdate: (state, action) => {
      // state.OrderViewData = state.OrderViewData.map((el) =>
      //   el.tk == action.payload.Token ? action.payload : el
      // );
    },
    OrderError: (state, action) => {},

    onSetScripInfo: (state, action: PayloadAction<any>) => {
      state.OrderViewData.map((Order) => {
        if (Order.sym == action.payload.data[0].sym) {
          Order.hprcChg = action.payload.data[0].hPrcRng;
          Order.lprcChg = action.payload.data[0].lPrcRng;
          Order.lotSz = action.payload.data[0].lotSz;
        }
      });
    },
  },
});

export default OrderSlice.reducer;

export const { OrderViewSuccess, OrderError, onSetScripInfo } =
  OrderSlice.actions;

export const fetchOrderView =
  (sessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const orderResponse = await GetOrderBook(sessionKey);
      dispatch(OrderViewSuccess(orderResponse));
    } catch (err: any) {
      dispatch(OrderError(err.toString()));
    }
  };

export const FetchSymbol =
  (scriptInfoReq: string[], sessionkey: string): AppThunk =>
  async (dispatch) => {
    try {
      const scriptInfoResponse = await PostScritInfo(scriptInfoReq, sessionkey);

      dispatch(onSetScripInfo(scriptInfoResponse));
    } catch (err: any) {
      dispatch(OrderError(err.toString()));
    }
  };
