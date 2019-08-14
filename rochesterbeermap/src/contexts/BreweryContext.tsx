import React, { createContext, useEffect, useReducer } from "react";
import { getBreweryData } from "../dataService";
import { breweryReducer, initialState } from "../reducers/BreweryReducer";
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
      }, 5000);
    };

    fetchData();
  }, []);
  return (
    <BreweryContext.Provider value={{ ...breweries, dispatch }}>
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryContextProvider;
