import React, { useState } from "react";
import { useEffect } from "react";
import Products from "../components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="heading">Welcome to Redux Toolkit Store</h2>
      <section>
        <h3>Products</h3>
        <Products products={products} />
      </section>
    </div>
  );
};

export default Home;
