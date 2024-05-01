import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer, // Combine reducers into a root reducer
  },
});

export default store;
