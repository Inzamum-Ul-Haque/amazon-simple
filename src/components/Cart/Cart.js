import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total += product.price;
    shipping += product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${total + shipping + tax}</h5>
    </div>
  );
};

export default Cart;
