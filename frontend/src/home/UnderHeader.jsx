import React from "react";
import aneb from "../assets/3neb.png";
import dele3 from "../assets/dele3.png";
import karmous from "../assets/karmous.png";
import kiwi1 from "../assets/kiwi1.png";
import fruits from "../assets/fruits.png";

const UnderHeader = () => {
  return (
    <div className="px-10 mt-6">
      <div className="grid grid-cols-5 w-full border">
        <img src={aneb} className="w-full h-full" />
        <img src={dele3} className="w-full h-full" />
        <img src={fruits} className="w-full h-full" />
        <img src={kiwi1} className="w-full h-full" />
        <img src={karmous} className="w-full h-full" />
      </div>
    </div>
  );
};

export default UnderHeader;
