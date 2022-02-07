<template>
  <market-component :market="market2"/>
</template>

<script>
import MarketComponent from "@/components/Market/Market.vue"
import {useMarketStore} from '@/store/Market'
import { mapState } from 'pinia'
export default {
  name: 'Market',
  components:{
    MarketComponent
  },
  data(){
    return{
      market2:{
        abbrev: "TEST"
      }
    }
  },
  computed:{
    ...mapState(useMarketStore, ['market'])
  }
}
</script>
