<template>
  <div class="v-home">
    <Home />

    <FilterItem title="Cor">
      Testeee
    </FilterItem>

    <router-link to="/details" >teste</router-link>

    <br><br>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IFilter, ISearchHouses } from '@/store/modules/Houses/types';
import { mapGetters } from 'vuex';
import { Home } from '@/components/templates';
import { FilterItem } from '@/components/molecules';

export default Vue.extend({
  components: {
    Home,
    FilterItem,
  },
   computed: {
    ...mapGetters({
        filterApplied: 'Houses/GET_FILTERS_APPLIED',
        searchBase: 'Houses/GET_SEARCH_BASE',
        searchResult: 'Houses/GET_SEARCH_RESULT',
    }),
  },
  watch: {
    filterApplied(filterApplied: IFilter[]) {

      let searchFiltered: ISearchHouses[] = this.searchBase;

      searchFiltered = this.filterCheckboxBy('bathrooms', searchFiltered, filterApplied);
      searchFiltered = this.filterCheckboxBy('bedrooms', searchFiltered, filterApplied);
      searchFiltered = this.filterCheckboxBy('parkingSpaces', searchFiltered, filterApplied);
      searchFiltered = this.filterSliderBy('price', searchFiltered, filterApplied);
      searchFiltered = this.filterSliderBy('usableArea', searchFiltered, filterApplied);

      this.$store.commit('Houses/SET_SEARCH_RESULT', searchFiltered);
    },
  },
  methods: {
    filterCheckboxBy(
      group: 'bathrooms' | 'bedrooms' | 'parkingSpaces',
      houseList: ISearchHouses[],
      filterApplied: IFilter[]
    ): ISearchHouses[] {

      let houseListReturn = houseList;

      const filterValues = filterApplied
        .filter((filter) => filter.group === group)
        .map((filter) => String(filter.value));

      if (filterValues.length) {
        houseListReturn = houseList
          .filter((house) =>
            filterValues.includes(String(house[group])));
      }

      return houseListReturn;
    },
    filterSliderBy(
      group: 'price' | 'usableArea',
      houseList: ISearchHouses[],
      filterApplied: IFilter[]
    ): ISearchHouses[] {

      let houseListReturn = houseList;

      const filterValues = filterApplied
        .filter((filter) => filter.group === group)
        .map((filter) => filter.value);

      if (filterValues.length) {
        const [filterValue] = filterValues

        houseListReturn = houseList.filter((house) =>
          house.price >= Number(filterValue[0]) &&
          house.price <= Number(filterValue[1])
        );
      }

      return houseListReturn;
    }
  },
  mounted() {
    this.$store.dispatch('Houses/FETCH_HOUSES');

    setTimeout(() => {
      // this.$store.commit('Houses/TOGGLE_FILTER', {
      //   group: 'bathrooms',
      //   value: 2
      // });

      // this.$store.commit('Houses/TOGGLE_FILTER', {
      //   group: 'bedrooms',
      //   value: 2
      // });

      // this.$store.commit('Houses/TOGGLE_FILTER', {
      //   group: 'parkingSpaces',
      //   value: 1
      // });

      this.$store.commit('Houses/TOGGLE_FILTER', {
        group: 'price',
        value: [800000, 1100000]
      });

    }, 3000);


  },
});
</script>
