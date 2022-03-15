import { State } from './state';
import { ISearchHouses, IFilter } from './types';
import {
  hasFilterInList,
  removeFilterInList,
  filterGroupList,
  TFilterGroups,
  buildSliderFilter,
} from '@/utils';

export default {
  SET_SEARCH_BASE(state: State, houseList: ISearchHouses[]): void {
    state.searchBase = houseList;
  },
  SET_SEARCH_RESULT(state: State, houseList: ISearchHouses[]): void {
    state.searchResult = houseList;
  },
  TOGGLE_FILTER(state: State, filterItem: IFilter): void {
    const filtersApplied = new Array(...state.filtersApplied);
    const hasFilter = hasFilterInList(filtersApplied, filterItem);
    let newFilterList: IFilter[] = [];

    if (hasFilter)
      newFilterList = removeFilterInList(filtersApplied, filterItem);
    else
      newFilterList = [...filtersApplied, filterItem];

    state.filtersApplied = newFilterList;
  },
  SET_INITIAL_FILTERS(state: State, houseList: ISearchHouses[]) {
    let initialFilterList: IFilter[] = [];
    let hasFilter: boolean;

    houseList.forEach((house: ISearchHouses) => {
      filterGroupList.forEach((group: TFilterGroups) => {
        const currentItem: IFilter = {
          group,
          value: String(house[group]),
        };

        hasFilter = hasFilterInList(initialFilterList, currentItem);

        if (!hasFilter)
          initialFilterList.push(currentItem);
      });
    });

    initialFilterList = buildSliderFilter(initialFilterList);

    state.filtersApplied = initialFilterList;
    state.filtersBase = initialFilterList;
  },
};
