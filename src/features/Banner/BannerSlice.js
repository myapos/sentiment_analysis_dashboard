import { createSlice } from "@reduxjs/toolkit";

export const BannerSlice = createSlice({
  name: "bannerStack",
  initialState: {
    error: {},
    showBanner: false,
  },
  reducers: {
    saveBanner: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.error = action.payload;
    },
    showBanner: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.showBanner = action.payload;
    },
  },
});

export const { saveBanner, showBanner } = BannerSlice.actions;

export const selectBannerStack = (state) => state.bannerStack.error;
export const selectShowBanner = (state) => state.bannerStack.showBanner;

export default BannerSlice.reducer;
