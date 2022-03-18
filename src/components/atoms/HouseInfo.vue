<template>
  <div class="a-house-info">
    <img
      class="w-100"
      :src="image"
    />
    <h3> {{ text }} </h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
})
</script>


<style lang="stylus" scoped>
.a-house-info
  padding 10px
  border-radius 10px
  max-width 22px
  background-color #f8f8f8

  img
    opacity .3

  h3
    padding 0
    margin 0
    font-size 13px
    font-weight bold
    color #bbb
    text-align center
    display block

</style>
