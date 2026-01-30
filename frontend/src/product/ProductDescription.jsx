import React, { useState } from "react";
import { Star, ShoppingBag, Heart, ShoppingBasket, Flame } from "lucide-react";
const ProductDescription = () => {
  const [selectedSize, setSelectedSize] = useState("Adjustable");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const sizes = ["Small", "Medium", "Large", "Adjustable"];

  return (
    <div className="flex-1 max-w-xl">
      <div className="mb-2">
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "#D6A6A6" }}
        >
          New Arrival
        </span>
      </div>

      <h1
        className="text-4xl mb-2 font-light tracking-tight"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Layered Chain Bracelet
      </h1>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-current"
              style={{ color: "#D6A6A6" }}
            />
          ))}
        </div>
        <span className="text-sm text-neutral-600">(89 reviews)</span>
      </div>

      <div className="mb-8">
        <span
          className="text-3xl font-light"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          $32.00
        </span>
        <span className="text-sm text-neutral-500 ml-2 line-through">
          $45.00
        </span>
      </div>

      <div className="space-y-6 mb-8">
        {/* <p className="text-neutral-700 leading-relaxed">
          Add a touch of elegance to your everyday look with this delicate
          layered chain bracelet. Crafted from premium alloy with a beautiful
          finish, featuring multiple dainty chains that create a stunning
          layered effect. Perfect for stacking or wearing alone.
        </p> */}

        {/* <div className="flex gap-3 text-sm">
          <div
            className="flex-1 py-3 px-4 rounded-sm"
            style={{ backgroundColor: "#D6B6A6", color: "white" }}
          >
            <div className="font-medium mb-1">Hypoallergenic</div>
            <div className="text-xs opacity-90">Nickel-Free</div>
          </div>
          <div
            className="flex-1 py-3 px-4 rounded-sm"
            style={{ backgroundColor: "#D6A6A6", color: "white" }}
          >
            <div className="font-medium mb-1">Water Resistant</div>
            <div className="text-xs opacity-90">Tarnish-Free</div>
          </div>
        </div> */}
      </div>

      {/* <div className="mb-6">
        <label className="block text-sm font-medium mb-3 tracking-wide">
          Size
        </label>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-2.5 px-3 rounded-md border-2 transition-all duration-300 text-sm ${
                selectedSize === size
                  ? "shadow-md"
                  : "hover:scale-105 border-neutral-300"
              }`}
              style={{
                borderColor: selectedSize === size ? "#D6A6A6" : undefined,
                backgroundColor: selectedSize === size ? "#D6A6A6" : "white",
                color: selectedSize === size ? "white" : "#333",
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div> */}

      <div className="mb-8">
        <label className="block text-sm font-medium mb-3 tracking-wide">
          Quantity
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110"
            style={{ borderColor: "#D6A6A6", color: "#D6A6A6" }}
          >
            −
          </button>
          <span className="text-lg font-light w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110"
            style={{ borderColor: "#D6A6A6", color: "#D6A6A6" }}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <button
          className="flex-1 py-4 px-6 rounded-sm text-white font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
          style={{ backgroundColor: "#D6A6A6" }}
        >
          <ShoppingBasket className="w-6 h-6" />
          Add to Cart
        </button>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="w-14 h-14 rounded-sm border-2 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          style={{
            borderColor: "#D6A6A6",
            backgroundColor: isFavorite ? "#D6A6A6" : "white",
          }}
        >
          <Flame
            className={`w-6 h-6 transition-all duration-300 ${isFavorite ? "fill-current" : ""}`}
            style={{ color: isFavorite ? "white" : "#D6A6A6" }}
          />
        </button>
      </div>

      <div className="border-t pt-6 "></div>
    </div>
  );
};

export default ProductDescription;
