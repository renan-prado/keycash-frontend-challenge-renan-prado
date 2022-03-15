<template>
  <div>
    <div class="a-dropdown d-flex w-100" v-if="active">
      <div class="a-dropdown__overlay" @click="$emit('overlay-click')"></div>
      <div class="a-dropdown__content d-flex flex-col flex-center w-100">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    }
  }
})
</script>

<style lang="stylus" scoped>
.a-dropdown
  border 1px solid #eee
  box-shadow 0px 0px 10px 1px #f5f5f5
  border-radius 10px
  padding 14px
  background-color #fff

.a-dropdown__overlay
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  cursor initial
  z-index 1

.a-dropdown__content
  z-index 2

</style>
