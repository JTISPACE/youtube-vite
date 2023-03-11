import { createSlice } from "@reduxjs/toolkit";

export const psToggleSlice = createSlice({
  name: "pstoggle",
  initialState: { value: " " },
  reducers: {
    pstoggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { pstoggle } = psToggleSlice.actions;

export default psToggleSlice.reducer;
