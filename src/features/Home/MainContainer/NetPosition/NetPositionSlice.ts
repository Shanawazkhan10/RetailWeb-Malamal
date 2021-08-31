import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, getNetposition } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { NetpositionSummary } from "../../../../types/INetpositionSummary";

// interface NetpositionState {
//   //isLoading: boolean;
//   //error: string | null;
//   NetpositionList: Netposition[] | null;
// }

// const NetpositionInitialState: NetpositionState = {
//   //isLoading: false,
//   //error: null,
//   NetpositionList: [],
// };

const InitialNetposition: NetpositionSummary = {
  Invested: "",
  Current: "",
  PL: "",
  NetPosition: [],
};

// const InitialNetposition: NetpositionSummary = {
//     Invested: null,
//     Current: null,
//     PL: null,
//     Netposition: [],
// };

const netposition = createSlice({
  name: "netposition",
  initialState: {
    netposition: InitialNetposition,
  },
  reducers: {
    NetpositionSuccess: (state, action) => {
      state.netposition = action.payload;
    },
    NetpositionUpdate(state, action) {
      state.netposition.NetPosition = state.netposition.NetPosition.map((el) =>
        el.Token == action.payload.Token ? action.payload : el
      );
    },
    NetpositionError(state, action) {},
  },
});

export default netposition.reducer;

export const { NetpositionSuccess, NetpositionUpdate, NetpositionError } =
  netposition.actions;

export const fetchNetposition = (): AppThunk => async (dispatch) => {
  try {
    const positionResponse = await getNetposition();
    dispatch(NetpositionSuccess(positionResponse));
  } catch (err) {
    dispatch(NetpositionError(err.toString()));
  }
};
