import React, {useEffect, useState} from "react";
import Stock from "./Stock";

function StockContainer({sortBy,portfolioStocks, setPortfolioStocks,stocks, setStocks}) {

  


  function handleBuyStock(stock) {
    // Prevent duplicate stocks
    if (!portfolioStocks.some((s) => s.id === stock.id)) {
      setPortfolioStocks([...portfolioStocks, stock])
      console.log("Added to Portfolio:", stock.name);
      console.log("Port",portfolioStocks)
    }
  }

  useEffect(
    () => {
      fetch("http://localhost:3001/stocks")
        .then((r) => r.json())
        .then((s) => {setStocks(s);
        console.log("Fetch Stock", s)})
    },[]
  )

  

  console.log(stocks)

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stocks.length > 0 ? (
        stocks.map((stock) => (
      <Stock stock={stock} key={stock.id} Name={stock.name} Price={stock.price} AddStock={handleBuyStock} />
  ))
) : (
  <p>Loading stocks...</p>
)}
    </div>
  );
}

export default StockContainer;
