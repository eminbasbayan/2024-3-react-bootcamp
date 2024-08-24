import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: {}
  },
});

export default store;
