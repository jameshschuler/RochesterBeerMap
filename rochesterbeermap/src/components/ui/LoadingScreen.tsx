import React from "react";
// TODO: improve loading screen / add better spinner
const LoadingScreen: React.FC = () => {
  return (
    <div className="col s12 blue" id="loading-screen-component">
      <h1 className="center-align white-text title">Rochester Beer Map</h1>
      <h2 className="center-align white-text">Loading...</h2>
    </div>
  );
};

export default LoadingScreen;
