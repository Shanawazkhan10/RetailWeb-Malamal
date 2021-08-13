import { createSlice } from "@reduxjs/toolkit";

interface IMainContainer {
  rightContainer: number;
}

const initialState = {
  rightContainer: 0,
} as IMainContainer;

const personalContainerSlice = createSlice({
  name: "PersonalContainer",
  initialState,
  reducers: {
    myprofileContainer: (state) => {
      state.rightContainer = 0;
    },
    DematDetailsContainer: (state) => {
      state.rightContainer = 1;
    },
    accountmanageContainer: (state) => {
      state.rightContainer = 2;
    },
  },
});

export const {
  myprofileContainer,
  DematDetailsContainer,
  accountmanageContainer,
} = personalContainerSlice.actions;

export default personalContainerSlice.reducer;
