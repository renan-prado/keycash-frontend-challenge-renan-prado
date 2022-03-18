<template>
  <div class="filter">
    <h2> Filtros </h2>
    <div class="filter__content">
      <FilterItem title="Preço">
        <FilterSlider
          :rangePrice="rangePrice"
          :rangeName="'imóveis'"
          :rangeMessage="`R$ ${currentRangePrice[0]} - ${currentRangePrice[1]}`"
          @updateRange="updateCurrentRangePrice"
        />
      </FilterItem>
      <FilterItem title="área útil">
        <FilterSlider
          :rangePrice="rangeArea"
          :rangeName="'área útil'"
          :rangeMessage="`${currentRangeArea[0]} - ${currentRangeArea[1]} m²`"
          @updateRange="updateCurrentRangeArea"
        />
      </FilterItem>
      <FilterItem title="vagas">
        <FilterCheckBox
          title="Quantidade de vagas"
          :options="[
            {
              id: 1,
              name: '1 Vaga',
            },
            {
              id: 2,
              name: '2 Vagas',
            },
          ]"
        />
      </FilterItem>
      <FilterItem title="banheiros">
        <FilterCheckBox
          title="Quantidade de banheiros"
          :options="[
            {
              id: 1,
              name: '1 banheiro',
            },
            {
              id: 2,
              name: '2 banheiros',
            },
            {
              id: 3,
              name: '3 banheiros',
            },
          ]"
        />
      </FilterItem>
      <FilterItem title="dormitórios">
        <FilterCheckBox
          title="Quantidade de dormitórios"
          :options="[
            {
              id: 1,
              name: '1 dormitório',
            },
            {
              id: 2,
              name: '2 dormitórios',
            },
            {
              id: 3,
              name: '3 dormitórios',
            },
            {
              id: 4,
              name: '4 dormitórios',
            },
          ]"
        />
      </FilterItem>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FilterItem from './FilterItem.vue';
import FilterSlider from './FilterSlider.vue';
import FilterCheckBox from './FilterCheckBox.vue';
import './slider.css';

export default Vue.extend({
  props: ['title'],
  data: () => ({
    rangePrice: [20, 70],
    currentRangePrice: [20, 70],
    rangeArea: [100, 200],
    currentRangeArea: [10, 200],
  }),
  methods: {
    updateCurrentRangePrice(newRange: number[]):void {
      this.currentRangePrice = newRange;
    },
    updateCurrentRangeArea(newRange: number[]):void {
      this.currentRangeArea = newRange;
    }
  },
  components: {
    FilterItem,
    FilterSlider,
    FilterCheckBox,
  },
});

</script>

<style lang="stylus" scoped>
.filter
  display flex
  flex-direction column
  justify-content center
  align-items center
  background-color white

  img
    width 100px

.filter__content
  display flex
  gap 10px

</style>
