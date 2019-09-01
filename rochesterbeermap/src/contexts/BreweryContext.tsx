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
      // TODO: remove this setTimeout function
      setTimeout(async () => {
        try {
          const result = await getBreweryData();
          dispatch({ type: "FETCH_SUCCESS", payload: result });
        } catch (error) {
          dispatch({ type: "FETCH_FAILURE", error });
        }
      }, 1000);
    };

    fetchData();
  }, []);

  const filterBreweries = (query: string) => {
    const filtered = breweries.breweries.filter((brewery: Brewery) => {
      if (
        brewery.breweryName.toLowerCase().startsWith(query.toLowerCase()) ||
        brewery.locality.toLowerCase().startsWith(query.toLowerCase())
      ) {
        return true;
      }
    });
    dispatch({ type: "FILTER_BREWERIES", payload: filtered });
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
