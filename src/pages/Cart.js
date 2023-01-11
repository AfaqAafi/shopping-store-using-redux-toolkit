import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItemTocart,
  deleteItemTocart,
  incrementItemTocart,
} from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleRemoveitem = (id) => {
    dispatch(deleteItemTocart({ id }));
  };

  const incremntItem = (id) => {
    dispatch(incrementItemTocart({ id }));
  };
  const decremenItem = (id) => {
    dispatch(decrementItemTocart({ id }));
  };

  let totalPrice = products
    .map((product) => product)
    .reduce(function (total, acu) {
      return total + acu.quantity * acu.price;
    }, 0);

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => {
          return (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>${product.price}</h5>
              <button onClick={() => incremntItem(product.id)}>
                increment
              </button>
              <p>{product.quantity}</p>
              <button onClick={() => decremenItem(product.id)}>
                decrement
              </button>
              <button
                className="btn"
                onClick={() => handleRemoveitem(product.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
        <div>
          <h2>Total : {totalPrice}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
