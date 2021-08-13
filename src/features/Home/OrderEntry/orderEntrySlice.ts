import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { IOrderEntryprops } from "../../../types/IOrderEntryprops";

const initialState = {
    isOrderEntryOpen: false,
    isBuy:false,
    variety:0,
    productCode:0,        
    orderType:0,
} as IOrderEntryprops;

// PRODUCT TYPE
// NRML		Normal          -->0
// CNC		Cash and Carry  -->1
// MIS		MIS             -->2
// INTRADAY	INTRADAY        -->3
// CO		Cover Order     -->4
// BO		Bracket Order   -->5

//ORDER TYPE
// L		Limit               -->0
// MKT		Market              -->1
// SL		Stop loss limit     -->2
// SL-M	    Stop loss market    -->3	

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
        selectVariety:(state,action:PayloadAction<number>)=>{            
            state.variety=action.payload;
        },
    }
});

export const {openBuyOrderEntry,openSellOrderEntry,closeOrderEntry,selectProductCode,selectVariety} = orderEntrySlice.actions;

export default orderEntrySlice.reducer;