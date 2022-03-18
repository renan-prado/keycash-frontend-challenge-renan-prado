<template>
  <div class="m-filter-item d-inline-block">
    <LabelFilter
      :text="title"
      :active="displayDropdown"
      @main-click="toggleDisplayDropdown" />

    <div class="m-filter-item__dropdown">
      <Dropdown :active="displayDropdown" @overlay-click="toggleDisplayDropdown">
        <slot />
      </Dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  LabelFilter,
  Dropdown,
} from '@/components/atoms';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: 'Filter',
    },
  },
  data: () => ({
    displayDropdown: false,
  }),
  methods: {
    toggleDisplayDropdown():void {
      this.displayDropdown = !this.displayDropdown;
    },
  },
  components: {
    LabelFilter,
    Dropdown,
  }
})
</script>

<style lang="stylus" scoped>
.m-filter-item
  position relative

.m-filter-item__dropdown
  min-width 200px
  position absolute
  left 0
  margin-top 10px

</style>
