import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer/rootReducer";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    ...rootReducer,
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
