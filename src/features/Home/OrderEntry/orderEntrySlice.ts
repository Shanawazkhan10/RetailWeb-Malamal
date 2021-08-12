import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { IOrderEntryprops } from "../../../types/IOrderEntryprops";

const initialState = {
    isOrderEntryOpen: false,
    isBuy:false,
    productCode:0,
    orderType:0,
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
        selectProductCode:(state,action:PayloadAction<number>)=>{
            state.productCode=action.payload;
        },
    }
});

export const {openBuyOrderEntry,openSellOrderEntry,closeOrderEntry,selectProductCode} = orderEntrySlice.actions;

export default orderEntrySlice.reducer;