import React, { useContext, useEffect, useState } from "react";
import { BreweryContext } from "../contexts/BreweryContext";
import { ContextProps } from "../types/Context";
import BreweryDetailView from "./BreweryDetailView";
import Filter from "./Filter";
import FloatingActionButton from "./FloatingActionButton";
import Alert from "./helpers/Alert";

interface BreweryListProps {}

const BreweryListView: React.FC = () => {
  const { filteredBreweries } = useContext(BreweryContext) as ContextProps;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let element = document.getElementById("brewery-list-view");

    element!.addEventListener("scroll", () => {
      let scrollTop = element!.scrollTop;

      if (scrollTop % 100 === 0) {
        if (scrollTop >= 200) {
          setVisible(true);
        } else if (scrollTop <= 200) {
          setVisible(false);
        }
      }
    });
  }, []);

  return (
    <div className="col m8 s12" id="brewery-list-view">
      <Filter />
      <FloatingActionButton visible={visible} />
      <div className="row">
        {filteredBreweries.length ? (
          filteredBreweries.map((brewery, index) => {
            return <BreweryDetailView brewery={brewery} key={index} />;
          })
        ) : (
          <Alert
            type={"INFO"}
            message={"No brewery data was found. Please try again!"}
          />
        )}
      </div>
    </div>
  );
};
export default BreweryListView;
