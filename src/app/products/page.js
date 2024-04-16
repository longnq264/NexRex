"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";

const Products = () => {
  const [state, setState] = useState([]);
  console.log("state", state);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/products");
      setState(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error fetching data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products">
      <h1>Our Product</h1>
      {state.map((data, index) => (
        <Link href={""} key={index}>
          {data.name}
        </Link>
      ))}
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
};

export default Products;
