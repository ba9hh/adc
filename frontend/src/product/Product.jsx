import React from "react";
import ProductPhotos from "./ProductPhotos.jsx";
import ProductDescription from "./ProductDescription.jsx";
import Header from "../components/Header.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";
const Product = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F6" }}>
      <style>{`
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>

      <div className="flex justify-center gap-8 mt-8 mx-20 py-12 animate-slide-up product-page">
        <ProductPhotos />
        <ProductDescription />
      </div>
    </div>
  );
};

export default Product;
