import React, { useState } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import BottomNavigation from "../components/BottomNavigation";
import withdrawpage from '../assets/history.png'
import usdt from '../assets/usdt.png'
import {Link} from 'react-router-dom'
export default function CryptoTransfer() {
  const [amount, setAmount] = useState("6.21555119");

  return (
    <div className="flex flex-col min-h-screen color text-white font-sans max-w-md mx-auto p-4">
      <div className=" flex items-center justify-between">
       <Link to={"/selectCoin"}>  <ArrowLeft size={20} /></Link>
        <div className=" font-semibold text-white">Transfer</div>
        <div className="flex space-x-4">
          {/* <Clipboard size={20} />
          <Maximize2 size={20} /> */}
          <img src={withdrawpage} alt="" width={35} />
        </div>
      </div>
      {/* Transfer Source & Destination */}
      <div className=" fromColor rounded-lg overflow-hidden py-2 flex flex-col gap-5 mt-5 relative">
        {/* From */}
        <div className="flex items-center justify-between px-4 border-gray-700">
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">From</span>
            <span className="font-medium">Spot Wallet</span>
           <ChevronRight size={20} className="text-gray-400 ml-22" />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-end -my-3 absolute top-12 right-[-1px] z-10 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="" transform="rotate(90)" fill="white" viewBox="0 0 226.8 226.8"><path d="M78.2 80.9V25.4L0 109.1h226.8V80.9zM0 145.9h148.6v55.5l78.2-83.8H0z"/></svg>
        </div>

        {/* To */}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">To</span>
            <span className="font-medium ml-4">Funding</span>
          <ChevronRight size={20} className="text-gray-400 ml-29" />
          </div>
        </div>
      </div>

      {/* Coin Selection */}
      <div className="mb-6 mt-4">
        <label className="text-gray-400 mb-2 block">Coin</label>
        <button className="flex items-center justify-between w-full fromColor py-3 px-2 rounded-lg">
          <div className="flex items-center">
          <img src={usdt} alt="" width={25} />
            <span className="font-medium ml-2">USDT</span>
            <span className="text-gray-400 text-[14px] ml-1">TetherUS</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <label className="text-gray-400 mb-2 block">Amount</label>
        <div className=" fromColor rounded-lg p-1">
          <div className="flex items-center justify-between">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent text-white text-xl font-medium p-1 w-full focus:outline-none"
            />
            <div className="flex items-center">
              <span className="mr-3">USDT</span>
              <button className="text-yellow-500 font-medium">Max</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between mt-2 text-sm">
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
