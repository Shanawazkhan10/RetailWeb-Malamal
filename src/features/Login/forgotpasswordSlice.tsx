import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isUserAuthenticated: false,
  isOTPVerified: false,
  isError: false,
};

export const forgotpasswordSlice = createSlice({
  name: "Forgotpassword",
  initialState,
  reducers: {
    authenticationSuccess: (state, action: PayloadAction<any>) => {
      state.isUserAuthenticated = true;
      state.isOTPVerified = false;
      state.isError = false;
    },
    authenticationError: (state, action: PayloadAction<any>) => {
      state.isUserAuthenticated = false;
      state.isOTPVerified = false;
      state.isError = true;
    },
    otpVerificationSuccess: (state, action: PayloadAction<any>) => {
      state.isUserAuthenticated = true;
      state.isOTPVerified = true;
      state.isError = false;
    },
    otpVerificationError: (state, action: PayloadAction<any>) => {
      state.isUserAuthenticated = true;
      state.isOTPVerified = false;
      state.isError = true;
    },
    changePasswordSucess: (state, action: PayloadAction<any>) => {
      state.isUserAuthenticated=false;
      state.isOTPVerified = false;
      state.isError = false;
    },
    changePasswordError: (state, action: PayloadAction<any>) => {
        state.isUserAuthenticated=true;
        state.isOTPVerified = true;
        state.isError = true;
      },
  },
});
export const {
  authenticationSuccess,
  authenticationError,
  otpVerificationError,
  otpVerificationSuccess,
  changePasswordSucess,
  changePasswordError
} = forgotpasswordSlice.actions;

export default forgotpasswordSlice.reducer;
