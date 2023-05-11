import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import contactReducer from "./redux/reducers/contactReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(contactReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
