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
    dashboardContainer:(state)=>{
        state.rightContainer=0;        
    },
    chartContainer:(state)=>{
        state.rightContainer=1;        
    },
  },
});

export const {dashboardContainer,chartContainer} = mainContainerSlice.actions;

export default mainContainerSlice.reducer;

