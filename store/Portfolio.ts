import { defineStore } from "pinia";
import OwnedStocks from '@/store/mockData/OwnedStocks.json'

type stateStructure = {
  portfolio: Portfolio
}

export const usePortfolioStore = defineStore("portfolio", {
  state: () :stateStructure => ({
    portfolio:{
      name: "myPortfolio",
      ownedStocks: OwnedStocks,
      fundsAvailable: 200      
    },
  }),
  actions:{
    deposit200():void{     
      this.portfolio.fundsAvailable += 200
    },
    
    depositAmount(amount: number):void{
      this.portfolio.fundsAvailable += amount 
    },

    buyStock(listing: MarketListing, count: number): void{
      let price:number = listing.currentPrice * count
      if(price > this.portfolio.fundsAvailable){

        console.error("NOT ENOUGH FUNDS")
        return
      }

      const stockKeys :string[]= this.portfolio.ownedStocks.map(stock => stock.abbrev)
      if(stockKeys.includes(listing.abbrev)){

        console.log("ADDING MORE TO THE PILE")

        let index: number = this.portfolio.ownedStocks.findIndex(ownedStock => ownedStock.abbrev === listing.abbrev)
        let stock = this.portfolio.ownedStocks[index]
        let currentMarketValue = (stock.avgPrice * stock.numberOwned)

        stock.numberOwned += count
        stock.avgPrice = (currentMarketValue + (listing.currentPrice * count)) / stock.numberOwned

      }else{

        console.log("CONGRATS ON THE NEW STOCK")

        let newStock:PortfolioStock = {
          ...listing,
          numberOwned: count,
          avgPrice: listing.currentPrice
        }

        this.portfolio.ownedStocks.push(newStock)
      }

      this.portfolio.fundsAvailable -= price
    }
  }
})