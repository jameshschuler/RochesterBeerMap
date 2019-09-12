import React, { createContext, useEffect, useReducer } from "react";
import { breweryReducer, initialState } from "../reducers/BreweryReducer";
import { getBreweryData } from "../services/dataService";
import { Brewery } from "../types/Brewery";
import { ContextProps } from "../types/Context";

export const BreweryContext = createContext<Partial<ContextProps>>({});

const BreweryContextProvider: React.FC = (props: any) => {
  const [breweries, dispatch] = useReducer(breweryReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await getBreweryData();
        dispatch({ type: "FETCH_SUCCESS", payload: result });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", error });
      }
    };

    fetchData();
  }, []);

  /**
   * Filters the brewery list by brewery name or city
   * @param query - search criteria entered by user
   */
  const filterBreweries = (query: string): void => {
    let payload = breweries.breweries as Array<Brewery>;
    if (query) {
      payload = breweries.breweries.filter((brewery: Brewery) => {
        return (
          brewery.breweryName.toLowerCase().startsWith(query.toLowerCase()) ||
          brewery.locality.toLowerCase().startsWith(query.toLowerCase())
        );
      });
    }

    dispatch({ type: "FILTER_BREWERIES", payload });
  };

  return (
    <BreweryContext.Provider
      value={{ ...breweries, filterBreweries, dispatch }}
    >
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryContextProvider;
