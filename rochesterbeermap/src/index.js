import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Error from "./components/pages/Error";
import NotFound from "./components/pages/NotFound";
import SearchPage from "./components/pages/search/SearchPage";
import SuggestBreweryPage from "./components/pages/suggest-brewery/SuggestBreweryPage";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import "./styles/main.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/suggest-brewery" component={SuggestBreweryPage} />
        <Route exact path="/error" component={Error} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
