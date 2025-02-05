import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [ portfolioStocks , setPortfolioStocks] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [stocks, setStocks] = useState([]);
  const [filterBy, setFilterBy] = useState("All");
  let sortedStocks = [...stocks];
  if (sortBy === "Alphabetically") {
    sortedStocks.sort((a,b) => a.name.localeCompare(b.name));
  } else if (sortBy === "Price") {
    sortedStocks.sort((a,b) => a.price - b.price);
  }

  const filteredStocks = filterBy === "All"
  ? sortedStocks
  : sortedStocks.filter((stock) => stock.type === filterBy) 

  return (
    <div>
      <SearchBar setSortBy={setSortBy} sortBy={sortBy} setFilterBy={setFilterBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} setStocks={setStocks} portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
