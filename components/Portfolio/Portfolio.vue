<template>
  <div>
    <h1>Portfolio</h1>
    <span>
    <h2>mapState Funds: ${{portfolio.fundsAvailable}}</h2>     
    <h2>mapStore Funds: ${{portfolioStore.portfolio.fundsAvailable}}</h2>     
    <h2>setup() Funds: ${{setupPortfoliostore.portfolio.fundsAvailable}}</h2>     
    <v-btn @click="deposit200" text>Deposit $200</v-btn>
    <v-btn @click="depositAmount(1000)" text>Deposit $1000</v-btn>
    </span>
    <stock-table :stocks="portfolio.ownedStocks"/>
  </div>
</template>
<script lang="ts">
import { mapActions, mapStores} from 'pinia'
import Vue from 'vue'
import { usePortfolioStore } from '@/store/Portfolio'
import stockTable from './OwnedStocks.vue'
export default Vue.extend({
  components:{
    stockTable
  },
  setup(){
    const setupPortfoliostore = usePortfolioStore()
    return {setupPortfoliostore}
  },
  props: {
    portfolio: {
      type: Object as () => Portfolio,
      required: true
    }
  },
  computed:{
    ...mapStores(usePortfolioStore)
  },
  methods:{
    ...mapActions(usePortfolioStore, ['deposit200', 'depositAmount'])
  }
})

</script>
