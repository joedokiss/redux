import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import uiSlice from "./slices/ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
})

export default store