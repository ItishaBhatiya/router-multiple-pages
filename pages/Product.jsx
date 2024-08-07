import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";

const Product = () => {
  let [products, setproducts] = useState([]);
  let [query, setquery] = useSearchParams();
  let [List, setList] = useState([]);

  const getproducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setproducts(res.data);
  };

  const sortBy = (orederBy) => {
    let data = [...products];
    if (orederBy == "LTH") {
      data = data.sort((a, b) => a.price - b.price);
      setList(data);
    } else {
      data = data.sort((a, b) => b.price - a.price);
      setList(data);
    }
  };
  const FilterBycategory = (category) => {
    let data = [...products];
    data=data.filter((ele) => ele.category === category);
    setList(data);
  };
  useEffect(() => {
    getproducts();
  }, []);

  useEffect(() => {
    let sort = query.get("sort");
    let category = query.get("category");

    if (sort) {
      sortBy(sort);
    }
    if (category) {
      FilterBycategory(category);
    }
    if(sort==null && category==null){
      setList(products);
    }
  }, [query]);
  return (
    <div className="parent-box">
      <div>
        <Filter/>
      </div>
      <br/>
      {List.map((ele) => (
        <Link to={`/product/${ele.id}`} style={{ textDecoration: "none" }}>
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
