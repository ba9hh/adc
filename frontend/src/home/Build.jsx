// import React from "react";

// const Build = () => {
//   return (
//     <div className="mx-20 mt-8 pb-20">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-semibold">🎨</h1>
//         <h1 className="px-3 text-2xl font-semibold text-[#D6B6A6] border-y-2 border-[#D6B6A6] pb-1">
//           CUSTOMIZE IT YOURSELF
//         </h1>
//         <h1 className="text-4xl font-semibold">💡</h1>
//       </div>
//       <div className="flex w-full">
//         <div className="grid grid-cols-2 w-2/3 border gap-x-3 gap-y-10">
//           <div className="flex flex-col border">
//             <h1 className="text-center p-4 text-xl font-semibold">
//               سلسلة / خيط
//             </h1>
//             <div className="grid grid-cols-5">
//               <div className="border p-2 m-2">🦪</div>
//               <div className="border p-2 m-2">🧿</div>
//               <div className="border p-2 m-2">⭐</div>
//               <div className="border p-2 m-2">🍀</div>
//               <div className="border p-2 m-2">🌙</div>
//             </div>
//           </div>
//           <div className="flex flex-col border">
//             <h1 className="text-center p-4 text-xl font-semibold">
//               خرز / تعويذات
//             </h1>
//             <div className="grid grid-cols-5">
//               <div className="border p-2 m-2">🦪</div>
//               <div className="border p-2 m-2">🧿</div>
//               <div className="border p-2 m-2">⭐</div>
//               <div className="border p-2 m-2">🍀</div>
//               <div className="border p-2 m-2">🌙</div>
//             </div>
//           </div>
//           <div className="flex flex-col border">
//             <h1 className="text-center p-4 text-xl font-semibold">خرز فاصل</h1>
//             <div className="grid grid-cols-5">
//               <div className="border p-2 m-2">🦪</div>
//               <div className="border p-2 m-2">🧿</div>
//               <div className="border p-2 m-2">⭐</div>
//               <div className="border p-2 m-2">🍀</div>
//               <div className="border p-2 m-2">🌙</div>
//             </div>
//           </div>
//           <div className="flex flex-col border">
//             <h1 className="text-center p-4 text-xl font-semibold">
//               قفل (إغلاق)
//             </h1>
//             <div className="grid grid-cols-5">
//               <div className="border p-2 m-2">🦪</div>
//               <div className="border p-2 m-2">🧿</div>
//               <div className="border p-2 m-2">⭐</div>
//               <div className="border p-2 m-2">🍀</div>
//               <div className="border p-2 m-2">🌙</div>
//             </div>
//           </div>
//         </div>
//         <div className="w-1/3 border">Result</div>
//       </div>
//     </div>
//   );
// };

// export default Build;
import React, { useState } from "react";
import circularBracelet from "../assets/circularBracelet.gif";
import puzzle from "../assets/puzzle.gif";
import creative from "../assets/creative.png";
import bead1 from "../assets/bead1.webp";
import bead2 from "../assets/bead2.webp";
import bead3 from "../assets/bead3.webp";
import bead4 from "../assets/bead4.webp";
// import bead1 from "../assets/bead1.webp";
// import bead2 from "../assets/bead2.webp";
import thread1 from "../assets/thread1.webp";
import thread2 from "../assets/thread2.webp";
import thread3 from "../assets/thread3.webp";
import thread4 from "../assets/thread4.webp";
import thread5 from "../assets/thread5.webp";
import thread6 from "../assets/thread6.webp";
import thread7 from "../assets/thread7.webp";
import thread8 from "../assets/thread8.webp";
const Build = () => {
  const [selectedChain, setSelectedChain] = useState(null);
  const [selectedBeads, setSelectedBeads] = useState([]);
  const [selectedSpacer, setSelectedSpacer] = useState(null);
  const [selectedClasp, setSelectedClasp] = useState(null);

  const chains = [
    {
      id: 1,
      img: "https://i.ebayimg.com/images/g/CsMAAOSwV9Nk9v6N/s-l500.webp",
      name: "Shell",
      color: "#F5E6D3",
    },
    {
      id: 2,
      img: "https://i.ebayimg.com/images/g/tt8AAOSwXe1k9v6W/s-l500.webp",
      name: "Evil Eye",
      color: "#4A90E2",
    },
    {
      id: 3,
      img: "https://i.ebayimg.com/images/g/zHYAAOSw4XNk9v6c/s-l500.webp",
      name: "Star",
      color: "#FFD700",
    },
    {
      id: 4,
      img: "https://i.ebayimg.com/images/g/iyQAAOSwlCtk9v6L/s-l500.webp",
      name: "Clover",
      color: "#90EE90",
    },
    {
      id: 5,
      img: "https://i.ebayimg.com/images/g/6BUAAOSwEtZk9v6P/s-l500.webp",
      name: "Moon",
      color: "#E6E6FA",
    },
    {
      id: 6,
      img: "https://i.ebayimg.com/images/g/eyIAAOSw7R9k9v6C/s-l500.webp",
      name: "Moon",
      color: "#E6E6FA",
    },
    {
      id: 7,
      img: "https://i.ebayimg.com/images/g/K4IAAOSwpdpk9v6e/s-l500.webp",
      name: "Moon",
      color: "#E6E6FA",
    },
    {
      id: 8,
      img: "https://i.ebayimg.com/images/g/P6UAAOSwY-Vk9v6E/s-l500.webp",
      name: "Moon",
      color: "#E6E6FA",
    },
  ];

  const beads = [
    {
      id: 1,
      img: "https://i.etsystatic.com/62205090/r/il/17d0c3/7352163858/il_794xN.7352163858_6ud6.jpg",
      name: "Diamond",
    },
    {
      id: 2,
      img: "https://i.etsystatic.com/62205090/r/il/d23d4c/7400096301/il_794xN.7400096301_om8b.jpg",
      name: "Crystal",
    },
    {
      id: 3,
      img: "https://i.etsystatic.com/62205090/r/il/67aae8/7352163874/il_794xN.7352163874_sv5p.jpg",
      name: "Flower",
    },
    {
      id: 4,
      img: "https://i.etsystatic.com/62205090/r/il/dd91b1/7400096299/il_794xN.7400096299_dc7g.jpg",
      name: "Heart",
    },
    {
      id: 5,
      img: "https://i.etsystatic.com/62205090/r/il/40f166/7400096313/il_794xN.7400096313_qnow.jpg",
      name: "Butterfly",
    },
    {
      id: 6,
      img: "https://i.etsystatic.com/62205090/r/il/9fa23a/7352163876/il_794xN.7352163876_dol5.jpg",
      name: "Sparkle",
    },
    {
      id: 7,
      img: "https://i.etsystatic.com/62205090/r/il/e90bfc/7400096333/il_794xN.7400096333_4de3.jpg",
      name: "Sparkle",
    },
    {
      id: 8,
      img: "https://i.etsystatic.com/62205090/r/il/af8efd/7400096323/il_794xN.7400096323_s78i.jpg",
      name: "Sparkle",
    },
    {
      id: 9,
      img: "https://i.etsystatic.com/62205090/r/il/b209bc/7352163914/il_794xN.7352163914_3alz.jpg",
      name: "Sparkle",
    },
    {
      id: 10,
      img: "https://i.etsystatic.com/62205090/r/il/42003f/7352163866/il_794xN.7352163866_7dox.jpg",
      name: "Sparkle",
    },
    {
      id: 11,
      img: "https://i.etsystatic.com/62205090/r/il/19bf2b/7400096331/il_794xN.7400096331_c7ff.jpg",
      name: "Sparkle",
    },
    {
      id: 12,
      img: "https://i.etsystatic.com/62205090/r/il/1f737b/7352163900/il_794xN.7352163900_3cop.jpg",
      name: "Sparkle",
    },
  ];

  const toggleBead = (bead) => {
    setSelectedBeads((prev) => {
      const exists = prev.find((b) => b.id === bead.id);
      if (exists) {
        return prev.filter((b) => b.id !== bead.id);
      } else if (prev.length < 3) {
        return [...prev, bead];
      }
      return prev;
    });
  };

  const clearAll = () => {
    setSelectedChain(null);
    setSelectedBeads([]);
    setSelectedSpacer(null);
    setSelectedClasp(null);
  };

  const renderBracelet = () => {
    if (
      !selectedChain &&
      selectedBeads.length === 0 &&
      !selectedSpacer &&
      !selectedClasp
    ) {
      return (
        <div className="text-center text-gray-400 text-lg">
          Select components to build your bracelet
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 items-center gap-1 text-3xl">
        {selectedChain && (
          <div className="flex justify-center items-center h-fit">
            <img src={selectedChain.img} className="object-cover rounded-lg" />
          </div>
        )}

        {selectedBeads.map((bead, index) => (
          <div key={index} className="h-full">
            <img src={bead.img} className="object-cover rounded-lg h-full" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mx-4 md:mx-20 mt-8">
      <div className="flex justify-between items-center mb-8">
        {/* <h1 className="text-4xl font-semibold">🎨</h1> */}
        <h1 className="text-xl md:text-3xl font-bold text-[#D6A6A6] border-[#D6B6A6] pb-1">
          CUSTOMIZE
        </h1>
        <img
          src={creative}
          alt="Circular Bracelet"
          className="w-20  h-10 object-cover"
        />
        <h1 className="px-3 text-xl md:text-3xl font-semibold text-[#D6B6A6] border-y-2 border-[#D6B6A6] pb-1 rounded-full">
          it
        </h1>
        <img
          src={creative}
          alt="Circular Bracelet"
          className="w-20  h-10 object-cover"
        />
        <h1 className="text-xl md:text-3xl font-bold text-[#D6A6A6] border-[#D6B6A6] pb-1">
          YOURSELF
        </h1>
        {/* <h1 className="text-4xl font-semibold">💡</h1> */}
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:w-2/3 gap-4">
          <div className="flex flex-col border-2 border-gray-200 rounded-lg overflow-hidden">
            <h1 className="text-center p-4 text-xl font-semibold bg-gradient-to-r from-blue-100 to-purple-100">
              Charms (max 5)
            </h1>
            <div className="grid grid-cols-4 p-2">
              {beads.map((bead) => (
                <div
                  key={bead.id}
                  onClick={() => toggleBead(bead)}
                  className={`border-2 rounded-lg m-1 cursor-pointer text-2xl text-center transition-all hover:scale-110 ${
                    selectedBeads.find((b) => b.id === bead.id)
                      ? "border-green-500 bg-green-50 shadow-lg"
                      : "border-gray-300 hover:border-green-300"
                  }`}
                >
                  <img src={bead.img} className="object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col border-2 border-gray-200 rounded-lg overflow-hidden">
            <h1 className="text-center p-4 text-xl font-semibold bg-gradient-to-r from-purple-100 to-pink-100">
              Thread
            </h1>
            <div className="grid grid-cols-4 p-2">
              {chains.map((chain) => (
                <div
                  key={chain.id}
                  onClick={() => setSelectedChain(chain)}
                  className={`border-2 rounded-lg m-1 cursor-pointer text-2xl text-center transition-all hover:scale-110 ${
                    selectedChain?.id === chain.id
                      ? "border-blue-500 bg-blue-50 shadow-lg"
                      : "border-gray-300 hover:border-blue-300"
                  }`}
                >
                  <img src={chain.img} className="object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 border-2 border-gray-200 rounded-lg p-6 bg-gradient-to-br from-pink-50 to-purple-50">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Your Custom Bracelet
          </h2>
          <div className="bg-white rounded-lg p-6 min-h-[200px] flex items-center justify-center shadow-inner">
            {renderBracelet()}
          </div>

          <div className="mt-6 space-y-3">
            <button
              onClick={clearAll}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Clear All
            </button>

            <button className="w-full bg-[#D6A6A6] hover:bg-[#C4A594] text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
