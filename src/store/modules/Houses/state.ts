import { ISearchHouses, IFilter } from './types';

export interface State {
  searchBase: ISearchHouses[]
  searchResult: ISearchHouses[]
  filtersBase: any
  filtersApplied: any
  loading: Boolean
}

export const state: State = {
  searchBase: [],
  searchResult: [],
  filtersBase: {},
  filtersApplied: {},
  loading: false
};
