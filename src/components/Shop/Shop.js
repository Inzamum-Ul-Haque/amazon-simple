import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // get the cart from local storage and update the quantity of the product we find and then update the cart whenever we reload the page. এটা না করলে আবার reload দিলে basic quantity টাই দেখাবে। তাই update করার জন্য এই useEffect দিতে হবে।
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
        setCart(savedCart);
      }
    }
  }, [products]);

  const addToCart = (selectedProduct) => {
    // whenever we click on add to cart, we add the products and also updating it to the cart as well as adding it to the local storage
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products
          .map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))
          .slice(0, 10)}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
