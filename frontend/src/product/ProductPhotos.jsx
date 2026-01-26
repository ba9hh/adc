import React from "react";
import necklace from "../assets/necklace.png";
const ProductPhotos = () => {
  return (
    <div className="flex gap-8 border">
      <img src={necklace} className="aspect-12/16 h-96 object-cover" />
    </div>
  );
};

export default ProductPhotos;
