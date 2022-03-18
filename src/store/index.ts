import Vue from 'vue';
import Vuex from 'vuex';;
import Houses from './modules/Houses';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Houses,
  },
});
