import React, { Component } from "react";
import Result from "./Result";

class ResultList extends Component {
  render() {
    const { breweries } = this.props;

    return (
      <div id="result-list" className="columns is-1">
        {breweries &&
          breweries.map((brewery, index) => {
            return <Result key={index} brewery={brewery} />;
          })}
      </div>
    );
  }
}

export default ResultList;
