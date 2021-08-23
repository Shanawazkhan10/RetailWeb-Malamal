import { createSlice } from "@reduxjs/toolkit";

interface IMainContainer {
  rightContainer: number;
}

const initialState = {
  rightContainer: 0,
} as IMainContainer;

const mainContainerSlice = createSlice({
  name: "MainContainer",
  initialState,
  reducers: {
    dashboardContainer: (state) => {
      state.rightContainer = 0;
    },
    chartContainer: (state) => {
      state.rightContainer = 1;
    },
    holdingContainer: (state) => {
      state.rightContainer = 2;
    },
    positionContainer: (state) => {
      state.rightContainer = 3;
    },
    orderContainer: (state) => {
      state.rightContainer = 4;
    },
    fundContainer: (state) => {
      state.rightContainer = 5;
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
} = mainContainerSlice.actions;

export default mainContainerSlice.reducer;
