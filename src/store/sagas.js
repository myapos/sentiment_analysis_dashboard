import { call, put, takeEvery, all } from "redux-saga/effects";

import { auth } from "../pages/Login/LoginSlice";

import * as api from "../api";
function* authorize(action) {
  const { payload } = action;

  yield call(api.login);
}

function* mainSaga() {
  console.log("initialized sagas");
  yield takeEvery(auth().type, authorize);
}

export default mainSaga;
