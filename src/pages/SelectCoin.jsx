import React from 'react';
import { ArrowLeft, Search, Trash2, ArrowUpDown } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';
const SelectCoin = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white h-screen w-full max-w-md mx-auto">
      {/* Status Bar */}
     

      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
        <ArrowLeft className="text-gray-400" size={24} />
        <h1 className="text-xl font-medium flex-1 text-center">Select Coin</h1>
        <div className="w-6"></div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center bg-gray-800 rounded-md px-3 py-2">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search Coins"
            className="bg-transparent border-none outline-none text-white w-full placeholder-gray-400"
          />
        </div>
      </div>

      {/* Search History */}
      <div className="px-4 pb-2">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Search History</h2>
          <Trash2 size={20} className="text-gray-400" />
        </div>
        <div className="bg-gray-800 bg-opacity-50 px-4 py-3 rounded-md">
          USDT
        </div>
      </div>

      {/* Coin List */}
      <div className="px-4 mt-4 flex-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Coin List</h2>
          <ArrowUpDown size={20} className="text-gray-400" />
        </div>
       <Link to={'/usdt'}>
       <div className="bg-gray-800 bg-opacity-30 rounded-md p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs">₮</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">USDT</div>
                <div className="font-medium">139.96111239</div>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mt-1">
                <div>TetherUS</div>
                <div>≈ $139.96</div>
              </div>
            </div>
          </div>
        </div>
       </Link>
      </div>

        <BottomNavigation></BottomNavigation>

    </div>
  );
};

export default SelectCoin;