import { Brewery } from "./Brewery";

export type ContextProps = {
  breweries: Array<Brewery>;
  filteredBreweries: Array<Brewery>;
  dispatch?: any;
  isLoading: boolean;
};
