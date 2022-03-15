import { ISearchHouses, IFilter } from './types';

export interface State {
  searchBase: ISearchHouses[]
  searchResult: ISearchHouses[]
  filtersBase: IFilter[]
  filtersApplied: IFilter[]
}

export const state: State = {
  searchBase: [],
  searchResult: [],
  filtersBase: [],
  filtersApplied: []
};
