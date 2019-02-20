import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import SuggestBreweryContainer from "./components/SuggestBrewery/SuggestBreweryContainer";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import "./styles/main.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          exact
          path="/suggest-brewery"
          component={SuggestBreweryContainer}
        />
        <Route component={NotFound} />
      </Switch>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
