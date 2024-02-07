import React, { useState } from "react";
import ProductsList from "./ProductsList" 
import Sidebar from "./Sidebar";

import products from "../data/data"

function Menu() {
  const [filter, setFilter] = useState(null);

  const handleFilter = (type) => {
      setFilter(type);
  };

  const filteredProducts = filter
      ? products.filter((product) => product.category === filter)
      : products;

  return (
    <main>
      <Sidebar handleFilter={handleFilter}/>
      <ProductsList props={filteredProducts} />
    </main>
  );
}

export default Menu;
