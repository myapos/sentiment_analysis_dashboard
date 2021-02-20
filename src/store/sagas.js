import { takeEvery } from "redux-saga/effects";

import { sendLogin, sendLogout } from "pages/Login/LoginSlice";
import { fetchTweets } from "../pages/Dashboard/DashboardSlice";
import { saveBanner } from "../features/Banner/BannerSlice";

import { safe } from "./sagas/watchCallTwitter";
import callTwitter from "./sagas/watchCallTwitter";
import watchLogoutSagas from "./sagas/watchLogoutSagas";
import watchLoginSagas from "./sagas/watchLoginSagas";
// https://yiniski.medium.com/redux-saga-error-handling-7f1dafa4be37

function* mainSaga() {
  yield takeEvery(sendLogin().type, watchLoginSagas);
  yield takeEvery(sendLogout().type, watchLogoutSagas);
  yield takeEvery(fetchTweets().type, safe(saveBanner, callTwitter));
  // yield takeEvery(fetchTweets().type, callTwitter);
}

export default mainSaga;
