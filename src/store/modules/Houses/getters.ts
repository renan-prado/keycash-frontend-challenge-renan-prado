import { State } from './state';
import { ISearchHouses, IFilter } from './types';

export default {
  GET_SEARCH_BASE(state: State): ISearchHouses[] {
    return state.searchBase;
  },
  GET_SEARCH_RESULT(state: State): ISearchHouses[] {
    return state.searchResult;
  },
  GET_FILTERS_APPLIED(state: State): IFilter[] {
    return state.filtersApplied;
  },
};
