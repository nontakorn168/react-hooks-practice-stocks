import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [ portfolioStocks , setPortfolioStocks] = useState([]);

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
