import { IFunds } from "../../../../types/Funds/IFund";
import { useDispatch } from "react-redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, getPaymentOrderId } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import Payment from "./Payment";

const InitialPayment: IFunds = {
  bShow: false,
  orderId: "",
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
    PaymentOrderIdSuccess: (state, action) => {
      state.payment.orderId = action.payload.data.id;
      //console.log('action data',action.payload.data.id)
    },
    PaymentOrderIdCancel: (state, action) => {
      //console.log('satte called')
      state.payment.orderId = "";
    },
  },
});

export default payment.reducer;

export const {
  PaymentSuccess,
  ShowPayment,
  PaymentOrderIdSuccess,
  PaymentOrderIdCancel,
} = payment.actions;
export const getsPaymentsOrderIds =
  (sessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const paymentResponseorderId = await getPaymentOrderId(sessionKey);
      //console.log(paymentResponseorderId);
      // dispatch(OrderIdSuccess(holdingResponse));
      dispatch(PaymentOrderIdSuccess(paymentResponseorderId));
    } catch (err: any) {
      // dispatch(HoldingError(err.toString()));
    }
  };
