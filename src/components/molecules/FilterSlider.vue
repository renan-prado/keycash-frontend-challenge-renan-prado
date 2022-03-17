<template>
  <div class="o-filter-slider">
    <VueSlider
      :min="rangePrice[0]"
      :max="rangePrice[1]"
      :interval="interval"
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
  props: ['rangePrice', 'rangeName', 'rangeMessage', 'interval', 'group', 'currentRange'],
  methods: {
    updateRange(newRange: number[]):void {
      this.$emit('updateRange', {
        range: newRange,
        group: this.group,
      });
    }
  },
  components: {
    VueSlider,
  },
});

</script>

<style lang="stylus" scoped>
.o-filter-slider span
  display block
  padding-top 20px
</style>
