<template>
  <div>
    <h1>Market</h1>
    <market-listings :listings="market.stocks" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import MarketListings from '@/components/Market/MarketListings.vue'

export default Vue.extend({
  components: {
    MarketListings
  },
  props:{
    market:{
      type: Object as () => Market,
      required: true
    }
    // market: {
    //   type: Object as Vue.PropType<Market>,
    //   required: true
    // }
  }
})
</script>