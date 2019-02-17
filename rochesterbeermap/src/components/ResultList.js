import React from "react";
import Result from "./Result";

const ResultList = ({ breweries }) => {
  let content =
    breweries &&
    breweries.map((brewery, index) => {
      return <Result key={index} brewery={brewery} />;
    });

  return (
    <div id="result-list" className="row">
      {content}
    </div>
  );
};

export default ResultList;
