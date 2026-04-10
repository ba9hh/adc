import React, { useState } from "react";
import { CreditCard, Lock, ShoppingBag, X, Plus } from "lucide-react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "United States",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Layered Chain Bracelet",
      size: "Adjustable",
      price: 32.0,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&q=80",
    },
    {
      id: 2,
      name: "Minimalist Hoop Earrings",
      size: "Small",
      price: 28.0,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 5.0;
  const discount = promoApplied ? 10.0 : 0;
  const total = subtotal + shipping - discount;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setPromoApplied(true);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F6" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
        
        * {
          font-family: 'Montserrat', sans-serif;
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #D6A6A6;
          box-shadow: 0 0 0 3px rgba(214, 166, 166, 0.1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        {/* <div className="text-center mb-12 animate-slide-in">
          <h1
            className="text-5xl mb-3 font-light tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Checkout
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
            <Lock className="w-4 h-4" style={{ color: "#D6A6A6" }} />
            <span>Secure checkout powered by Stripe</span>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Forms */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div
              className="bg-white rounded-lg p-8 shadow-sm animate-slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h2
                className="text-2xl mb-6 font-light"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div
              className="bg-white rounded-lg p-8 shadow-sm animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h2
                className="text-2xl mb-6 font-light"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-700">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                      placeholder="10001"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div
              className="bg-white rounded-lg p-8 shadow-sm animate-slide-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h2
                className="text-2xl mb-6 font-light"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Payment Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200 pr-12"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                    <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md transition-all duration-200"
                      placeholder="123"
                      maxLength="3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div
              className="bg-white rounded-lg p-8 shadow-sm sticky top-8 animate-slide-in"
              style={{ animationDelay: "0.4s" }}
            >
              <h2
                className="text-2xl mb-6 font-light"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 pb-6 border-b">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-medium"
                        style={{ backgroundColor: "#D6A6A6" }}
                      >
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{item.name}</h3>
                      <p className="text-sm text-neutral-600">
                        Size: {item.size}
                      </p>
                      <p className="text-sm font-medium mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="mb-6 pb-6 border-b">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-2 border border-neutral-300 rounded-md text-sm transition-all duration-200"
                    placeholder="Enter promo code"
                    disabled={promoApplied}
                  />
                  <button
                    onClick={applyPromo}
                    disabled={promoApplied}
                    className="px-6 py-2 rounded-md text-white text-sm font-medium transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#D6A6A6" }}
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <div
                    className="mt-2 flex items-center gap-2 text-sm"
                    style={{ color: "#D6A6A6" }}
                  >
                    <Plus className="w-4 h-4" />
                    <span>Promo code applied!</span>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div
                    className="flex justify-between"
                    style={{ color: "#D6A6A6" }}
                  >
                    <span>Discount</span>
                    <span className="font-medium">-${discount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6 text-lg">
                <span className="font-medium">Total</span>
                <span
                  className="text-2xl font-light"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Place Order Button */}
              <button
                className="w-full py-4 rounded-md text-white font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                style={{ backgroundColor: "#D6A6A6" }}
              >
                <Lock className="w-5 h-5" />
                Place Order
              </button>

              <p className="text-xs text-center text-neutral-500 mt-4">
                By placing your order, you agree to our terms and privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
