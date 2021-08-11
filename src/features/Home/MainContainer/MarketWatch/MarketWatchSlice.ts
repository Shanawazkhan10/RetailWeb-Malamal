import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../../../app/api";
import { IMarketWatchList } from "../../../../types/IMarketWatchList";

const InitialMarketWatch: IMarketWatchList = {
  MarketWatchList: [],
  nSelectedWatchList: 0,
  bIsBind: false,
};

const marketwatchSlice = createSlice({
  name: "marketwatch",
  initialState: {
    marketWatch: InitialMarketWatch,
  },
  reducers: {
    getMarketWatchSuccess(state, action) {
      state.marketWatch.MarketWatchList = action.payload;
      state.marketWatch.bIsBind = true;
      state.marketWatch.nSelectedWatchList = 1;
    },
    ChangeWatchList(state, action) {
      state.marketWatch.nSelectedWatchList = action.payload;
      // state.marketWatch.bIsBind = true;
    },
    DeleteWatchList(state, action) {
      state.marketWatch.MarketWatchList =
        state.marketWatch.MarketWatchList.filter(
          (row) => row.id != action.payload
        );
    },
    AddToWatchList(state, action) {
      state.marketWatch.MarketWatchList.concat(action.payload);
    },
    RenameWatchList(state, action) {
      // state.marketWatch.MarketWatchList = state.marketWatch.MarketWatchList.filter(
      //   (row) => row.id == action.payload
      // );
    },
  },
});

export default marketwatchSlice.reducer;
export const {
  getMarketWatchSuccess,
  ChangeWatchList,
  DeleteWatchList,
  AddToWatchList,
  RenameWatchList,
} = marketwatchSlice.actions;

export const fetchmarketWatch = () => async (dispatch: any) => {
  try {
    await api
      .get<IMarketWatchList[]>("/users")
      .then((response) => dispatch(getMarketWatchSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};
