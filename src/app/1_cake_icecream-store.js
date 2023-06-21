import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "./features/cake/cakeSlice";
import { icecreamReducer } from "./features/ice-cream/1_icecreamSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

export default {
  store,
};
