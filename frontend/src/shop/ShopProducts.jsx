import React from "react";
import ring from "../assets/ring.png";
import necklace from "../assets/necklace.png";
import braclet from "../assets/braclet.png";
import earring from "../assets/earring.png";
import { Flame } from "lucide-react";
import { Link } from "react-router-dom";
const ShopProducts = () => {
  const products = [
    {
      id: 1,
      name: "Necklace",
      price: "19.99 DT",
      img: necklace,
    },
    {
      id: 2,
      name: "Braclet",
      price: "19.99 DT",
      img: braclet,
    },
    {
      id: 3,
      name: "Earring",
      price: "19.99 DT",
      img: earring,
    },
    {
      id: 4,
      name: "Ring",
      price: "19.99 DT",
      img: ring,
    },
  ];

  return (
    <div className="mx-10 grid grid-cols-4 gap-x-4 gap-y-16 mt-6">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="flex flex-col"
        >
          <div className="border-4 border-[#D6A6A6]">
            <img
              src={product.img}
              className="aspect-14/11 border-4 border-white object-cover"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className=" text-zinc-500 font-bold">{product.name}</h1>
              <span className=" text-sm">{product.price}</span>
            </div>
            <div className="flex items-center justify-center">
              <Flame className="w-6 h-6 text-[#D6A6A6]" />
              <div className="border-2 border-[#D6A6A6] w-fit h-fit rounded-2xl">
                <button className=" px-3 py-1 border-2 bg-[#D6A6A6] text-white text-xs font-bold rounded-2xl border-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <div className="flex flex-col">
        <div className="border-4 border-[#D6A6A6]">
          <img
            src={necklace}
            className="aspect-14/11 border-2 border-white object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1>Product Name</h1>
          <span>$19.99</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border-4 border-[#D6A6A6]">
          <img
            src={braclet}
            className="aspect-14/11 border-2 border-white object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1>Product Name</h1>
          <span>$19.99</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border-4 border-[#D6A6A6]">
          <img
            src={earring}
            className="aspect-14/11 border-2 border-white object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1>Product Name</h1>
          <span>$19.99</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border-4 border-[#D6A6A6]">
          <img
            src={ring}
            className="aspect-14/11 border-2 border-white object-cover"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="border">Product Name</h1>
            <span className="border">$19.99</span>
          </div>
          <div className="flex  items-center justify-center">
            <Flame className="w-6 h-6 text-[#D6A6A6]" />
            <div className="border-2 border-[#D6A6A6] w-fit h-fit rounded-2xl">
              <button className=" px-3 py-1 border-2 bg-[#D6A6A6] text-white text-sm font-bold rounded-2xl border-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
