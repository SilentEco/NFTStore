import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cash {
  name: string;
  url: string;
}

export interface CashState {
  value: Cash[];
}

const initialState: CashState = {
  value: [],
};

export const cashSlice = createSlice({
  name: "cash",
  initialState,
  reducers: {
    addCash: (state, action: PayloadAction<Cash>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCash } = cashSlice.actions;
export default cashSlice.reducer;
