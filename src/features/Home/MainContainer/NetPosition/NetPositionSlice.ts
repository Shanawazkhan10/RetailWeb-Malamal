import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    NetpositionSuccess(state, action) {
      //NetpositionSuccess(state, { payload }: PayloadAction<Netposition>) {
      //: PayloadAction<Netposition>) {
      // state.isLoading = false;
      //state.error = null;
      //state.NetpositionList?.push(payload);
      //state.netposition.push(payload);
      state.netposition = action.payload;
    },
    NetpositionUpdate(state, action) {
      // let data = [...state.netposition.NetPosition];
      // let index = data.find(
      //   (netposition) => netposition.Token === action.payload
      // );
      // if (index > -1) {
      //   data[index] = action.payload;
      //   return { ...state, DataArray: data };
      // } else return state;
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
  } catch (e) {
    return console.error(e.message);
  }
};
