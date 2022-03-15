<template>
  <header class="header">
    <Logo />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Logo } from './atoms'

export default Vue.extend({
  components: {
    Logo,
  },
})
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 60px
  display flex
  justify-content center
  align-items center
  background-color white
  box-shadow 1px 1px 1px #eee
  position fixed
  top 0
  left 0

  img
    width 100px

</style>
