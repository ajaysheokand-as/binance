import { ChevronDown, ArrowLeft, Clipboard, Maximize2, Info, User } from "lucide-react";
import { useState } from "react";
import withdrawpage from '../assets/withdrawpage.png'
import w from '../assets/w.png'
export default function USDT() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [availableBalance] = useState("139.9611239 USDT");

  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto bg-gray-900 text-gray-300 font-sans">
      {/* Status Bar */}
  

      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <ArrowLeft size={20} />
        <div className="text-xl font-semibold text-white">Send USDT</div>
        <div className="flex space-x-4">
          {/* <Clipboard size={20} />
          <Maximize2 size={20} /> */}
          <img src={withdrawpage} alt="" width={66} />
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-4 pt-2 flex flex-col space-y-4">
        {/* Address */}
        <div>
          <label className="text-sm text-gray-400">Address</label>
          <div className="mt-2 flex justify-between items-center bg-gray-800 rounded-md">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Long press to paste"
              className="w-full p-3 bg-transparent text-gray-300 outline-none"
            />
            <div className="flex space-x-2 pr-3">
            <img src={w} alt="" width={66} />
            </div>
          </div>
        </div>

        {/* Network */}
        <div>
          <label className="text-sm text-gray-400 flex items-center">
            Network <Info size={14} className="ml-1 text-gray-400" />
          </label>
          <div className="mt-2 p-3 flex justify-between items-center bg-gray-800 rounded-md cursor-pointer">
            <span className="text-gray-400">Automatically match the network</span>
            <ChevronDown size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Withdraw Amount */}
        <div>
          <label className="text-sm text-gray-400 flex items-center">
            Withdraw Amount <Info size={14} className="ml-1 text-gray-400" />
          </label>
          <div className="mt-2 flex justify-between items-center bg-gray-800 rounded-md">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Minimum 0"
              className="w-full p-3 bg-transparent text-gray-300 outline-none"
            />
            <div className="flex items-center space-x-2 pr-3">
              <span className="text-white">USDT</span>
              <button className="text-yellow-500 font-medium">Max</button>
            </div>
          </div>
        </div>

        {/* Available Balance */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Available:</span>
          <div className="flex items-center">
            <span className="text-sm">{availableBalance}</span>
            <ChevronDown size={16} className="ml-1 text-gray-400" />
          </div>
        </div>

        {/* Warnings */}
        <div className="space-y-2 mt-4">
          <p className="text-xs text-gray-400">
            * Do not withdraw directly to a crowdfund or ICO. We will not credit your account with tokens from that sale.
          </p>
          <p className="text-xs text-gray-400 flex items-center">
            * Do not transact with Sanctioned Entities. 
            <span className="text-yellow-500 ml-1">Learn more</span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 mt-auto border-t border-gray-800">
        <div className="mb-2">
          <p className="text-sm text-gray-400">Receive amount</p>
          <p className="text-2xl font-semibold text-white">{amount || "0.00"} USDT</p>
          <p className="text-sm text-gray-400">Network fee 0.00 USDT</p>
        </div>
        <button className="w-full p-3 bg-yellow-500 rounded-md text-gray-900 font-semibold mt-4">
          Withdraw
        </button>
      </div>
    </div>
  );
}