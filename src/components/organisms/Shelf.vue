<template>
  <div class="o-shelf d-flex flex-center">
    <ShelfItem
      v-for="item in items"
      :key="item.id"
      :price="item.price"
      :address="item.address.formattedAddress"
      :bathrooms="item.bathrooms"
      :bedrooms="item.bedrooms"
      :parkingSpaces="item.parkingSpaces"
      :usableArea="item.usableArea"
      :images="item.images"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ShelfItem } from '@/components/molecules';

export default Vue.extend({
  props: ['items'],
  components: { ShelfItem }
})
</script>

<style lang="stylus" scoped>
.o-shelf
  gap 20px
  flex-wrap wrap
</style>

