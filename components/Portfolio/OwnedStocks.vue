<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <td>Stock</td>
        <td>Abbrev</td>
        <td>#Owned</td>
        <td>Avg. Price</td>
        <td>Market Value</td>
      </thead>
      <tbody>
        <tr v-for="stock in stocks" :key="stock.abbrev">
          <td>{{stock.name}}</td>
          <td>{{stock.abbrev}}</td>
          <td>{{stock.numberOwned}}</td>
          <td>${{stock.avgPrice}}</td>
          <td>${{stock.avgPrice * stock.numberOwned}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props:{
    stocks:{
      type: Array as () => Array<PortfolioStock>,
      required: true
    }
  }
})
</script>