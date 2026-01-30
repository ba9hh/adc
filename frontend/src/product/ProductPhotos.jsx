import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import necklace from "../assets/necklace.png";
const ProductPhotos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex-1 max-w-2xl">
      <div className="relative group mb-6">
        <div className="aspect-square overflow-hidden rounded-sm bg-neutral-100 relative">
          <img
            src={necklace}
            alt="Product"
            className="w-full h-full object-cover transition-opacity duration-700"
            style={{ animation: "fadeIn 0.5s ease-in" }}
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" style={{ color: "#D6A6A6" }} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-lg"
          >
            <ChevronRight className="w-5 h-5" style={{ color: "#D6A6A6" }} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`aspect-square overflow-hidden rounded-sm transition-all duration-300 ${
              currentImage === idx
                ? "ring-2 ring-offset-2"
                : "opacity-60 hover:opacity-100"
            }`}
            style={{
              ringColor: currentImage === idx ? "#D6A6A6" : "transparent",
            }}
          >
            <img
              src={img}
              alt={`View ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPhotos;
