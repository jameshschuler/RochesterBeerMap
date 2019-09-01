import { Brewery } from "./Brewery";

export type ContextProps = {
  breweries: Array<Brewery>;
  filteredBreweries: Array<Brewery>;
  filterBreweries: any;
  dispatch?: any;
  isLoading: boolean;
};
