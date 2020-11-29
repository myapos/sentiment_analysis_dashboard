import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "authorization",
  initialState: {
    authorized: false,
    sendLogin: false,
  },
  reducers: {
    auth: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
      debugger;
      console.log("action", action.payload);
      state.authorized = action.payload;
    },
    sendLogin: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
      console.log("action", action.payload);
      state.sendLogin = true;
    },
  },
});

export const { auth, sendLogin } = LoginSlice.actions;

export const selectAuth = (state) => state.login.authorized;

export default LoginSlice.reducer;
