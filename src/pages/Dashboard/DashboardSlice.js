import { createSlice } from "@reduxjs/toolkit";

export const DasboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    term: "",
    tweets: {},
  },
  reducers: {
    fetchTweets: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.term = action.payload.term;
    },
  },
});

export const { fetchTweets } = DasboardSlice.actions;

export const selectTweets = (state) => state.fetchTweets.tweets;

export default DasboardSlice.reducer;
