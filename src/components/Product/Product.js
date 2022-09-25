import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, ratings, price } = props.product;
  const { addToCart } = props;

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
      <button onClick={() => addToCart(props.product)} className="btn-cart">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
