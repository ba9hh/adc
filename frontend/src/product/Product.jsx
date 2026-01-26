import React from "react";
import ProductPhotos from "./ProductPhotos.jsx";
import ProductDescription from "./ProductDescription.jsx";
import Header from "../components/Header.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";
const Product = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <Breadcrumbs />
      <div className="flex justify-center gap-8 mt-8 mx-20">
        <ProductPhotos />
        <ProductDescription />
      </div>
    </div>
  );
};

export default Product;
