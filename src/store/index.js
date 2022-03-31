import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import uiSlice from "./slices/ui-slice";


const store = configureStore({
  reducer: {
    uiReducer: uiSlice.reducer,
    cartReducer: cartSlice.reducer
  }
})

export default store