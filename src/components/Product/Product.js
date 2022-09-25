import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, ratings, price } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>
          <strong>Price: ${price}</strong>
        </p>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings} stars</p>
      </div>
      <button className="btn-cart">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
