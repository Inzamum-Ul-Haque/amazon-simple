import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div>
        <h3>This is products: {products.length}</h3>
      </div>
      <div>
        <h3>This is summary</h3>
      </div>
    </div>
  );
};

export default Shop;
