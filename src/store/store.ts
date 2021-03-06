import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import userReducer from "../features/Login/userSlice";
import chartReducer from "../features/Home/Chart/chartSlice";
import forgotpasswordReducer from "../features/Login/forgotpasswordSlice";
import NetPosition from "../features/Home/MainContainer/NetPosition/NetPositionSlice";
import Holding from "../features/Home/MainContainer/Holding/HoldingSlice";
import OrderViewSlice from "../features/Home/MainContainer/OrderView/OrderViewSlice";
import TradeVIewSlice from "../features/Home/MainContainer/TradeView/TradeVIewSlice";
import orderEntrySlice from "../features/Home/OrderEntry/orderEntrySlice";
import MarketWatchSlice from "../features/Home/MainContainer/MarketWatch/MarketWatchSlice";
import mainContainerSlice from "../features/Home/MainContainer/mainContainerSlice";
import MenuBarSlice from "../features/Home/Menu/MenuBarSlice";
import PersonalDetailsSlice from "../features/Home/PersonalDetails/PersonalDetailsSlice";
import AccountSummaryDetailsSlice from "../features/Home/Account/AccountSummaryDetailsSlice";
import IPODetailsSlice from "../features/Home/IPO/IPODetailsSlice";
import gttEntrySlice from "../features/Home/GTTOrderEntry/gttEntrySlice";
import WebSocketSlice from "../features/WebSocket/WebSocketSlice";
import SmartSearchSlice from "../features/Home/MainContainer/SmartSearch/SmartSearchSlice";
import MarketPictureSlice from "../features/Home/MainContainer/MarketPicture/MarketPictureSlice";
import SummarySlice from "../features/Home/MainContainer/Dashboard/SummarySlice";
import MarginSlice from "../features/Home/MainContainer/Dashboard/MarginSlice";
import indicesSlice from "../features/Home/Header/IndicesSlice";
import AddWatchListSlice from "../features/Home/MainContainer/MarketWatch/AddWatchListSlice";
import PaymentSlice from "./../features/Home/MainContainer/Funds/PaymentSlice";
import OptionChainslice from "../features/Home/MainContainer/OptionChain/OptionChainslice";

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotpasswordReducer,
    chart: chartReducer,
    netposition: NetPosition,
    holding: Holding,
    OrderView: OrderViewSlice,
    TradeView: TradeVIewSlice,
    orderEntry: orderEntrySlice,
    marketwatch: MarketWatchSlice,
    mainContainer: mainContainerSlice,
    personalContainer: PersonalDetailsSlice,
    accountContainer: AccountSummaryDetailsSlice,
    menuContainer: MenuBarSlice,
    ipoContainer: IPODetailsSlice,
    smartSearch: SmartSearchSlice,
    gttEntry: gttEntrySlice,
    marketpicture: MarketPictureSlice,
    socketData: WebSocketSlice,
    summary: SummarySlice,
    margin: MarginSlice,
    indices: indicesSlice,
    addwatch: AddWatchListSlice,
    payment: PaymentSlice,
    optionMaster: OptionChainslice,   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
