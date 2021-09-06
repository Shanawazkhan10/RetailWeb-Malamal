import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../../../app/api";
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
      state.netposition = action.payload.data;
    },
    NetpositionUpdate(state, action) {
      state.netposition.NetPosition = state.netposition.NetPosition.map((el) =>
        el.Token == action.payload.Token ? action.payload : el
      );
    },
  },
});

export default netposition.reducer;

export const { NetpositionSuccess, NetpositionUpdate } = netposition.actions;

export const fetchNetposition = () => async (dispatch: any) => {
  try {
    await api
      .get<NetpositionSummary[]>("/users")
      .then((response) => dispatch(NetpositionSuccess(response.data)));
  } catch (e:any) {
    return console.error(e.message);
  }
};
