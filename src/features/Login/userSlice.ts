import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { IUser } from "../../types/IUser";
import { AppThunk } from "../../store/store";
import { PostLoginRequest, PostMPINRequest } from "../../app/api";
import { toastNotification } from "../.././app/Notification";
import { Redirect } from "react-router";
import Cookies from "universal-cookie";

const initialState = {
  isPasswordCheked: localStorage.getItem("userkey") ? true : false,
  isAuthenticated: localStorage.getItem("userkey") ? true : false,
  isError: false,
  UserId: localStorage.getItem("userID") ? localStorage.getItem("userID") : "",
  user: null,
  sessionKey: localStorage.getItem("userkey")
    ? localStorage.getItem("userkey")
    : "",
  server: "",
  SetPassword: false,
} as IUser;
const cookies = new Cookies();
export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logging: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = false;
      state.isAuthenticated = false;
      state.isError = false;
      state.UserId = action.payload;
      localStorage.setItem("userID", action.payload);
      state.user = null;
    },
    loggedInSuccess: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = true;
      state.isAuthenticated = false;
      state.isError = false;
      state.user = action.payload;
      state.SetPassword = false;
    },
    loggedInSuccessSetPassword: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = true;
      state.isAuthenticated = false;
      state.isError = false;
      state.user = action.payload;
      state.SetPassword = true;
      state.sessionKey = action.payload.data.sessioinkey;
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
      cookies.set("userkey", action.payload.data.sessionKey, {
        path: "/",
        sameSite: "strict",
      });
    },
    twofaError: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = true;
      state.isAuthenticated = false;
      state.isError = true;
      state.user = action.payload;
      toastNotification("error", action.payload.message);
    },
    loggedout: (state) => {
      console.log("Logged Out called");
      localStorage.removeItem("userkey");
      localStorage.removeItem("userID");
      cookies.remove("userkey");
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

      if (Number(LoginResponse.code) == 200) {
        if (Number(LoginResponse.data.action) == 102) {
        } else {
          dispatch(loggedInSuccess(LoginResponse));
        }
      } else if (LoginResponse.status == "FAILURE") {
        dispatch(loggedInError(LoginResponse));
      }
    } catch (err: any) {
      dispatch(loggedInError(err));
    }
  };

export const UserMPINLogin =
  (LoginData: any): AppThunk =>
  async (dispatch) => {
    try {
      const MPINResponse = await PostMPINRequest(LoginData);
      if (MPINResponse.code == 200) {
        dispatch(twofasuccess(MPINResponse));
      } else {
        dispatch(twofaError(MPINResponse));
      }
    } catch (err: any) {
      dispatch(twofaError(err));
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
