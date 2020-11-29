import { call, put, takeEvery } from "redux-saga/effects";

import { sendLogin, sendLogout, auth } from "../pages/Login/LoginSlice";
import { fetchTweets } from "../pages/Dashboard/DashboardSlice";
import * as api from "../api";
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
  console.log("action", action);
  yield call(api.fetchTweets, action.payload.term);
}

function* mainSaga() {
  yield takeEvery(sendLogin().type, login);
  yield takeEvery(sendLogout().type, logout);
  yield takeEvery(fetchTweets().type, callTwitter);
}

export default mainSaga;
