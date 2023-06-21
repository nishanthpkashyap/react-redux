import { configureStore } from "@reduxjs/toolkit";
import {icecreamReducer} from "../features/ice-cream/icecreamSlice.js";
import {cakeReducer} from "../features/cake/cakeSlice.js";
import {userReducer} from "../features/users/usersSlice.js";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

export default store;