import { throttle } from 'throttle-debounce';
import { State } from './state';
import { ISearchHouses, IFilter } from './types';

const debounceSetFilter = throttle(1000, false, (state: State, filter: any) => {
  state.filtersApplied = filter;
});

export default {
  SET_SEARCH_BASE(state: State, houseList: ISearchHouses[]): void {
    state.searchBase = houseList;
  },
  SET_SEARCH_RESULT(state: State, houseList: ISearchHouses[]): void {
    state.searchResult = houseList;
  },
  SET_FILTER_BASE(state: State, filter: IFilter[]): void {
    state.filtersBase = filter;
  },
  SET_FILTER_APPLIED(state: State, filter: IFilter[]): void {
    debounceSetFilter(state, filter);
  },
};
