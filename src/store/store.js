import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});
const reducers = combineReducers({
  user: userSlice.reducer,
});
export const globalStore = configureStore({ reducer: reducers });
