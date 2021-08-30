import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, GetOrderBook } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { IOrderView } from "../../../../types/IOrderView";

const InitialOrderView: IOrderView[] = [];

const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState: {
    OrderViewData: InitialOrderView,
  },
  reducers: {
    OrderViewSuccess: (state, action) => {
      state.OrderViewData = action.payload;
    },
    OrderUpdate: (state, action) => {
      state.OrderViewData = state.OrderViewData.map((el) =>
        el.Token == action.payload.Token ? action.payload : el
      );
    },
    OrderError: (state, action) => {},
  },
});

export default OrderSlice.reducer;

export const { OrderViewSuccess, OrderError } = OrderSlice.actions;

export const fetchOrderView = (): AppThunk => async (dispatch) => {
  try {
    const orderResponse = await GetOrderBook();
    dispatch(OrderViewSuccess(orderResponse));
  } catch (err) {
    dispatch(OrderError(err.toString()));
  }
};
