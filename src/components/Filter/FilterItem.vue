<template>
  <div class="filter__item">
    <span @click="toggleDropdown">
      {{ title }}
      <img src="../../assets/arrow-down.png" />
    </span>

    <div class="filter__dropdown-bg" v-show="open" @click="toggleDropdown"></div>
    <div class="filter__dropdown" v-show="open">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['title'],
  data: () => ({
    open: false
  }),
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    }
  }
});

</script>

<style lang="stylus" scoped>
.filter__item
  position relative
  display flex
  padding 8px 28px 8px 22px
  border 1px solid #ddd
  border-radius 20px
  cursor pointer
  transition .2s

  span
    color #888
    cursor pointer
    transition .2s
    text-transform capitalize

  img
    width 10px
    position relative
    left 5px
    opacity .6
    cursor pointer
    transition .2s

  &:hover
    border 1px solid #888
    span
      color #000
    img
      opacity 1

.filter__dropdown
  position absolute
  top 130%
  left 0
  padding 20px
  background-color white
  border 1px solid #eee
  border-radius 10px
  min-width 200px
  box-shadow 1px 1px 6px 1px #eee
  z-index 20
  cursor initial

.filter__dropdown-bg
  background-color #00000000
  position fixed
  width 100%
  height 100vh
  top 0
  left 0
  z-index 10
  cursor initial

</style>
