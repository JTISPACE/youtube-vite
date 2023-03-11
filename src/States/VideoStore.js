import { createSlice } from "@reduxjs/toolkit";
const lgs = localStorage;

export const videoSlice = createSlice({
  name: "videos",
  initialState: { value: [] },
  reducers: {
    save: (state, action) => {
      if (action.type === "save") {
        lgs.setItem("videos", JSON.stringify(action.payload));
       
      }
    },
    getStore: (state, action) => {
      if (action.type === "videos/getStore") {
        
        return JSON.parse(lgs.getItem("videos"));
      }
    },
    search: (state, action) => {
      if (action.type === "search") {
        const video = state.videos.filter(
          (video) => video.id === action.payload
        );
        return video;
      }
    },
  },
});

export const { save, getStore, search } = videoSlice.actions;

export default videoSlice.reducer;
