import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, GetTradeBook } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { ITradeView } from "../../../../types/ITradeView";

const InitialTradeView: ITradeView[] = [];

const TradeSlice = createSlice({
  name: "TradeSlice",
  initialState: {
    TradeViewData: InitialTradeView,
  },
  reducers: {
    TradeViewSuccess: (state, action) => {
      state.TradeViewData = action.payload.data;
    },
    TradeUpdate(state, action) {
      state.TradeViewData = state.TradeViewData.map((el) =>
        el.Token == action.payload.Token ? action.payload : el
      );
    },
    TradeError: (state, action) => {},
  },
});

export default TradeSlice.reducer;

export const { TradeViewSuccess, TradeError, TradeUpdate } = TradeSlice.actions;

export const fetchTradeView = (sessionKey:string): AppThunk => async (dispatch) => {
  try {
    const tradeResponse = await GetTradeBook(sessionKey);
    dispatch(TradeViewSuccess(tradeResponse));
  } catch (err) {
    dispatch(TradeError(err.toString()));
  }
};
