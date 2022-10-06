import React, { useEffect, useState } from "react";
import Cart from "../components/Cart/Cart";
import Product from "../components/Product/Product";
import { addToDb, getStoredCart } from "../utilities/fakedb";

const NewShop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const savedCart = getStoredCart();
    const newCart = [];
    for (const id in savedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = addedProduct[id];
        addedProduct.quantity = quantity;
        newCart.push(addedProduct);
      }
    }
    setCart(newCart);
  }, [products]);

  const addToCartNew = (selectedProduct) => {
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
            <Product
              key={product.id}
              product={product}
              addToCart={addToCartNew}
            />
          ))
          .slice(0, 10)}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default NewShop;
