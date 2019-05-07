import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import "./app.css";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="main">
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default App;
