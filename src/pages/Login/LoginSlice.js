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
      state.authorized = action.payload;
    },
    sendLogin: (state, action) => {
      state.social = action.payload;
      state.sendLogin = true;
    },
    sendLogout: (state, action) => {
      state.sendLogout = true;
    },
  },
});

export const { auth, sendLogin, sendLogout } = LoginSlice.actions;

export const selectAuth = (state) => state.login.authorized;

export default LoginSlice.reducer;
