import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { cakeReducer } from "./features/cake/cakeSlice";
import { icecreamReducer } from "./features/ice-cream/1_icecreamSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  middleware: [createLogger()],
});

export default {
    store,
};
