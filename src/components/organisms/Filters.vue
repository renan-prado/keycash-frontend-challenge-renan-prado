<template>
  <div class="o-filters d-flex flex-center max-w-100">
    <FilterItem
      v-for="group in filterBase._fields"
      :key="group"
      :title="getPtBrName(group)"
    >
      <FilterSlider
        :group="group"
        :rangeName="getPtBrName(group)"
        :rangeValue="filterBase[group]"
        :unity="getUnity(group)"
        :currentRange="filterApplied[group]"
        :interval="filterBase[group][1] > 100000 ? 10000 : 1"
        @updateRange="updateRange"
      />
    </FilterItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex';
import { FilterItem, FilterSlider } from '@/components/molecules';
import { filterGroupListPtBr, filterGroupListUnity } from '@/utils';


export default Vue.extend({
  components: { FilterItem, FilterSlider },
  computed: {
    ...mapGetters({
      filterBase: 'Houses/GET_FILTERS_BASE',
      filterApplied: 'Houses/GET_FILTERS_APPLIED',
    }),
  },
  methods: {
    updateRange(newRange: any) {
      this.$store.dispatch('Houses/UPDATE_FILTER', newRange);
    },
    getPtBrName(group: 'price'| 'usableArea' | 'bathrooms' | 'bedrooms' | 'parkingSpaces'): String {
      return filterGroupListPtBr[group];
    },
    getUnity(group: 'price'| 'usableArea' | 'bathrooms' | 'bedrooms' | 'parkingSpaces'): String {
      return filterGroupListUnity[group];
    }
  }
})
</script>

<style lang="stylus">
.o-filters
  gap: 10px


@media screen and (max-width: 768px)
  .o-filters.flex-center
    flex-wrap: wrap;

    .a-label-filter
      display flex

    .a-label-filter[name="Área útil"]
      min-width 90px

    .a-dropdown
      position fixed
      left 50%
      width 200px
      transform translateX(-50%)


</style>

