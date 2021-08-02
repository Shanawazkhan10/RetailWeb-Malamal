import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/Login/userSlice'
import chartReducer from '../features/Home/Chart/chartSlice'
import forgotpasswordReducer from '../features/Login/forgotpasswordSlice';
import NetPosition from "../features/Home/MainContainer/NetPosition/NetPositionSlice";
import Holding from "../features/Home/MainContainer/Holding/HoldingSlice";
import OrderViewSlice from "../features/Home/MainContainer/OrderView/OrderViewSlice";
import TradeVIewSlice from "../features/Home/MainContainer/TradeView/TradeVIewSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        forgotPassword:forgotpasswordReducer,
        chart: chartReducer,
    netposition: NetPosition,
    holding: Holding,
    OrderView: OrderViewSlice,
    TradeView: TradeVIewSlice,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
