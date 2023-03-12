import { createSlice } from "@reduxjs/toolkit";

export const psToggleSlice = createSlice({
  name: "pstoggle",
  initialState: { value: false },
  reducers: {
    pstoggle: (state, action) => {
       if (state.value) {
         state.value = !action.payload;
       } else {
         state.value = true;
       }
    },
  },
});

export const { pstoggle } = psToggleSlice.actions;

export default psToggleSlice.reducer;
