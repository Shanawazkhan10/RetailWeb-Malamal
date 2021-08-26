import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { IUser } from "../../types/IUser";
import { AppThunk } from "../../store/store";
import { PostLoginRequest, PostMPINRequest } from "../../app/api";

const initialState = {
  isPasswordCheked: false,
  isAuthenticated: false,
  isError: false,
  UserId: "",
  user: null,
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
    },
    twofasuccess: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = true;
      state.isAuthenticated = true;
      state.isError = false;
      state.user = action.payload;
    },
    twofaError: (state, action: PayloadAction<any>) => {
      state.isPasswordCheked = true;
      state.isAuthenticated = false;
      state.isError = true;
      state.user = action.payload;
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
  (CallFrom: string, loginData: any): AppThunk =>
  async (dispatch) => {
    try {
      if (CallFrom == "Login") {
        let LoginResponse = await PostLoginRequest(loginData);

        if (LoginResponse.code == 200) {
          dispatch(loggedInSuccess(LoginResponse));
        } else {
          dispatch(loggedInError(LoginResponse));
        }
      } else if (CallFrom == "MPIN") {
        let MPINResponse = await PostMPINRequest(loginData);
        dispatch(twofasuccess(MPINResponse));
      }
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
