import React, { createContext, useEffect, useReducer } from "react";
import { getBreweryData } from "../../services/dataService";
import { Brewery } from "../../types/Brewery";
import { ActionType, ContextProps } from "../../types/Context";
import { breweryReducer, initialState } from "../reducers/BreweryReducer";

export const BreweryContext = createContext<Partial<ContextProps>>({});

const BreweryContextProvider: React.FC = (props: any) => {
  const [state, dispatch] = useReducer(breweryReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: ActionType.FETCH_INIT });
      try {
        const result = await getBreweryData();
        dispatch({ type: ActionType.FETCH_SUCCESS, payload: result });
      } catch (error) {
        dispatch({ type: ActionType.FETCH_FAILURE, error });
      }
    };

    fetchData();
  }, []);

  /**
   * Filters the brewery list by brewery name or city
   * @param query - search criteria entered by user
   */
  const filterBreweries = (query: string): void => {
    let payload = state.breweries as Array<Brewery>;
    if (query) {
      payload = state.breweries.filter((brewery: Brewery) => {
        return (
          brewery.breweryName.toLowerCase().startsWith(query.toLowerCase()) ||
          brewery.locality.toLowerCase().startsWith(query.toLowerCase())
        );
      });
    }

    dispatch({ type: ActionType.FILTER_BREWERIES, payload });
  };

  return (
    <BreweryContext.Provider value={{ ...state, filterBreweries, dispatch }}>
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryContextProvider;
