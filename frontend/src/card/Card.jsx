import React from "react";
import CardHeader from "./CardHeader";
import CardProducts from "./CardProducts";
import CartSummary from "./CartSummary";
const Card = () => {
  return (
    <div>
      <CardHeader />
      <CardProducts />
      <CartSummary />
    </div>
  );
};

export default Card;
