import { createSlice } from "@reduxjs/toolkit";
import { IPersonalDetails } from "../../../types/IPersonalDetails";
import { AppThunk } from "../../../store/store";
import { GetProfileData } from "../../../app/api";
interface IMainContainer {
  rightContainer: number;
}

const initialState = {
  rightContainer: 0,
} as IMainContainer;

const UserDetailsState = {
  FullName: "",
  ClientId: "",
  CKYCNO: "",
  Email: "",
  PanNumber: "",
  MobileNumber: "",
  DematNo: "",
  Segments: "",
  AccountPrimary: "",
  BankName: "",
  BranchName: "",
  DepositoryParticipant: "",
  Depository: "",
} as IPersonalDetails;

const personalContainerSlice = createSlice({
  name: "PersonalContainer",
  initialState: {
    initialState: initialState,
    userDetailsState: UserDetailsState,
  },
  reducers: {
    profileContainer: (state) => {
      state.initialState.rightContainer = 0;
    },
    accountmanageContainer: (state) => {
      state.initialState.rightContainer = 1;
    },
    passwordChangeContainer: (state) => {
      state.initialState.rightContainer = 2;
    },
    dematContainer: (state) => {
      state.initialState.rightContainer = 3;
    },
    updatemobileContainer: (state) => {
      state.initialState.rightContainer = 4;
    },
    OnProfileSummarySuccess: (state, action) => {
      state.userDetailsState = action.payload;
    },
    // HoldingError: (state, action) => {
    //   state.userDetailsState = action.payload;
    // },
  },
});

export const {
  profileContainer,
  passwordChangeContainer,
  accountmanageContainer,
  dematContainer,
  OnProfileSummarySuccess,
  updatemobileContainer,
} = personalContainerSlice.actions;
export const fetchPersonal =
  (sessionKey: string): AppThunk =>
  async (dispatch) => {
    try {
      const holdingResponse = await GetProfileData(sessionKey);

      dispatch(OnProfileSummarySuccess(holdingResponse));
    } catch (err: any) {
      // dispatch(HoldingError(err.toString()));
    }
  };
export default personalContainerSlice.reducer;
