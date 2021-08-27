import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { IUser } from "../../types/IUser";
import { AppThunk } from "../../store/store";
import { PostLoginRequest, PostMPINRequest } from "../../app/api";
import { toastNotification } from "../.././app/Notification";

const initialState = {
  isPasswordCheked: false,
  isAuthenticated: false,
  isError: false,
  UserId: "",
  user: null,
  sessionKey: "",
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
      state.isPasswordCheked = true;
      state.isAuthenticated = true;
      state.isError = false;
      state.user = action.payload;
      state.sessionKey = action.payload.data.sessionKey;
      state.server = action.payload.data.server;
      localStorage.setItem("sessionKey", state.sessionKey);
    },
    twofaError: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = true;
      state.isAuthenticated = false;
      state.isError = true;
      state.user = action.payload;
      toastNotification("error", action.payload.message);
    },
    loggedout: (state) => {
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
