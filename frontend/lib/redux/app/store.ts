import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "../features/nftSlice";
import amountReducer from "../features/amountSlice";

export const store = configureStore({
  reducer: {
    nft: nftReducer,
    amount: amountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
