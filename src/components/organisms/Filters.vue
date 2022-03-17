<template>
  <div class="o-filters d-flex flex-center">
    <FilterItem
      v-for="group in filterBase._fields"
      :key="group"
      :title="group"
    >
      <FilterSlider
        :group="group"
        :rangePrice="filterBase[group]"
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
    }
  }
})
</script>

<style lang="stylus" scoped>
.o-filters
  gap: 10px
</style>

