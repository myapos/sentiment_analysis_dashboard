import { createSlice } from "@reduxjs/toolkit";

export const DasboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    term: "",
    tweets: {},
    fetching: false,
  },
  reducers: {
    fetchTweets: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.term = action.payload.term;
      state.fetching = true;
    },
    receivedTweets: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.tweets = action.payload;
      state.fetching = false;
    },
  },
});

export const { fetchTweets, receivedTweets } = DasboardSlice.actions;

export const selectTweets = (state) => state.dashboard.tweets;
export const selectFetching = (state) => state.dashboard.fetching;

export default DasboardSlice.reducer;
