import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer({sortBy ,portfolioStocks,setPortfolioStocks}) {
  
  function handleSellStock(stock) {
    setPortfolioStocks(portfolioStocks.filter((s) => s.id !== stock.id));
    console.log("Sell stock",stock.name)
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      
      {portfolioStocks.length > 0 ? (
        portfolioStocks.map((stock) => (
          <Stock sortBy={sortBy} key={stock.id} Name={stock.name} Price={stock.price} stock={stock} isPortfolio={true} SellStock={handleSellStock} />
        ))
      ) : (
        <p>No stocks in portfolio</p>
      )}
    </div>
  );
}

export default PortfolioContainer;
