import { ActionContext } from 'vuex';
import houseFactory from '@/factory/HouseFactory';
import { State } from './state';

export default {
  async FETCH_HOUSES(store: ActionContext<State, State>): Promise<void> {
    const houseInstance = houseFactory.createInstance();
    const houseList = await houseInstance.search();

    store.commit('SET_SEARCH_BASE', houseList);
    store.commit('SET_SEARCH_RESULT', houseList);

    // TODO: Gerar todos os filtros carregados
  },
};
