import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: { value: true },
  reducers: {
    toggle: (state, action) => {
      if (state.value){
      state.value = !action.payload;
      }
      else{
        state.value = true;
      }
    },


  },
});

export const { toggle } = toggleSlice.actions;

export default toggleSlice.reducer;
