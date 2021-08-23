import { createSlice } from "@reduxjs/toolkit";
import { IIPODetails } from "../../../types/IIPODetails";

const IPODetailsState = {
  InstrumentName: "",
  StartDate: "",
  EndDate: "",
  PriceRange: "",
  MinQty: "",
  Status: "",
  AllotmentFinalizationDate: "",
  RefundInitializationDate: "",
  DematTransferDate: "",
  ListingDate: "",
  MandateEndDate: "",
} as IIPODetails;

const ipoContainerSlice = createSlice({
  name: "IPOContainer",
  initialState: {
    ipoDetails: IPODetailsState,
  },
  reducers: {
    OnIPODetailsFetch: (state, action) => {
      state.ipoDetails = action.payload;
    },
  },
});

export const { OnIPODetailsFetch } = ipoContainerSlice.actions;

export default ipoContainerSlice.reducer;
