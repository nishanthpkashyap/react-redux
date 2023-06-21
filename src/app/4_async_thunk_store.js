import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './features/users/usersSlice';

const store = configureStore({
    reducer: userReducer,
});

export default {
    store,
};