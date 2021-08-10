import { createSlice } from "@reduxjs/toolkit";
import { IOrderEntryprops } from "../../../types/IOrderEntryprops";

const initialState = {
    isOrderEntryOpen: false,
    isBuy:false,
} as IOrderEntryprops;

export const orderEntrySlice = createSlice({
    name :'OrderEntry',
    initialState,
    reducers:{        
        openBuyOrderEntry:(state)=>{
            state.isOrderEntryOpen=true;
            state.isBuy=true;
        },
        openSellOrderEntry:(state)=>{
            state.isOrderEntryOpen=true;
            state.isBuy=false;
        },
        closeOrderEntry:(state)=>{
            state.isOrderEntryOpen=false;
            state.isBuy=false;
        },
    }
});

export const {openBuyOrderEntry,openSellOrderEntry,closeOrderEntry} = orderEntrySlice.actions;

export default orderEntrySlice.reducer;