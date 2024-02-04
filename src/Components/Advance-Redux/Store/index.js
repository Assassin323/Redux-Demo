import { configureStore } from "@reduxjs/toolkit";
import uiSclice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSclice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
