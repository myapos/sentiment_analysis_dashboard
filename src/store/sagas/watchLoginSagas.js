import { call } from "redux-saga/effects";
import * as api from "api";

function* login(action) {
  yield call(api.login, action.payload);
}

export default login;
