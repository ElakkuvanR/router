import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/book">A book</Link>
        </li>
        <li>
          <Link to="/products/iphone">An iPhone</Link>
        </li>
        <li>
          <Link to="/products/tesla">A Tesla Car</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
