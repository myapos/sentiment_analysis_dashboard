import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./pages/Main";
import store from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./fonts/Baloo2-Regular.ttf";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

console.log("test");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
