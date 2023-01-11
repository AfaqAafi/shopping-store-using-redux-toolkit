import React from "react";
import { useDispatch } from "react-redux";
import { addItemTocart } from "../store/cartSlice";

const Products = ({ products }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addItemTocart(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
