import "materialize-css/dist/css/materialize.min.css";
import React, { useEffect } from "react";
import "./app.css";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    // TODO: load data from firestore
    // TODO: use context api to send data to Map component
  }, []);

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
