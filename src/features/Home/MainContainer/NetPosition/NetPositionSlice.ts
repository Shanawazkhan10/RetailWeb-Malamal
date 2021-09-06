import { createSlice } from "@reduxjs/toolkit";
import { api, getNetposition } from "../../../../app/api";
import { AppThunk } from "../../../../store/store";
import { NetpositionSummary } from "../../../../types/INetpositionSummary";
import { INetPosition } from "./../../../../types/INetposition";

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

const InitialNetposition: INetPosition[] = [];

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
      state.netposition = action.payload.data;
    },
    NetpositionUpdate(state, action) {
      // state.netposition.NetPosition = state.netposition.NetPosition.map((el) =>
      // el.Token == action.payload.Token ? action.payload : el
      //);
    },
  },
});

export default netposition.reducer;

export const { NetpositionSuccess, NetpositionUpdate } = netposition.actions;

// export const fetchNetposition = () => async (dispatch: any) => {
//   try {
//     await api
//       .get<NetpositionSummary[]>("/users")
//       .then((response) => dispatch(NetpositionSuccess(response.data)));
//   } catch (e) {
//     return console.error(e.message);
//   }
// };

export const fetchNetposition = (): AppThunk => async (dispatch) => {
  try {
    const positionResponse = await getNetposition();
    dispatch(NetpositionSuccess(positionResponse));
  } catch (err) {
    //dispatch(TradeError(err.toString()));
  }
};
