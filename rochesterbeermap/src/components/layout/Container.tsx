import React, { useContext } from "react";
import { BreweryContext } from "../../store/contexts/BreweryContext";
import BreweryCardList from "../BreweryCardList";
import Map from "../Map";
import LoadingScreen from "../ui/LoadingScreen";
import Footer from "./Footer";
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
              <BreweryCardList />
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Container;
