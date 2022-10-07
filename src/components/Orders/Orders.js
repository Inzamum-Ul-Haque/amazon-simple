import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
  const { products, previousCart } = useLoaderData();
  const [cart, setCart] = useState(previousCart);
  console.log(cart);

  return (
    <div>
      <div className="shop-container">
        <div className="products-container"></div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
