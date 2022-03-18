<template>
  <div class="m-gallery d-flex w-100">
    <div class="m-gallery__top d-flex" v-if="images">
      <div class="m-gallery__image" v-for="image in images.slice(0,5)" :key="image">
        <img class="w-100" :src="image" />
      </div>
      <div class="m-gallery__image">
        <ImageCarousel v-if="images.length > 5" :images="images.slice(5,)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ImageCarousel } from '@/components/atoms';

export default Vue.extend({
  props: ['images'],
  components: { ImageCarousel },
})
</script>

<style lang="stylus">
.m-gallery
  background-color: #eee
  border-radius 40px
  overflow hidden

.m-gallery__top
  flex-wrap wrap

.m-gallery__image
  max-width 33.33%

  img
    height 100%

.VueCarousel-pagination
  position absolute
  bottom 10px

</style>
