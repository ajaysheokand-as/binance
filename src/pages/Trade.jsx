import React, { useState } from 'react';
import { ChevronDown, Plus, ArrowDown, Home, BarChart2, RotateCw, Layers, Inbox } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

export default function Trade() {


  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans max-w-md mx-auto">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex space-x-4">
          <button className="font-bold">Convert</button>
          <button className="text-gray-400">Spot</button>
          <button className="text-gray-400">Margin</button>
          <button className="text-gray-400">Buy/Sell</button>
          <button className="text-gray-400">P2</button>
        </div>
        <button className="text-gray-400">
          <div className="flex flex-col gap-1 items-end">
            <div className="h-0.5 w-5 bg-gray-400"></div>
            <div className="h-0.5 w-4 bg-gray-400"></div>
            <div className="h-0.5 w-3 bg-gray-400"></div>
          </div>
        </button>
      </div>

      {/* Market Selector */}
      <div className="flex justify-between items-center p-4">
        <button className="flex items-center space-x-1">
          <span>Market</span>
          <ChevronDown size={16} />
        </button>
        <button>
          <div className="w-6 h-6 flex items-center justify-center rounded">
            <span className="transform rotate-45">⟳</span>
          </div>
        </button>
      </div>

      {/* Main Conversion Form */}
      <div className="flex-1 px-4">
        {/* From Currency */}
        <div className="bg-gray-800 rounded-lg p-4 mb-3">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">From</span>
            <div className="text-gray-400 text-sm flex items-center">
              Available: 6.21555119 USDT
              <Plus size={16} className="ml-1 text-yellow-400" />
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-teal-500 rounded-full w-5 h-5"></div>
              <span className="font-medium">USDT</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
            <div className="text-right text-gray-300">0.01 - 190000</div>
          </div>
          
          <div className="flex justify-end mt-1">
            <button className="text-yellow-400 text-sm">Max</button>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-2 relative z-10">
          <button className="bg-gray-700 rounded-full p-2 border border-gray-600">
            <ArrowDown size={20} className="text-gray-400" />
          </button>
        </div>

        {/* To Currency */}
        <div className="bg-gray-800 rounded-lg p-4 mt-1">
          <div className="mb-2">
            <span className="text-gray-400">To</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="font-medium">TRX</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
            <div className="text-right text-gray-300">0.042 - 820000</div>
          </div>
        </div>

        {/* Trade Button */}
        <div className="mt-4 mb-8">
          <button className="w-full py-3 bg-yellow-700 rounded-lg font-medium">
            Trade
          </button>
        </div>
      </div>
      {/* Bottom Navigation */}
      
    <BottomNavigation/>
      
    </div>
  );
}