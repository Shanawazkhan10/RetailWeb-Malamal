import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../../../app/api";
import { ITradeView } from "../../../../types/ITradeView";

const InitialTradeView: ITradeView[] = [];

const TradeSlice = createSlice({
  name: "TradeSlice",
  initialState: {
    TradeViewData: InitialTradeView,
  },
  reducers: {
    TradeViewSuccess: (state, action) => {
      state.TradeViewData = action.payload;
    },
    TradeUpdate(state, action) {
      state.TradeViewData = state.TradeViewData.map((el) =>
        el.Token == action.payload.Token ? action.payload : el
      );
    },
  },
});

export default TradeSlice.reducer;

export const { TradeViewSuccess } = TradeSlice.actions;

export const fetchTradeView = () => async (dispatch: any) => {
  try {
    await api
      .get<ITradeView[]>("/users")
      .then((response) => dispatch(TradeViewSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};
