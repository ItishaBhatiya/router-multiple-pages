import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  let [products, setproducts] = useState([]);

  const getproducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setproducts(res.data);
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
      <div className="parent-box">
        {products.map((ele) => (
          <Link to={`/product/${ele.id}`}>
            <div className="Box">
              <h2>{ele.title}</h2>
              <img src={ele.image} alt={ele.title} />
              <h3>Price : $ {ele.price}</h3>
            </div>
          </Link>
        ))}
      </div>
  );
};

export default Product;
