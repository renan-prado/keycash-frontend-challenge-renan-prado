<template>
  <div id="app">
    <div class="app__header d-flex w-100">
      <Header />
    </div>

    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Header } from '@/components/organisms';

export default Vue.extend({
  components: { Header }
});

</script>

<style lang="stylus">

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

html, body, a
  margin 0
  padding 0

#content
  margin-top 60px // header space

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

h1,h2,h3,h4,span,label,a,div
  font-family 'Nunito Sans', sans-serif

h1,h2
  color #ff0094
  font-weight 600

h3,h4,span,label,a
  color #000
  font-weight: normal

a
  display flex

.w-100
  width 100%

.d-flex
  display flex

.d-inline-block
  display inline-block

.flex-col
  flex-direction column

.flex-center
  justify-content center
  align-items center

.transition
  transition .2s

.app__header
  position fixed
  top 0
  left 0

</style>
