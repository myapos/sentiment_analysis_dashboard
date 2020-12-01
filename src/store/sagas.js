import { call, put, takeEvery } from "redux-saga/effects";

import { sendLogin, sendLogout, auth } from "../pages/Login/LoginSlice";
import { fetchTweets, receivedTweets } from "../pages/Dashboard/DashboardSlice";
import { saveError } from "../features/Error/ErrorSlice";
import isError from "../utils/isError";
import * as api from "../api";

// https://yiniski.medium.com/redux-saga-error-handling-7f1dafa4be37
const safe = (handler, saga, ...args) =>
  function* (action) {
    try {
      yield call(saga, ...args, action);
    } catch (err) {
      console.log("safe", JSON.stringify(err));
      yield call(handler, ...args, err);
    }
  };

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function* login(action) {
  yield call(api.login);
}

function* logout(action) {
  const res = yield call(api.logout);

  if (res.clearedCookies === "OK") {
    // clear cookies
    yield deleteAllCookies();
    // auth to false
    yield put(auth(false));
  }
}

function* callTwitter(action) {
  const res = yield call(api.fetchTweets, action.payload.term);

  if (!isError(res)) {
    const { data: tweets, meta } = res;

    yield put(receivedTweets(tweets));
  } else {
    debugger;
    yield put(saveError(res));
    // throw new Error(res);
  }
}

function* mainSaga() {
  yield takeEvery(sendLogin().type, login);
  yield takeEvery(sendLogout().type, logout);
  yield takeEvery(fetchTweets().type, safe(saveError, callTwitter));
  // yield takeEvery(fetchTweets().type, callTwitter);
}

export default mainSaga;
