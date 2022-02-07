import { defineStore } from "pinia";
import {MarketStocks} from '~/store/mockData/MarketStocks'

type stateStructure = {
  market: Market
}
export const useMarketStore = defineStore("market", {
  state: () : stateStructure => ({
    market: {
      stocks: MarketStocks
    }
  })
})