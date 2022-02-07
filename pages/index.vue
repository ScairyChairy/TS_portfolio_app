<template>
  <PortfolioComponent :portfolio="portfolio" />
</template>

<script lang='ts'>
import Vue from 'vue'
import PortfolioComponent from '@/components/Portfolio/Portfolio.vue'
import {usePortfolioStore} from '@/store/Portfolio'
import { mapState } from 'pinia'


export default Vue.extend({
  components: {
    PortfolioComponent
  },
  computed:{
    ...mapState(usePortfolioStore, ['portfolio'])
  }
})
</script>
