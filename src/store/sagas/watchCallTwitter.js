import { call, put } from "redux-saga/effects";

import { saveBanner, showBanner } from "pages/ui-components/Banner/BannerSlice";
import isError from "utils/isError";
import { receivedTweets } from "pages/Dashboard/DashboardSlice";

import * as api from "./api";

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
