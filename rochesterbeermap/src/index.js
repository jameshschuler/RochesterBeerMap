import "bulma";
import "./styles/main.css";

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import SuggestBreweryContainer from "./components/SuggestBreweryContainer";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" component={App} />
      <Route
        exact
        path="/suggest-brewery"
        component={SuggestBreweryContainer}
      />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
