import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import toggleSlice from "./States/ToggleState";
import psToggleReducer from "./States/PSToggleState";
import videoSlice from "./States/VideoStore";
import searchSlice from "./States/Search"


const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    pstoggle: psToggleReducer,
    videos: videoSlice,
    search: searchSlice,
    
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
