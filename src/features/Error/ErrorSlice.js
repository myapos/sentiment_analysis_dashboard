import { createSlice } from "@reduxjs/toolkit";

export const ErrorSlice = createSlice({
  name: "errorStack",
  initialState: {
    error: {},
  },
  reducers: {
    saveError: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.error = action.payload;
    },
  },
});

export const { saveError } = ErrorSlice.actions;

export const selectErrorStack = (state) => state.errorStack.error;

export default ErrorSlice.reducer;
