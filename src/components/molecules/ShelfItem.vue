<template>
  <div class="m-shelf-item">
    <div class="m-shelf-item__images">
      <ImageCarousel :images="images" />
    </div>

    <div class="m-shelf-item__divisor" />

    <router-link :to="`/details/${id}`" class="d-flex flex-col">
      <h3> {{ address }} </h3>
      <h2> R$ {{ price }} </h2>

      <div class="m-shelf-item__divisor" />

      <div class="m-shelf-item__infos d-flex">
        <HouseInfo :image="`/usableArea.svg`" :text="usableArea < 10 ? `0${usableArea}` : usableArea" />
        <HouseInfo :image="`/bathrooms.svg`" :text="bathrooms < 10 ? `0${bathrooms}` : bathrooms" />
        <HouseInfo :image="`/bedrooms.svg`" :text="bedrooms < 10 ? `0${bedrooms}` : bedrooms" />
        <HouseInfo :image="`/parkingSpaces.svg`" :text="parkingSpaces < 10 ? `0${parkingSpaces}` : parkingSpaces" />
      </div>

    </router-link>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  ImageCarousel,
  HouseInfo,
} from '@/components/atoms';

export default Vue.extend({
  props: ['price', 'address', 'usableArea', 'bathrooms', 'bedrooms', 'parkingSpaces', 'images', 'id'],
  components: {
    ImageCarousel,
    HouseInfo,
  }
})
</script>

<style lang="stylus" scoped>
.m-shelf-item
  background-color white
  max-width 200px
  border 1px solid #f5f5f5
  padding 14px
  border-radius 10px
  box-shadow 2px 2px 7px 0px #f3f3f3

  h2
    font-size 18px
    font-weight 900
    margin 0 0 12px 0

  h3
    font-size 15px
    font-weight 600
    color #aaa

.m-shelf-item__infos
  justify-content space-between
  margin-top 10px

.m-shelf-item__divisor
  margin 10px 0
  border-bottom 1px solid #f5f5f5

</style>
