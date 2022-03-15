import store from '@/store';
import { State } from './state';
import { ISearchHouses, IFilter } from './types';

export default {
  SET_SEARCH_BASE(state: State, houseList: ISearchHouses[]): void {
    state.searchBase = houseList;
  },
  SET_SEARCH_RESULT(state: State, houseList: ISearchHouses[]): void {
    state.searchResult = houseList;
  },
  TOGGLE_FILTER(state: State, filterItem: IFilter): void {
    const filtersApplied = new Array(...state.filtersApplied);
    let newFilterList: IFilter[] = [];

    const hasFilter = filtersApplied
      .some((filter: IFilter) =>
        filter.group === filterItem.group &&
        filter.value === filterItem.value
      );

    if (hasFilter) {
      newFilterList = filtersApplied
        .filter((filterSave: IFilter) =>
          filterSave.group !== filterItem.group ||
          filterSave.value !== filterItem.value
        );
    } else {
      newFilterList = [...filtersApplied, filterItem];
    }

    state.filtersApplied = newFilterList;
  },
};
