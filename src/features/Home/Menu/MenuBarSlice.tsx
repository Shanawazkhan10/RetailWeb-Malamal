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
    ToggleMenuContainer: (state, action) => {
      state.toggleflag = action.payload;
    },
  },
});

export const { ToggleMenuContainer } = MenuBarSlice.actions;

export default MenuBarSlice.reducer;
