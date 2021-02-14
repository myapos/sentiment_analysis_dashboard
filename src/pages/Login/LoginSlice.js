import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "authorization",
  initialState: {
    authorized: false,
    sendLogin: false,
    sendLogout: false,
    social: "",
  },
  reducers: {
    auth: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
      state.authorized = action.payload;
    },
    sendLogin: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("action", action);
      state.social = action.payload;
      state.sendLogin = true;
    },
    sendLogout: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
      state.sendLogout = true;
    },
  },
});

export const { auth, sendLogin, sendLogout } = LoginSlice.actions;

export const selectAuth = (state) => state.login.authorized;

export default LoginSlice.reducer;
