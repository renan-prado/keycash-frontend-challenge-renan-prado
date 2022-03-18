<template>
  <header class="o-header d-flex w-100">
    <div class="o-header__logo d-flex flex-center w-100">
      <Logo />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Logo } from '../atoms'

export default Vue.extend({
  components: { Logo }
})
</script>

<style lang="stylus" scoped>
.o-header
  height 60px
  background-color white
  box-shadow 1px 1px 1px #eee

.o-header__logo a
   width 100px
</style>

