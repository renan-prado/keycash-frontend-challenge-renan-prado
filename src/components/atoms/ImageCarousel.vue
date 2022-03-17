<template>
  <div class="a-image-carousel">
    <Carousel :perPage="1">
      <Slide v-for="image in images" :key="image">
        <img class="w-100" :src="image" />
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
// ts-ignore usado pois nao existe o @types de vue-carousel
import { Carousel, Slide } from 'vue-carousel';

export default Vue.extend({
  components: { Carousel, Slide },
  props: ['images'],
})
</script>


<style lang="stylus">
.VueCarousel-dot-container
  margin-top 0 !important // sobrepor css inline
  button
    margin-top 0 !important // sobrepor css inline
    padding 2px !important // sobrepor css inline
    width 7px !important // sobrepor css inline
    height 7px !important // sobrepor css inline

    &[aria-selected="true"]
      background-color #ff0094 !important // sobrepor css inline
</style>
