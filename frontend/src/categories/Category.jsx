import React from "react";
import CategoryProducts from "./CategoryProducts";
import { useParams } from "react-router-dom";
const Category = () => {
  const { category } = useParams();
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-5xl font-thin">{category}</h1>
      <CategoryProducts />
    </div>
  );
};

export default Category;
