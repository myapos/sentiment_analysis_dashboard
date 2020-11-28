import { call, put, takeEvery, all } from "redux-saga/effects";

import { auth } from "../pages/Login/LoginSlice";

import * as api from "../api";
function* authorize(action) {
  const resp = yield call(api.login);
  debugger;
  console.log("resp", resp);
}

function* mainSaga() {
  console.log("initialized sagas");
  yield takeEvery(auth().type, authorize);
}

export default mainSaga;
