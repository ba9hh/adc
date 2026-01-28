import React from "react";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const CardProducts = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <ShoppingBag className="w-24 h-24 text-gray-300 mb-4" />
        <h2 className="text-3xl font-bold text-zinc-700 mb-2">
          Your cart is empty
        </h2>
        <p className="text-zinc-500 mb-6">
          Add some products to get started shopping
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#D6A6A6] text-white font-bold rounded-lg hover:bg-[#c99595] transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-700">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 font-semibold flex items-center gap-2"
          >
            <Trash2 className="w-5 h-5" />
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 flex gap-6"
              >
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg border-4 border-white shadow"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-xl font-bold text-zinc-700 hover:text-[#D6A6A6] transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-lg text-zinc-600 mt-1">{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4 text-zinc-600" />
                      </button>
                      <span className="font-bold text-lg text-zinc-700 min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4 text-zinc-600" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-[#D6A6A6]">
                        {(
                          parseFloat(item.price.replace(" DT", "")) *
                          item.quantity
                        ).toFixed(2)}{" "}
                        DT
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-zinc-700 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal</span>
                  <span>{getTotalPrice().toFixed(2)} DT</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-zinc-700">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-[#D6A6A6]">
                      {getTotalPrice().toFixed(2)} DT
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#D6A6A6] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#c99595] transition-colors mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/"
                className="block text-center text-zinc-600 hover:text-[#D6A6A6] font-semibold transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-zinc-500 mb-2">
                  🚚 Free shipping on all orders
                </p>
                <p className="text-sm text-zinc-500 mb-2">
                  🔒 Secure checkout guaranteed
                </p>
                <p className="text-sm text-zinc-500">↩️ 30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
