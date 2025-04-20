import React, { useState } from "react";
import { ChevronRight, ArrowUpDown } from "lucide-react";
import BottomNavigation from "../components/BottomNavigation";

export default function CryptoTransfer() {
  const [amount, setAmount] = useState("6.21555119");

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans max-w-md mx-auto p-4">
      {/* Transfer Source & Destination */}
      <div className="bg-gray-800 rounded-lg overflow-hidden mb-6 relative">
        {/* From */}
        <div className="flex items-center justify-between p-4 border-gray-700">
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">From</span>
            <span className="font-medium">Spot Wallet</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        {/* Swap Button */}
        <div className="flex justify-end -my-3 absolute top-14 right-[-1px] z-10 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="" transform="rotate(90)" fill="white" viewBox="0 0 226.8 226.8"><path d="M78.2 80.9V25.4L0 109.1h226.8V80.9zM0 145.9h148.6v55.5l78.2-83.8H0z"/></svg>
        </div>

        {/* To */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">To</span>
            <span className="font-medium">Funding</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>

      {/* Coin Selection */}
      <div className="mb-6">
        <label className="text-gray-400 mb-2 block">Coin</label>
        <button className="flex items-center justify-between w-full bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="bg-teal-500 rounded-full w-6 h-6 mr-2 flex items-center justify-center">
              <span className="text-white text-xs">$</span>
            </div>
            <span className="font-medium">USDT</span>
            <span className="text-gray-400 ml-2">TetherUS</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <label className="text-gray-400 mb-2 block">Amount</label>
        <div className="bg-gray-800 rounded-lg p-2">
          <div className="flex items-center justify-between">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent text-white text-xl font-medium p-2 w-full focus:outline-none"
            />
            <div className="flex items-center">
              <span className="mr-3">USDT</span>
              <button className="text-yellow-400 font-medium">Max</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <div className="text-gray-400">≈ 6.22 USD</div>
          <div className="text-gray-400">Available 6.21555119 USDT</div>
        </div>
      </div>
      <div></div>
      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Confirm Button */}
      <button className="bg-yellow-400 text-black font-medium py-4 mb-15 rounded-lg w-full">
        Confirm Transfer
      </button>
      <BottomNavigation />
    </div>
  );
}
