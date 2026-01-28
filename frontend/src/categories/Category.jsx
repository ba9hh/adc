import React from "react";
import CategoryProducts from "./CategoryProducts";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
const Category = () => {
  const { category } = useParams();
  return (
    <div className="flex flex-col mt-6">
      <Breadcrumbs />
      {/* <h1 className="text-3xl mx-10 font-thin text-center ">{category}</h1> */}
      <CategoryProducts />
    </div>
  );
};

export default Category;
