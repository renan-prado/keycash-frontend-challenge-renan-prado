<template>
  <div class="o-filters d-flex flex-center">
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

<style lang="stylus" scoped>
.o-filters
  gap: 10px
</style>

