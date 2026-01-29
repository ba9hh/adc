import React from "react";
import CategoryProducts from "./CategoryProducts";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
const Category = () => {
  const { category } = useParams();
  return (
    <div className="flex flex-col">
      <Breadcrumbs />
      <h1 className="text-[40px] font-normal text-center text-gray-500">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <CategoryProducts />
    </div>
  );
};

export default Category;
