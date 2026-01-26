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
const Build = () => {
  const [selectedChain, setSelectedChain] = useState(null);
  const [selectedBeads, setSelectedBeads] = useState([]);
  const [selectedSpacer, setSelectedSpacer] = useState(null);
  const [selectedClasp, setSelectedClasp] = useState(null);

  const chains = [
    { id: 1, emoji: "🦪", name: "Shell", color: "#F5E6D3" },
    { id: 2, emoji: "🧿", name: "Evil Eye", color: "#4A90E2" },
    { id: 3, emoji: "⭐", name: "Star", color: "#FFD700" },
    { id: 4, emoji: "🍀", name: "Clover", color: "#90EE90" },
    { id: 5, emoji: "🌙", name: "Moon", color: "#E6E6FA" },
  ];

  const beads = [
    { id: 1, emoji: "💎", name: "Diamond" },
    { id: 2, emoji: "🔮", name: "Crystal" },
    { id: 3, emoji: "🌸", name: "Flower" },
    { id: 4, emoji: "❤️", name: "Heart" },
    { id: 5, emoji: "🦋", name: "Butterfly" },
    { id: 6, emoji: "🌟", name: "Sparkle" },
    { id: 7, emoji: "🎀", name: "Ribbon" },
    { id: 8, emoji: "🌺", name: "Hibiscus" },
  ];

  const spacers = [
    { id: 1, emoji: "⚪", name: "White Pearl" },
    { id: 2, emoji: "⚫", name: "Black Onyx" },
    { id: 3, emoji: "🔴", name: "Ruby" },
    { id: 4, emoji: "🟡", name: "Gold" },
    { id: 5, emoji: "🟢", name: "Emerald" },
  ];

  const clasps = [
    { id: 1, emoji: "🔗", name: "Chain Link" },
    { id: 2, emoji: "🔐", name: "Lock" },
    { id: 3, emoji: "💫", name: "Magnetic" },
    { id: 4, emoji: "🎯", name: "Toggle" },
    { id: 5, emoji: "🔒", name: "Secure" },
  ];

  const toggleBead = (bead) => {
    setSelectedBeads((prev) => {
      const exists = prev.find((b) => b.id === bead.id);
      if (exists) {
        return prev.filter((b) => b.id !== bead.id);
      } else if (prev.length < 5) {
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
      <div className="flex flex-wrap items-center justify-center gap-1 text-3xl">
        {selectedClasp && <span>{selectedClasp.emoji}</span>}
        {selectedChain && <span>{selectedChain.emoji}</span>}
        {selectedSpacer && <span>{selectedSpacer.emoji}</span>}
        {selectedBeads.map((bead, index) => (
          <React.Fragment key={index}>
            <span>{bead.emoji}</span>
            {index < selectedBeads.length - 1 && selectedSpacer && (
              <span className="text-2xl">{selectedSpacer.emoji}</span>
            )}
          </React.Fragment>
        ))}
        {selectedSpacer && <span>{selectedSpacer.emoji}</span>}
        {selectedChain && <span>{selectedChain.emoji}</span>}
        {selectedClasp && <span>{selectedClasp.emoji}</span>}
      </div>
    );
  };

  return (
    <div className="mx-4 md:mx-10 mt-8 pb-20">
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
            <h1 className="text-center p-4 text-xl font-semibold bg-gradient-to-r from-purple-100 to-pink-100">
              Chain / Thread
              <span className="block text-sm font-normal text-gray-600">
                سلسلة / خيط
              </span>
            </h1>
            <div className="grid grid-cols-5 p-2">
              {chains.map((chain) => (
                <div
                  key={chain.id}
                  onClick={() => setSelectedChain(chain)}
                  className={`border-2 rounded-lg p-3 m-1 cursor-pointer text-2xl text-center transition-all hover:scale-110 ${
                    selectedChain?.id === chain.id
                      ? "border-blue-500 bg-blue-50 shadow-lg"
                      : "border-gray-300 hover:border-blue-300"
                  }`}
                >
                  {chain.emoji}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col border-2 border-gray-200 rounded-lg overflow-hidden">
            <h1 className="text-center p-4 text-xl font-semibold bg-gradient-to-r from-blue-100 to-purple-100">
              Beads / Charms (max 5)
              <span className="block text-sm font-normal text-gray-600">
                خرز / تعويذات
              </span>
            </h1>
            <div className="grid grid-cols-4 p-2">
              {beads.map((bead) => (
                <div
                  key={bead.id}
                  onClick={() => toggleBead(bead)}
                  className={`border-2 rounded-lg p-3 m-1 cursor-pointer text-2xl text-center transition-all hover:scale-110 ${
                    selectedBeads.find((b) => b.id === bead.id)
                      ? "border-green-500 bg-green-50 shadow-lg"
                      : "border-gray-300 hover:border-green-300"
                  }`}
                >
                  {bead.emoji}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col border-2 border-gray-200 rounded-lg overflow-hidden">
            <h1 className="text-center p-4 text-xl font-semibold bg-gradient-to-r from-yellow-100 to-orange-100">
              Spacer Beads
              <span className="block text-sm font-normal text-gray-600">
                خرز فاصل
              </span>
            </h1>
            <div className="grid grid-cols-5 p-2">
              {spacers.map((spacer) => (
                <div
                  key={spacer.id}
                  onClick={() => setSelectedSpacer(spacer)}
                  className={`border-2 rounded-lg p-3 m-1 cursor-pointer text-2xl text-center transition-all hover:scale-110 ${
                    selectedSpacer?.id === spacer.id
                      ? "border-orange-500 bg-orange-50 shadow-lg"
                      : "border-gray-300 hover:border-orange-300"
                  }`}
                >
                  {spacer.emoji}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col border-2 border-gray-200 rounded-lg overflow-hidden">
            <h1 className="text-center p-4 text-xl font-semibold bg-gradient-to-r from-green-100 to-teal-100">
              Clasp / Closure
              <span className="block text-sm font-normal text-gray-600">
                قفل (إغلاق)
              </span>
            </h1>
            <div className="grid grid-cols-5 p-2">
              {clasps.map((clasp) => (
                <div
                  key={clasp.id}
                  onClick={() => setSelectedClasp(clasp)}
                  className={`border-2 rounded-lg p-3 m-1 cursor-pointer text-2xl text-center transition-all hover:scale-110 ${
                    selectedClasp?.id === clasp.id
                      ? "border-teal-500 bg-teal-50 shadow-lg"
                      : "border-gray-300 hover:border-teal-300"
                  }`}
                >
                  {clasp.emoji}
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
            <div className="text-sm text-gray-600">
              <p>
                <strong>Chain:</strong> {selectedChain?.name || "None"}
              </p>
              <p>
                <strong>Beads:</strong>{" "}
                {selectedBeads.length > 0
                  ? selectedBeads.map((b) => b.name).join(", ")
                  : "None"}
              </p>
              <p>
                <strong>Spacer:</strong> {selectedSpacer?.name || "None"}
              </p>
              <p>
                <strong>Clasp:</strong> {selectedClasp?.name || "None"}
              </p>
            </div>

            <button
              onClick={clearAll}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Clear All
            </button>

            <button className="w-full bg-[#D6B6A6] hover:bg-[#C4A594] text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
