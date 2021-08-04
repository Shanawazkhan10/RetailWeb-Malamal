import { createSlice } from "@reduxjs/toolkit";
import { IOrderEntryprops } from "../../../types/IOrderEntryprops";

const initialState = {
    isOrderEntryOpen: false,
    nBuySell:1,

} as IOrderEntryprops;

export const orderEntrySlice = createSlice({
    name :'OrderEntry',
    initialState,
    reducers:{
        openBuyOrderEntry:(state)=>{
            state.isOrderEntryOpen=true;
            state.nBuySell=1;
        },
        openSellOrderEntry:(state)=>{
            state.isOrderEntryOpen=true;
            state.nBuySell=2;
        },
        closeOrderEntry:(state)=>{
            state.isOrderEntryOpen=false;
            state.nBuySell=1;
        },
    }
});

export const {openBuyOrderEntry,openSellOrderEntry,closeOrderEntry} = orderEntrySlice.actions;

export default orderEntrySlice.reducer;