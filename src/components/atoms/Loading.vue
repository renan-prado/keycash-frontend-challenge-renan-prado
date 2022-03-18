<template>
  <img
    v-show="loading"
    class="a-loading"
    src="/loading.gif"
    alt="loading"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex';

export default Vue.extend({
    computed: {
    ...mapGetters({
      loading: 'Houses/GET_LOADING',
    }),
  },
})
</script>

<style lang="stylus" scoped>
.a-loading
  width 80px
</style>
