import { call, put } from "redux-saga/effects";

import { saveBanner, showBanner } from "features/Banner/BannerSlice";
import isError from "utils/isError";
import { receivedTweets, clearTweets } from "pages/Dashboard/DashboardSlice";

import * as api from "api";
export const safe = (handler, saga, ...args) =>
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

function* callTwitter(action) {
  // clear previous errors

  yield put(saveBanner({}));
  yield put(showBanner(true));
  const res = yield call(api.fetchTweets, action.payload.term);

  if (!isError(res)) {
    const { data: tweets, meta, score } = res;

    yield put(receivedTweets({ tweets, score }));
  }
}

export default callTwitter;
