import React from "react";

export default function FruitScroll() {
  const fruits = [
    { emoji: "🍎", name: "Apple" },
    { emoji: "🍊", name: "Orange" },
    { emoji: "🍋", name: "Lemon" },
    { emoji: "🍌", name: "Banana" },
    { emoji: "🍉", name: "Watermelon" },
    { emoji: "🍇", name: "Grapes" },
    { emoji: "🍓", name: "Strawberry" },
    { emoji: "🫐", name: "Blueberry" },
    { emoji: "🍑", name: "Peach" },
    { emoji: "🍒", name: "Cherry" },
    { emoji: "🍍", name: "Pineapple" },
    { emoji: "🥝", name: "Kiwi" },
    { emoji: "🥭", name: "Mango" },
    { emoji: "🍐", name: "Pear" },
  ];

  return (
    <div className=" bg-gradient-to-br from-white via-[#D6B6A6] to-white flex items-center justify-center overflow-hidden md:mx-10">
      <div className="w-full">
        <div className="relative overflow-hidden py-4">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#D6B6A6] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#D6B6A6] to-transparent z-10"></div>

          {/* Second scrolling row (reverse direction) */}
          <div className="flex">
            <div className="flex animate-scroll-reverse">
              {[...fruits, ...fruits].map((fruit, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 bg-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20 hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-3xl">{fruit.emoji}</div>
                </div>
              ))}
            </div>
            <div className="flex animate-scroll-reverse" aria-hidden="true">
              {[...fruits, ...fruits].map((fruit, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 bg-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20 hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-3xl ">{fruit.emoji}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
