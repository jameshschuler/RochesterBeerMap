import React, { useContext } from "react";
import { BreweryContext } from "../store/contexts/BreweryContext";
import { ContextProps } from "../types/Context";
import { scrollTo } from "../utilities/animation";
import BreweryCard from "./BreweryCard";
import Filter from "./Filter";
import Alert from "./ui/Alert";
import FloatingActionButton from "./ui/FloatingActionButton";

interface BreweryCardListProps {}

const BreweryCardList: React.FC<BreweryCardListProps> = () => {
  const { filteredBreweries } = useContext(BreweryContext) as ContextProps;

  return (
    <div className="col m8 s12" id="brewery-list-view">
      <Filter />
      <FloatingActionButton
        appearAt={200}
        disappearAt={200}
        action={() =>
          scrollTo(document.getElementById("brewery-list-view")!, 0, 1000)
        }
      />
      <div className="row">
        {filteredBreweries.length ? (
          filteredBreweries.map((brewery, index) => {
            return <BreweryCard brewery={brewery} key={index} />;
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
export default BreweryCardList;
