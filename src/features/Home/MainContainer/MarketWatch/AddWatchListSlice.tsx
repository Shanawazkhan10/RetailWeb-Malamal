import { createSlice } from "@reduxjs/toolkit";
import { INewWatchList } from "../../../../types/WatchList/INewWatchList";

const InititalWatchList: INewWatchList = {
  scrips: [],
  symbol: "",
};

const AddWatchListSlice = createSlice({
  name: "addwatchlist",
  initialState: {
    newlyaddedWatchList: InititalWatchList,
  },
  reducers: {
    onNewWatchList: (state, action) => {
      state.newlyaddedWatchList.scrips.push(action.payload.scrips);
      state.newlyaddedWatchList.symbol = action.payload.symbol;
    },
  },
});

export default AddWatchListSlice.reducer;

export const { onNewWatchList } = AddWatchListSlice.actions;
