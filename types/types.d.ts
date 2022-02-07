type PortfolioStock = {
  name: string,
  abbrev: string,
  avgPrice: number,
  numberOwned: number
}
type MarketListing = {
  name: string,
  abbrev: string,
  currentPrice: number
}
type Portfolio = {
  name: string,
  ownedStocks: PortfolioStock[],
  fundsAvailable: number
}
type Market = {
  stocks: MarketListing[]
}