import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import Container from "./components/Container";
import BreweryContextProvider from "./contexts/BreweryContext";
import "./styles/app.css";

const App = () => {
  return (
    <BreweryContextProvider>
      <Container />
    </BreweryContextProvider>
  );
};

export default App;
