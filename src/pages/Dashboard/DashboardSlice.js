import { createSlice } from "@reduxjs/toolkit";

export const DasboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    term: "",
    tweets: {},
    score: null,
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

      state.tweets = action.payload.tweets;
      state.score = action.payload.score;
      state.fetching = false;
    },
    clearTweets: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.tweets = {};
      state.fetching = false;
    },
    resetScore:(state, action) => {
      state.score = null;
    }
  },
});

export const {
  fetchTweets,
  receivedTweets,
  clearTweets,
  resetScore,
} = DasboardSlice.actions;

export const selectTweets = (state) => state.dashboard.tweets;
export const selectFetching = (state) => state.dashboard.fetching;
export const selectScore = (state) => state.dashboard.score;

export default DasboardSlice.reducer;
