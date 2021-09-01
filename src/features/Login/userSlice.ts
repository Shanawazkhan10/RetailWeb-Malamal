import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { IUser } from "../../types/IUser";
import { AppThunk } from "../../store/store";
import { PostLoginRequest, PostMPINRequest } from "../../app/api";
import { toastNotification } from "../.././app/Notification";
import { Redirect } from "react-router";

const initialState = {
  isPasswordCheked: localStorage.getItem("userkey") ? true : false,
  isAuthenticated: localStorage.getItem("userkey") ? true : false,
  isError: false,
  UserId: "",
  user: null,
  sessionKey: localStorage.getItem("userkey")
    ? localStorage.getItem("userkey")
    : "",
  server: "",
} as IUser;

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logging: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = false;
      state.isAuthenticated = false;
      state.isError = false;
      state.UserId = action.payload;
      state.user = null;
    },
    loggedInSuccess: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = true;
      state.isAuthenticated = false;
      state.isError = false;
      state.user = action.payload;
    },
    loggedInError: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = false;
      state.isAuthenticated = false;
      state.isError = true;
      state.user = null;
      toastNotification("error", action.payload.message);
    },
    twofasuccess: (state, action: PayloadAction<any>) => {
      localStorage.setItem("userkey", action.payload.data.sessionKey);
      state.isPasswordCheked = true;
      state.isAuthenticated = true;
      state.isError = false;
      state.user = action.payload;
      state.sessionKey = state.user.data.sessionKey;
      state.server = state.user.data.server;
      localStorage.setItem("sessionKey", action.payload.data.sessionKey);
    },
    twofaError: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = true;
      state.isAuthenticated = false;
      state.isError = true;
      state.user = action.payload;
      toastNotification("error", action.payload.message);
    },
    loggedout: (state) => {
      localStorage.removeItem("userkey");
      state.isPasswordCheked = false;
      state.isAuthenticated = false;
      state.isError = false;
      state.user = null;
    },
  },
});

export const UserLogin =
  (loginData: any): AppThunk =>
  async (dispatch) => {
    try {
      const LoginResponse = await PostLoginRequest(loginData);
      if (LoginResponse.code == 200) {
        dispatch(loggedInSuccess(LoginResponse));
      } else if (LoginResponse.status == "FAILURE") {
        dispatch(loggedInError(LoginResponse));
      }
    } catch (err) {
      dispatch(loggedInError(err.toString()));
    }
  };

export const UserMPINLogin =
  (LoginData: any): AppThunk =>
  async (dispatch) => {
    try {
      const MPINResponse = await PostMPINRequest(LoginData);
      dispatch(twofasuccess(MPINResponse));
    } catch (err) {
      dispatch(loggedInError(err.toString()));
    }
  };

export const {
  logging,
  loggedInSuccess,
  loggedInError,
  twofasuccess,
  twofaError,
  loggedout,
} = userSlice.actions;

export default userSlice.reducer;
