import { IFunds } from "../../../../types/Funds/IFund";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Payment from "./Payment";

const InitialPayment: IFunds = {
  bShow: false,
};

const payment = createSlice({
  name: "payment",
  initialState: {
    payment: InitialPayment,
  },
  reducers: {
    PaymentSuccess: (state, action) => {
      state.payment = action.payload.data;
    },
    ShowPayment: (state, action) => {
      state.payment.bShow = true;
    },
  },
});

export default payment.reducer;

export const { PaymentSuccess, ShowPayment } = payment.actions;
