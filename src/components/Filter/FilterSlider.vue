<template>
  <div class="filter__slider">
    <VueSlider
      :min="rangePrice[0]"
      :max="rangePrice[1]"
      :interval="10"
      :adsorb="true"
      v-model="currentRange"
      @change="updateRange"
    />
    <span>
      Buscar {{ rangeName }} de <br />
      <b> {{ rangeMessage }} </b>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueSlider from 'vue-slider-component';
import './slider.css';

export default Vue.extend({
  props: ['rangePrice', 'rangeName', 'rangeMessage'],
  data: () => ({
    currentRange: [0, 100]
  }),
  mounted() {
    this.currentRange = this.rangePrice;
  },
  methods: {
    updateRange(newRange: number[]):void {
      this.$emit('updateRange', newRange);
    }
  },
  components: {
    VueSlider,
  },
});

</script>

<style lang="stylus" scoped>
.filter__slider span
  display block
  padding-top 20px
</style>
