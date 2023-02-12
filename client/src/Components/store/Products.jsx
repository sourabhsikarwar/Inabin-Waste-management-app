import React from "react";
import CatProduct from "./CatProduct";

const Products = () => {
  return (
    <div className="container max-w-7xl mx-auto">
        <h1 className="text-darkGreen text-center text-2xl font-semibold">All Products</h1>
      <div>
        <CatProduct name="Organic"/>
        <CatProduct name="Natural"/>
        <CatProduct name="Upcycled"/>
        <CatProduct name="Recycled"/>
      </div>
    </div>
  );
};

export default Products;
