import { ChevronLeft, Scan, Copy, Info } from "lucide-react";
import { useState } from "react";
import withdrawalPage from '../assets/withdrawpage.png'
export default function CryptoNetworkSelector() {
  const [address, setAddress] = useState("");
  
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full font-sans">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-2">
        <div className="flex items-center">
          <ChevronLeft className="text-gray-400" size={24} />
        </div>
        <h1 className="text-xl font-medium text-gray-300">Send USDT</h1>
        <div className="flex space-x-4">
          <img src={withdrawalPage} alt="" width={70} />
        </div>
      </div>
      
      {/* Address input */}
      <div className="p-4 pt-0">
        <p className="text-gray-400 text-sm mb-2">Address</p>
        <input 
          type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="color w-full rounded-lg p-3 text-gray-200 "
          placeholder=""
        />
      </div>
      
      {/* Network selection */}
      <div className="px-4 py-2 color rounded-t-3xl">
        <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-6"></div>
        <h2 className="font-bold mb-4 text-xl">Choose Network</h2>
        
        {/* Network options */}
        <div className="space-y-4">
          {/* BNB Smart Chain */}
          <div className=" border assets rounded-xl p-4">
            <h3 className="font-bold">BNB Smart Chain (BEP20)</h3>
            <p className="text-gray-400 text-[12px]">Fee 0 USDT</p>
            <p className="text-gray-400 text-[12px]">Minimum withdrawal 4 USDT</p>
            <p className="text-gray-400 text-[12px]">Arrival time ≈ 1 mins</p>
          </div>
          
          {/* opBNB */}
          <div className="border assets rounded-xl p-4">
            <h3 className=" font-bold">opBNB</h3>
            <p className="text-gray-400 text-[12px] ">Fee 0 USDT</p>
            <p className="text-gray-400 text-[12px] ">Minimum withdrawal 20 USDT</p>
            <p className="text-gray-400 text-[12px] ">Arrival time ≈ 2 mins</p>
          </div>
          
          {/* Tron */}
          <div className="border assets rounded-xl p-4">
            <h3 className="font-bold">Tron (TRC20)</h3>
            <p className="text-gray-400 text-[12px]">Fee 1 USDT (≈ $1.00)</p>
            <p className="text-gray-400 text-[12px]">Minimum withdrawal 10 USDT</p>
            <p className="text-gray-400 text-[12px]">Arrival time ≈ 1 mins</p>
          </div>
          
          {/* Aptos */}
          <div className="border assets rounded-xl p-4">
            <h3 className=" font-bold">Aptos</h3>
            <p className="text-gray-400 text-[12px]">Fee 0.01 USDT (≈ $0.0100000)</p>
            <p className="text-gray-400 text-[12px]">Minimum withdrawal 10 USDT</p>
            <p className="text-gray-400 text-[12px]">Arrival time ≈ 1 mins</p>
          </div>
          
          {/* Ethereum */}
          <div className="border assets rounded-xl p-4">
            <h3 className="text-xl font-bold">Ethereum (ERC20)</h3>
            <p className="text-gray-400">Fee 1.5 USDT (≈ $1.50)</p>
          </div>
        </div>
        
        {/* Warning message */}
        <div className=" fixed bottom-0 right-0 left-0 color bg-opacity-50 rounded-lg mt-6 flex">
          <div className="px-4 py-3 flex color ">
          <Info size={20} className="text-gray-400 mr-2 flex-shrink-0 mt-1" />
          <p className="text-gray-400 text-[12px]">
            Ensure the network matches the withdrawal address and the deposit platform support it, or assets may be lost
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}