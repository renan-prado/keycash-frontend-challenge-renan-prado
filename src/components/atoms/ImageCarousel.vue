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
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
})
</script>


<style lang="stylus">
// !importants usados para sobrepor css inline

.VueCarousel-dot-container
  margin-top 0 !important
  button
    margin-top 0 !important
    padding 2px !important
    width 7px !important
    height 7px !important

    &[aria-selected="true"]
      background-color #ff0094 !important
</style>
