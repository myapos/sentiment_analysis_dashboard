import { call, put } from "redux-saga/effects";

import { showBanner } from "pages/ui-components/Banner/BannerSlice";
import { clearTweets } from "pages/Dashboard/DashboardSlice";

export const safeSagas = (handler, saga, ...args) =>
  function* (action) {
    try {
      yield call(saga, ...args, action);
    } catch (err) {
      const errorObj = JSON.parse(err.message);
      yield put(showBanner(true));
      yield put(handler(errorObj));
      yield put(clearTweets());
    }
  };
