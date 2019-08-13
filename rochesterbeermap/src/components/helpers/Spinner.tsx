import React, { useContext } from "react";
import { BreweryContext } from "../../contexts/BreweryContext";
// TODO:
const Spinner: React.FC = () => {
  const { isLoading } = useContext(BreweryContext);
  return isLoading ? <p>Loading...</p> : <p>Not Loading...</p>;
};

export default Spinner;
