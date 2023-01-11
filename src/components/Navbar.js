import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((store) => store.cart);

  const list = items
    .map((item) => item.quantity)
    .reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  // console.log(list);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">CartItems {list} </span>
      </div>
    </div>
  );
};

export default Navbar;
