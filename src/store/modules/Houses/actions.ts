import { ActionContext } from 'vuex';
import houseFactory from '@/factory/HouseFactory';
import { State } from './state';
import { ISearchHouses } from './types';
import { filterGroupList } from '@/utils';

export default {
  async FETCH_HOUSES(store: ActionContext<State, State>): Promise<void> {
    const houseInstance = houseFactory.createInstance();
    let houseList = await houseInstance.search<ISearchHouses>();

    houseList = houseList.filter((house) => house.publish);
    houseList = houseList.filter((house) => house.address.formattedAddress.indexOf('??') <= 0);
    houseList = houseList.sort((a:any, b:any) =>  b.price - a.price);

    store.commit('SET_SEARCH_BASE', houseList);
    store.commit('SET_SEARCH_RESULT', houseList);
    store.dispatch('FETCH_FILTERS', houseList);
  },
  FETCH_FILTERS(store: ActionContext<State, State>, houseList:any[]): void {
    let filterInit:any = {
      _fields: [],
    };

    houseList.forEach((house) => {
      filterGroupList.forEach((group) => {

        if (!filterInit[group]) {
          filterInit[group] = [0,0];
          filterInit._fields.push(group);
        }

        const [firstValue, lastValue] = filterInit[group];

        if (house[group] < firstValue)
          filterInit[group][0] = house[group];

        if (house[group] > lastValue)
          filterInit[group][1] = house[group];
      });
    });

    store.commit('SET_FILTER_BASE', filterInit);
    store.commit('SET_FILTER_APPLIED', filterInit);
  },
  UPDATE_FILTER(store: ActionContext<State, State>, filter:any): void {
    const filtersApplied = store.state.filtersApplied;

    store.commit('SET_FILTER_APPLIED', {
      ...filtersApplied,
      [filter.group]: filter.range,
    });
  },
};
