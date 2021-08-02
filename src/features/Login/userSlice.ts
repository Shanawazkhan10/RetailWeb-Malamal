import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { IUser } from "../../types/IUser";


const initialState = {
    isPasswordCheked:false,
    isAuthenticated: false,
    isError:false,
    user: null,    
} as IUser

export const userSlice = createSlice({
    name : 'User',
    initialState,
    reducers:{
        logging:(state)=>{
            state.isPasswordCheked= false;
            state.isAuthenticated = false;
            state.isError=false;
            state.user= null;
        },
        loggedInSuccess:(state,action:PayloadAction<any>)=>{
            state.isPasswordCheked= true;
            state.isAuthenticated = false;
            state.isError=false;
            state.user= action.payload;
        },
        loggedInError:(state,action:PayloadAction<any>)=>{
            state.isPasswordCheked= false;
            state.isAuthenticated = false;
            state.isError=true;
            state.user= null;
        },
        twofasuccess:(state,action:PayloadAction<any>)=>{
            state.isPasswordCheked= true;
            state.isAuthenticated = true;
            state.isError=false;
            state.user= action.payload;
        },
        twofaError:(state,action:PayloadAction<any>)=>{
            state.isPasswordCheked= true;
            state.isAuthenticated = false;
            state.isError=true;
            state.user= action.payload;
        },
        loggedout:(state)=>{
            state.isPasswordCheked= false;
            state.isAuthenticated = false;
            state.isError=false;            
            state.user= null;
        },
    },
});

export const{ logging,loggedInSuccess,loggedInError,twofasuccess,twofaError,loggedout} = userSlice.actions;

export default userSlice.reducer
