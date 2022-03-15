<template>
  <label
    class="a-label-filter d-inline-block transition"
    :class="{'a-label-filter--active': active}"
    @click="$emit('main-click')"
  >
    <span class="transition"> {{ text }} </span>
    <img class="transition" src="@/assets/arrow-down.svg" />
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      default: 'Filter',
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
      required: true,
    },
  }
})
</script>

<style lang="stylus" scoped>
.a-label-filter
  padding 9px
  padding 8px 28px 8px 22px
  border 2px solid #ddd
  border-radius 20px
  cursor pointer

  span
    font-weight 600
    padding-right 10px
    color #aaa

  img
    width 10px
    opacity .6

  &:hover
    border-color #888
    span
      color #000
    img
      opacity 1


.a-label-filter--active
  border-color #888
  img
    transform rotate(180deg)
    opacity 1
  span
    color #000

</style>
