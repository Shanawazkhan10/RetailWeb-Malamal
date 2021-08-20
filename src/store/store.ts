import { configureStore } from "@reduxjs/toolkit";
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

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotpasswordReducer,

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

export default store;
