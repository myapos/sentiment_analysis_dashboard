import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "authorization",
  initialState: {
    authorized: false,
  },
  reducers: {
    auth: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
      state.authorized = true;
    },
  },
});

export const { auth } = LoginSlice.actions;

export const selectAuth = (state) => state.login.authorized;

export default LoginSlice.reducer;
