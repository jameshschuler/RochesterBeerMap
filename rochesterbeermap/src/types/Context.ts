import { Brewery } from "./Brewery";

export type ContextProps = {
  breweries: Array<Brewery>;
  filteredBreweries: Array<Brewery>;
  filterBreweries: any;
  dispatch?: any;
  isLoading: boolean;
};

export enum ActionType {
  FETCH_INIT = "FETCH_INIT",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
  FILTER_BREWERIES = "FILTER_BREWERIES"
}
