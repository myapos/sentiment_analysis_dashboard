import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import counterReducer from "../features/counter/counterSlice";
import LoginReducer from "../pages/Login/LoginSlice";
import DashboardReducer from "../pages/Dashboard/DashboardSlice";
import BannerSlice from "../features/Banner/BannerSlice";
import ModalSlice from "../features/Modal/ModalSlice";
import TweetsSlice from "../features/Tweets/TweetsSlice";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: LoginReducer,
    dashboard: DashboardReducer,
    bannerStack: BannerSlice,
    modal: ModalSlice,
    tweetsTable: TweetsSlice
  },
  devTools: {
    name: "Sentimental Analysis Dashboard",
  },
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
    }),
    ...middlewares,
  ],
});

sagaMiddleware.run(sagas);
export default store;
