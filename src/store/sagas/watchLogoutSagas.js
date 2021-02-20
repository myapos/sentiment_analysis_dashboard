import { call, put } from "redux-saga/effects";
import { auth } from "pages/Login/LoginSlice";
import * as api from "./api";
function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
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

export default logout;
