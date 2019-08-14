import React from "react";
// TODO: improve loading screen / add better spinner
const LoadingScreen: React.FC = () => {
  return (
    <div className="col s12 blue" id="loading-screen-component">
      <h1 id="title" className="center-align white-text">
        Loading...
      </h1>
    </div>
  );
};

export default LoadingScreen;
