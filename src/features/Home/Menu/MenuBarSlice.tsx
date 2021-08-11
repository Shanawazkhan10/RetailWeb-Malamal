import { createSlice } from "@reduxjs/toolkit";

interface IMenuContainer {
    toggleflag: boolean;
  }
  
  const initialState = {
    toggleflag:false,
  } as IMenuContainer;



const MenuBarSlice = createSlice ({
    name:"MenuContainer",
    initialState,
    reducers:{
      showmenuContainer : ( state) => {
               state.toggleflag=true
    },
    closemenuContainer : ( state) => {
      state.toggleflag= false
}
  },
});

export const {
  showmenuContainer,
  closemenuContainer
} = MenuBarSlice.actions;

export default MenuBarSlice.reducer;
