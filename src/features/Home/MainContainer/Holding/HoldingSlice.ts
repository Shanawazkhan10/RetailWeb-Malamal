import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHolding } from "../../../../types/IHolding";
import { api } from "../../../../app/api";

const InitialHolding: IHolding[] = [];

const holding = createSlice({
  name: "holding",
  initialState: {
    holding: InitialHolding,
  },
  reducers: {
    HoldingSuccess(state, action) {
      state.holding = action.payload;
    },

    HoldingUpdate(state, action) {
      state.holding = state.holding.map((el) =>
        el.Token == action.payload.Token ? action.payload : el
      );
    },
  },
});

export default holding.reducer;

export const { HoldingSuccess } = holding.actions;

export const fetchNetposition = () => async (dispatch: any) => {
  try {
    await api
      .get<IHolding[]>("/users")
      .then((response) => dispatch(HoldingSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};
