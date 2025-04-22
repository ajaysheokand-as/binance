import React, { useState } from 'react';
import { ChevronDown, Search, Eye , } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';

const Funding = () => {
  const [activeSection ,  setActiveSection] =  useState("Funding")
  return (
    <div className="bg-gray-900 text-white h-screen w-full max-w-md mx-auto flex flex-col">
      {/* Status Bar */}

      {/* Tab Navigation */}
      <div className="flex justify-center mt-2">
        <div className="grid grid-cols-2 gap-1 bg-gray-800 rounded-lg p-1 w-64">
          <div className="bg-gray-900 py-2 rounded-lg text-center font-medium">Exchange</div>
          <div className="py-2 text-center text-gray-400">Wallet</div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="flex justify-start border-b border-gray-800 px-2 text-sm">
               <Link 
               to={'/Assets'}
                 className={`py-3 px-2 mr-4 ${activeSection === 'Overview' ? 'text-white font-medium border-b-2 border-white' : 'text-gray-400'}`}
                 onClick={() => setActiveSection('Overview')}
               >
                 Overview
               </Link>
               <Link 
               to={'/funding'}
                 className={`py-3 px-2 mr-4 ${activeSection === 'Funding' ? 'text-white font-medium border-b-2 border-white' : 'text-gray-400'}`}
                 onClick={() => setActiveSection('Funding')}
               >
                 Funding
               </Link>
               <Link 
               to={'/spot'}
                 className={`py-3 px-2 mr-4 ${activeSection === 'Spot' ? 'text-white font-medium border-b-2 border-white' : 'text-gray-400'}`}
                 onClick={() => setActiveSection('Spot')}
               >
                 Spot
               </Link>
             </div>

      {/* Balance Section */}
      <div className="px-4 mt-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
        <div className="text-gray-400 mr-2">Est. Total Value</div>
        <Eye size={17} />
        </div>

          <div className="">
          <Link to={'/withdrawal'}><svg width={20} class="bn-svg icon-active left-icon-pc sidebar-icon-size shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z" fill="currentColor"></path></svg> </Link>
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-gray-400">Est. Total Value</span>
            <div className="ml-2 w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-full p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div> */}

        <div className="flex items-center mt-2">
          <div className="text-4xl font-semibold">$0.00</div>
          <div className="flex items-center ml-2 text-gray-400">
            <span>USD</span>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="mt-2 text-gray-400 flex items-center">
          <span>Today's PNL +$0.00(+0.00%)</span>
          <ChevronDown size={16} className="ml-1" />
        </div>

        {/* Action Buttons */}
        <div className="flex mt-4 space-x-3">
          <button className="bg-yellow-400 text-black font-medium py-3 rounded-lg flex-1">
            Add Funds
          </button>
          <button className="bg-gray-800 text-white font-medium py-3 rounded-lg flex-1">
            Send
          </button>
          <button className="bg-gray-800 text-white font-medium py-3 rounded-lg flex-1">
            Transfer
          </button>
        </div>
      </div>

      {/* Balances */}
      <div className="px-4 mt-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">Balances</div>
          <Search size={20} className="text-gray-400" />
        </div>

        {/* USDT */}
        <div className="mt-4 flex justify-between">
          <div className="flex">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white">T</div>
            <div className="ml-3">
              <div className="flex items-center">
                <span className="font-medium">USDT</span>
              </div>
              <div className="text-sm text-gray-400">TetherUS</div>
            </div>
          </div>
          <div className="text-right">
            <div>0.00</div>
            <div className="text-sm text-gray-400 mt-1">
              <div>Available 0.00</div>
              <div>Freeze 0.00</div>
            </div>
          </div>
        </div>

        {/* BTC */}
        <div className="mt-4 flex justify-between">
          <div className="flex">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">₿</div>
            <div className="ml-3">
              <div className="flex items-center">
                <span className="font-medium">BTC</span>
              </div>
              <div className="text-sm text-gray-400">Bitcoin</div>
            </div>
          </div>
          <div className="text-right">
            <div>0.00</div>
            <div className="text-sm text-gray-400 mt-1">
              <div>Available 0.00</div>
              <div>Freeze 0.00</div>
            </div>
          </div>
        </div>

        {/* BNB */}
        <div className="mt-4 flex justify-between">
          <div className="flex">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white">B</div>
            <div className="ml-3">
              <div className="flex items-center">
                <span className="font-medium">BNB</span>
              </div>
              <div className="text-sm text-gray-400">BNB</div>
            </div>
          </div>
          <div className="text-right">
            <div>0.00</div>
            <div className="text-sm text-gray-400 mt-1">
              <div>Available 0.00</div>
              <div>Freeze 0.00</div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation */}
    <BottomNavigation/>
    </div>
  );
};

export default Funding;