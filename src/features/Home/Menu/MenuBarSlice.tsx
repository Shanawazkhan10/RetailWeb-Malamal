import { createSlice } from "@reduxjs/toolkit";

interface IMenuContainer {
  toggleflag: boolean;
}

const initialState = {
  toggleflag: false,
} as IMenuContainer;

const MenuBarSlice = createSlice({
  name: "MenuContainer",
  initialState,
  reducers: {
    showmenuContainer: (state, action) => {
      state.toggleflag = action.payload;
    },
  },
});

export const { showmenuContainer } = MenuBarSlice.actions;

export default MenuBarSlice.reducer;
