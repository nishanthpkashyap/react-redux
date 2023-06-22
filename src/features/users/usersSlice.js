import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",
};

// create async thunk generates 3 actions - pending, fulfilled, and rejected, so need to handle errors
// we can use the fetchUsersList() to access the 3 action types and handle state transition by adding extraReducers
export const fetchUsersList = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = data.map((user) => user);
  return users;
});

const { reducer } = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(fetchUsersList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsersList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});

export const userReducer = reducer;
