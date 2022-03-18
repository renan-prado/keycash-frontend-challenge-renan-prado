import { ISearchHouses, IFilter } from './types';

export interface State {
  searchBase: ISearchHouses[]
  searchResult: ISearchHouses[]
  filtersBase: any
  filtersApplied: any
}

export const state: State = {
  searchBase: [],
  searchResult: [],
  filtersBase: {},
  filtersApplied: {}
};
