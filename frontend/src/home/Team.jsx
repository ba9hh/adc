import React from "react";
import sticker from "../assets/sticker.png";
import sticker1 from "../assets/sticker3.png";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
const Team = () => {
  const images = [member1, member1, member1, member1];
  const rotations = ["-rotate-3", "rotate-4", "-rotate-3", "rotate-4"];

  return (
    <div className="px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#D6A6A6]">
          <span className="text-xs font-light text-black">the </span>Team
        </h1>
        <img src={sticker} className="h-20" />
        <h1 className="text-3xl text-[#D6B6A6] font-semibold">Behind</h1>
        <img src={sticker} className="h-20" />
        <h1 className="text-3xl font-bold text-[#D6A6A6]">
          <span className="text-xs font-light text-black">the </span>Scene
        </h1>
      </div>
      <div className="grid grid-cols-4">
        {/* <img src={sticker} className="h-full" />
        <img src={sticker} className="h-full" />
        <img src={sticker} className="h-full" />
        <img src={sticker} className="h-full" /> */}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`${rotations[index]} transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-10`}
          >
            <img
              src={img}
              alt={`Member ${index + 1}`}
              className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
