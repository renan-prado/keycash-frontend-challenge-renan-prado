<template>
  <div class="v-detail">

    <div class="v-detail__gallery">
      <Gallery :images="shelfHouse.images" />
    </div>

    <h1> {{ shelfHouse.address.formattedAddress }} </h1>

    <h2>
      <b>
        R$ {{ shelfHouse.price }}
      </b>
    </h2>

    <div class="v-detail__infos d-flex flex-center">
        <HouseInfo
          :image="`/usableArea.svg`"
          :text="shelfHouse.usableArea < 10
            ? `0${shelfHouse.usableArea}`
            : shelfHouse.usableArea" />
        <HouseInfo
          :image="`/bathrooms.svg`"
          :text="shelfHouse.bathrooms < 10
            ? `0${shelfHouse.bathrooms}`
            : shelfHouse.bathrooms" />
        <HouseInfo
          :image="`/bedrooms.svg`"
          :text="shelfHouse.bedrooms < 10
            ? `0${shelfHouse.bedrooms}`
            : shelfHouse.bedrooms" />
        <HouseInfo
          :image="`/parkingSpaces.svg`"
          :text="shelfHouse.parkingSpaces < 10
            ? `0${shelfHouse.parkingSpaces}`
            : shelfHouse.parkingSpaces" />
    </div>

  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex';
import { Gallery } from '@/components/molecules';
import { HouseInfo } from '@/components/atoms';
import { ISearchHouses } from '@/store/modules/Houses/types';

export default Vue.extend({
  components: {
    Gallery,
    HouseInfo,
  },

  mounted() {
    this.$store.dispatch('Houses/FETCH_HOUSES');
  },
  computed: {
    ...mapGetters({
      searchBase: 'Houses/GET_SEARCH_BASE',
    }),
    shelfHouse(): ISearchHouses {
      return this.searchBase.find((house: any) => house.id === this.$route.params.id);
    },
  },
})
</script>

<style lang="stylus">
.v-detail
  padding-top 30px

  h1
    color #888

.v-detail__infos
  gap 20px
  margin-top 40px

</style>
