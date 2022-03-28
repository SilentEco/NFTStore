import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "../features/nftSlice";
import amountReducer from "../features/amountSlice";
import cartReducer from "../features/shoppingcartSlice";
import storage from "../storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistCart = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    nft: nftReducer,
    amount: amountReducer,
    cart: persistCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
