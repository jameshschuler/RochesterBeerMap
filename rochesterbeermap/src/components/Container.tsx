import React, { useContext } from "react";
import { BreweryContext } from "../contexts/BreweryContext";
import BreweryListView from "./BreweryListView";
import Footer from "./layout/Footer";
import LoadingScreen from "./LoadingScreen";
import Map from "./Map";
import Navbar from "./Navbar";

const Container: React.FC = () => {
  const { isLoading } = useContext(BreweryContext);
  return (
    <div id="container">
      <div className="row mb-0">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <div id="content-container">
              <Map />
              <BreweryListView />
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Container;
