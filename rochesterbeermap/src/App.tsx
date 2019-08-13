import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import BreweryListView from "./components/BreweryListView";
import Spinner from "./components/helpers/Spinner";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import BreweryContextProvider from "./contexts/BreweryContext";
import "./styles/app.css";

const App = () => {
  return (
    <div className="App">
      <BreweryContextProvider>
        <Spinner />
        <Navbar />
        <div id="container">
          <div className="row">
            <BreweryListView />
            <Map />
          </div>
        </div>
      </BreweryContextProvider>
    </div>
  );
};

export default App;
