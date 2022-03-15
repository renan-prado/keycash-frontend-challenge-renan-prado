import { ISearchHouses, IFilter } from './types';

export interface State {
  searchBase: ISearchHouses[]
  searchResult: ISearchHouses[]
  filtersApplied: IFilter[]
}

export const state: State = {
  searchBase: [],
  searchResult: [],
  filtersApplied: []
};
