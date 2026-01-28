import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favoriteItems, removeFromFavorites, clearFavorites } = useFavorites();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (favoriteItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <Heart className="w-24 h-24 text-gray-300 mb-4" />
        <h2 className="text-3xl font-bold text-zinc-700 mb-2">
          No favorites yet
        </h2>
        <p className="text-zinc-500 mb-6">
          Start adding products you love to your favorites
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#D6A6A6] text-white font-bold rounded-lg hover:bg-[#c99595] transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-700">My Favorites</h1>
            <p className="text-zinc-500 mt-1">
              {favoriteItems.length}{" "}
              {favoriteItems.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={clearFavorites}
            className="text-red-500 hover:text-red-700 font-semibold flex items-center gap-2"
          >
            <Trash2 className="w-5 h-5" />
            Clear All
          </button>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <Link
                to={`/product/${product.id}`}
                className="block relative group"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full aspect-square object-cover border-4 border-white"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-all duration-300" />
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-bold text-zinc-700 hover:text-[#D6A6A6] transition-colors mb-2">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xl font-semibold text-[#D6A6A6] mb-4">
                  {product.price}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-[#D6A6A6] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#c99595] transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromFavorites(product.id)}
                    className="p-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                    aria-label="Remove from favorites"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add All to Cart Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() =>
              favoriteItems.forEach((product) => handleAddToCart(product))
            }
            className="bg-[#D6A6A6] text-white py-3 px-8 rounded-lg font-bold text-lg hover:bg-[#c99595] transition-colors flex items-center gap-3"
          >
            <ShoppingCart className="w-5 h-5" />
            Add All to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
