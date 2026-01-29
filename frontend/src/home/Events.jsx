import React from "react";
import valentine from "../assets/valentine2.png";
import mother from "../assets/mother2.png";
import anniversary from "../assets/anniversary.png";
import birthday from "../assets/birthday.png";
const Events = () => {
  return (
    <div className="mx-20 mt-8">
      <div className="flex justify-between items-center">
        <div className="border-b-2 border-[#D6A6A6]">
          <h1 className="border-b-2 text-[#D6A6A6] text-3xl font-bold mb-1">
            ADC
          </h1>
        </div>
        <h1 className="text-3xl">Is</h1>
        <h1 className="text-3xl font-semibold text-[#D6B6A6] border-b-2">
          Present
        </h1>
        <h1 className="text-3xl">In</h1>
        <h1 className="text-3xl">Your</h1>
        <div className="border-b-2 border-[#D6A6A6]">
          <h1 className="border-b-2 text-[#D6A6A6] text-3xl font-bold mb-1">
            EVENTS
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10">
        <div className="flex flex-col items-center">
          <img src={valentine} className="rounded-md" />
        </div>
        <div className="flex flex-col justify-center items-center px-4">
          <h1 className="text-2xl font-bold mb-3 inline-block">
            <span
              className={`bg-pink-200 px-3 py-1 -mx-1 -rotate-1 inline-block shadow-sm`}
            >
              Valentine's Day
            </span>
          </h1>
          <p className="text-gray-700 leading-relaxed italic text-center">
            “A small gift on Valentine’s Day is a sweet way to say I love you.”
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={mother} className="h-full rounded-md" />
        </div>
        <div className="flex flex-col justify-center items-center px-4">
          <h1 className="text-2xl font-bold mb-3 inline-block">
            <span
              className={`bg-purple-200 px-3 py-1 -mx-1 -rotate-1 inline-block shadow-sm`}
            >
              Mother's Day
            </span>
          </h1>
          <p className="text-gray-700 leading-relaxed italic text-center">
            “A thoughtful gift on Mother’s Day is a simple thank-you for her
            endless love.”
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-4">
          <h1 className="text-2xl font-bold mb-3 inline-block">
            <span
              className={`bg-rose-200 px-3 py-1 -mx-1 rotate-1 inline-block shadow-sm`}
            >
              Anniversary gifts
            </span>
          </h1>
          <p className="text-gray-700 leading-relaxed italic text-center">
            “An anniversary gift is a beautiful reminder of the love you share.”
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={anniversary} className="rounded-md" />
        </div>
        <div className="flex flex-col justify-center items-center px-4">
          <h1 className="text-2xl font-bold mb-3 inline-block">
            <span
              className={`bg-yellow-200 px-3 py-1 -mx-1 rotate-1 inline-block shadow-sm`}
            >
              Birthday gifts
            </span>
          </h1>
          <p className="text-gray-700 leading-relaxed italic text-center">
            “A birthday gift is a joyful way to celebrate someone special.”
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={birthday} className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Events;
