import { call, put, takeEvery, all } from "redux-saga/effects";

import { sendLogin } from "../pages/Login/LoginSlice";

import * as api from "../api";
function* login(action) {
  yield call(api.login);
}

function* mainSaga() {
  console.log("initialized sagas");
  yield takeEvery(sendLogin().type, login);
}

export default mainSaga;
