import "materialize-css/dist/css/materialize.min.css";
import React, { useEffect, useState } from "react";
import "./app.css";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import { getBreweryData } from "./dataService";
import { Brewery } from "./types/Brewery";

const App = () => {
  const [breweries, setBreweries] = useState<Array<Brewery>>([]);

  const getData = async () => {
    const data = await getBreweryData();
    setBreweries(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar breweries={breweries} />
      <div id="main">
        {breweries && breweries.length > 0 && <Map breweries={breweries} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
