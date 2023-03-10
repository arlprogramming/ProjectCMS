import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Pages/Redux/Root/Root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
