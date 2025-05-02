import React from 'react';
import { ArrowLeft, Search, Trash2,  } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';
import UsdtImg from '/public/usdt.svg' ;
import a_z from '../assets/a-z.png' ;
import search from '../assets/search.png' 
import trash from '../assets/delete.png' 
import dol2 from '../assets/dol2.jpg'
import tet from '../assets/la.jpg'
const SelectCoin = () => {
  return (
    <div className="flex flex-col color text-white h-screen w-full max-w-md mx-auto">
      {/* Status Bar */}
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
        <ArrowLeft className="text-gray-400" size={24} />
        <h1 className="text-xl font-medium flex-1 text-center">Select Coin</h1>
        <div className="w-6"></div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center fromColor rounded-md px-3 py-2 gap-3">
          {/* <Search size={20} className="text-gray-400 mr-2" /> */}
           <img src={search} alt="" width={22} />
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
          <img src={trash} alt="" width={40} />
        </div>
        <span className="p-2 font-normal bg-opacity-50 fromColor  py-1 rounded-md">
          USDT
        </span>
      </div>

      {/* Coin List */}
      <div className="px-4 mt-4 flex-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Coin List</h2>
          <img src={a_z} alt="" width={22} className='mr-1' />
          {/* <ArrowUpDown size={20} className="text-gray-400" /> */}
        </div>
       <Link to={'/usdt'}>
        <div className="flex  justify-between mb-4 relative pr-1">
                 <img src={tet} alt="" width={100} />
                 <div className="text-right relative">
                   <div className="relative">
                     <div className="">139.96111239</div>
                   </div>
                   <div className="text-gray-400 text-[12px] flex items-center text-right absolute right-0 "> <img src={dol2} width={15} alt="" /> 139.96</div>
                 </div>
               </div>
       {/* <div className="bg-gray-800 bg-opacity-30 rounded-md p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
              <img src={UsdtImg} width={24}  alt="" />
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
        </div> */}
       </Link>
      </div>

        <BottomNavigation></BottomNavigation>

    </div>
  );
};

export default SelectCoin;