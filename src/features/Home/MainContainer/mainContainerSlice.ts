import { createSlice } from "@reduxjs/toolkit";

interface IMainContainer {
  rightContainer: number;
  IsPersonal: boolean;
}

const initialState = {
  rightContainer: 0,
  IsPersonal: false,
} as IMainContainer;

const mainContainerSlice = createSlice({
  name: "MainContainer",
  initialState,
  reducers: {
    dashboardContainer: (state) => {
      state.rightContainer = 0;
      state.IsPersonal = false;
    },
    chartContainer: (state) => {
      state.rightContainer = 1;
      state.IsPersonal = false;
    },
    holdingContainer: (state) => {
      state.rightContainer = 2;
      state.IsPersonal = false;
    },
    positionContainer: (state) => {
      state.rightContainer = 3;
      state.IsPersonal = false;
    },
    orderContainer: (state) => {
      state.rightContainer = 4;
      state.IsPersonal = false;
    },
    fundContainer: (state) => {
      state.rightContainer = 5;
      state.IsPersonal = false;
    },
    myprofileContainer: (state) => {
      state.rightContainer = 6;
      state.IsPersonal = true;
    },
    
  },
});

export const {
  dashboardContainer,
  chartContainer,
  holdingContainer,
  positionContainer,
  orderContainer,
  fundContainer,
  myprofileContainer,
} = mainContainerSlice.actions;

export default mainContainerSlice.reducer;
