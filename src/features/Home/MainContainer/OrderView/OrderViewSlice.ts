import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../../../app/api";
import { IOrderView } from "../../../../types/IOrderView";

const InitialOrderView: IOrderView[] = [];

const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState: {
    OrderViewData: InitialOrderView,
  },
  reducers: {
    OrderViewSuccess(state, action) {
      state.OrderViewData = action.payload;
    },
    OrderUpdate(state, action) {
      state.OrderViewData = state.OrderViewData.map((el) =>
        el.Token == action.payload.Token ? action.payload : el
      );
    },
  },
});

export default OrderSlice.reducer;

export const { OrderViewSuccess } = OrderSlice.actions;

export const fetchOrderView = () => async (dispatch: any) => {
  try {
    await api
      .get<IOrderView[]>("/users")
      .then((response) => dispatch(OrderViewSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};
