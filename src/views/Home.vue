<template>
  <div class="v-home">
    <Home />


    <FilterItem>
      Testeee
    </FilterItem>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Home } from '@/components/templates';
import { FilterItem } from '@/components/molecules';

export default Vue.extend({
  components: {
    Home,
    FilterItem,
  }
});
</script>
