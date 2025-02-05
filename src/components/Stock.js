import { id } from "date-fns/locale";
import React, {useState} from "react";

function Stock({stock,Name, Price,AddStock, SellStock}) {
  
  function handleClick() {
    if (AddStock) {
      AddStock(stock); // Buy stock
    } else if (SellStock) {
      SellStock(stock); // Sell stock
    }
  }
  



  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <p className="card-text">${Price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
