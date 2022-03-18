<template>
  <div class="filter__checkbox">
    <h3> {{ title }} </h3>

    <div class="filter__checkbox-item" v-for="option in options" :key="option.id">
      <input
        type="checkbox"
        class="filter__input"
        :id="option.name + option.id"
        :value="option.id"
        v-model="checkedNames"
      />

      <label :for="option.name + option.id"> {{ option.name }} </label>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['options', 'title'],
  data: ()=> ({
    checkedNames: [],
  }),
  created() {
    this.checkedNames = this.options.map((item: any) => item.id);
  }
});

</script>

<style lang="stylus" scoped>

.filter__checkbox h3
  font-size 16px
  font-weight bold
  padding 0
  margin 0 0 15px 0

.filter__checkbox-item
  display flex
  align-items center
  height 40px
  border-bottom 1px solid #efefef

  input
    cursor pointer

  label
    display flex
    flex 1
    cursor pointer
    margin-left 10px
    font-size 14px


</style>
