<template>
  <div class="o-filter-slider">
    <VueSlider
      :min="rangeValue[0]"
      :max="rangeValue[1]"
      :interval="interval"
      :adsorb="true"
      v-model="range"
      @change="updateRange"
    />
    <span>
      <p> Buscar por <b>{{ rangeName.toLowerCase() }}</b> de </p>
      <label class="d-flex flex-center">
        <b v-if="unity === 'R$'">{{ unity }}</b>
        <p> <b>{{ range[0] }}</b> até <b>{{ range[1] }}</b></p>
        <b v-if="unity !== 'R$'">/ {{ unity }}</b>
      </label>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueSlider from 'vue-slider-component';
import './slider.css';

export default Vue.extend({
  props: ['rangeValue', 'rangeName', 'unity', 'interval', 'group', 'currentRange'],
  methods: {
    updateRange(newRange: number[]):void {
      this.$emit('updateRange', {
        range: newRange,
        group: this.group,
      });
    }
  },
  data: function () {
    return {
      range: this.currentRange,
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
  p
    margin 5px 0
  label
    gap 5px
  b
    color #ff0094

</style>
