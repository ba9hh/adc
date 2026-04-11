import React from "react";
import aneb from "../assets/3neb.png";
import dele3 from "../assets/dele3.png";
import karmous from "../assets/karmous.png";
import kiwi1 from "../assets/kiwi1.png";
import fruits from "../assets/fruits.png";

const UnderHeader = () => {
  return (
    // <div className="flex md:px-0 mt-6">
    //   <img src={aneb} className="w-1/5 h-full" />
    //   <img src={dele3} className="w-1/5 h-full mt-10" />
    //   <img src={fruits} className="w-1/5 h-full mt-20" />
    //   <img src={kiwi1} className="w-1/5 h-full mt-10" />
    //   <img src={karmous} className="w-1/5 h-full" />
    // </div>
    <div className="flex md:px-0 mt-6">
      <img src={aneb} className="w-1/5 h-full" />
      <img src={dele3} className="w-1/5 h-full pt-10" />
      <img src={fruits} className="w-1/5 h-full pt-20" />
      <img src={kiwi1} className="w-1/5 h-full pt-10" />
      <img src={karmous} className="w-1/5 h-full" />
    </div>
  );
};

export default UnderHeader;
