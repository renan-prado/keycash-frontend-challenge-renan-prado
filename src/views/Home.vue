<template>
  <div class="v-home d-flex flex-col flex-center">

    <section class="v-home__filters max-w-100">
      <Filters />
    </section>

    <section class="v-home__shelf">
      <Shelf :items="searchResult" />
    </section>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex';
import { IFilter, ISearchHouses } from '@/store/modules/Houses/types';
import { Home } from '@/components/templates';
import { ShelfItem } from '@/components/molecules';
import { Filters, Shelf } from '@/components/organisms';
import { ImageCarousel, HouseInfo } from '@/components/atoms';

export default Vue.extend({
  components: {
    Home,
    Filters,
    ImageCarousel,
    HouseInfo,
    ShelfItem,
    Shelf,
  },
  computed: {
    ...mapGetters({
      filterApplied: 'Houses/GET_FILTERS_APPLIED',
      searchBase: 'Houses/GET_SEARCH_BASE',
      searchResult: 'Houses/GET_SEARCH_RESULT',
    }),
  },
  watch: {
    filterApplied(filterApplied: any) {
      let searchFiltered: ISearchHouses[] = this.searchBase;

      filterApplied._fields
        .forEach((group: String) => {
          searchFiltered = this.filterItemsBy(group, searchFiltered, filterApplied);
        });

      this.$store.commit('Houses/SET_SEARCH_RESULT', searchFiltered);
    },
  },
  methods: {
    filterItemsBy(
      group: String,
      houseList: ISearchHouses[],
      filterApplied: any
    ): ISearchHouses[] {

      const filterValues = filterApplied[String(group)];
      const [firstValue, lastValue] = filterValues;

      if (filterValues.length) {
        houseList = houseList
          .filter((house: any) =>
            house[String(group)] >= firstValue &&
            house[String(group)] <= lastValue
          );
      }

      return houseList;
    }
  },
  mounted() {
    this.$store.dispatch('Houses/FETCH_HOUSES');
  },
});
</script>

<style lang="stylus" scoped>
.v-home
  padding 30px 0
  gap 40px

</style>
