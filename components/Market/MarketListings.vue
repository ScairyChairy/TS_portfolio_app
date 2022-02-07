<template>
   <v-simple-table>
    <template v-slot:default>
      <thead>
        <td>Stock</td>
        <td>Abbrev</td>
        <td>Current Price</td>
        <td>Actions</td>
      </thead>
      <tbody>
        <tr v-for="listing in listings" :key="listing.abbrev">
          <td>{{listing.name}}</td>
          <td>{{listing.abbrev}}</td>
          <td>{{listing.currentPrice}}</td>
          <td><v-btn text @click="buyStock(listing, 1)">BUY ONE</v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script lang="ts">
import Vue from 'vue'
import {usePortfolioStore} from '@/store/Portfolio'
import { mapActions } from 'pinia'
export default Vue.extend({
  props:{
    listings: {
      type: Array as () => Array<MarketListing>,
      required: true
    }
  }, 
  methods:{
    ...mapActions(usePortfolioStore, ['buyStock'])
  }
})
</script>