import React from "react";
import {
  Home,
  BarChart2,
  Circle,
  FileText,
  Layers,
  Search,
  Settings,
  Bell,
  Eye,
  ChevronRight,
  ChevronDown,
  History,
} from "lucide-react";
import BottomNavigation from "../components/BottomNavigation";
import { Link } from "react-router-dom";
const Assets = () => {
  return (
    <div className="flex flex-col max-w-md mx-auto h-screen bg-gray-900 text-white font-sans">
      {/* Status Bar */}
      {/* <div className="flex justify-between items-center px-4 py-2 text-xs">
        <div>12:52</div>
        <div className="flex items-center space-x-1">
          <span>35 KB/s</span>
          <div className="flex items-center">
            <span className="px-1 bg-white text-black rounded text-xs">
              5G+
            </span>
            <div className="flex space-x-1 ml-1">
              <div className="h-3 w-1 bg-white rounded-sm"></div>
              <div className="h-4 w-1 bg-white rounded-sm"></div>
              <div className="h-3 w-1 bg-white rounded-sm"></div>
              <div className="h-2 w-1 bg-white rounded-sm"></div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-1 bg-white rounded-sm"></div>
            <div className="h-4 w-1 bg-white rounded-sm"></div>
            <div className="h-5 w-1 bg-white rounded-sm"></div>
            <div className="h-3 w-1 bg-white rounded-sm"></div>
          </div>
          <div className="ml-1 px-1 bg-gray-700 rounded text-xs">49</div>
          <div className="w-6 h-3 bg-white rounded-sm relative">
            <div className="absolute right-0 top-0 w-1 h-3 bg-gray-900 rounded-r-sm"></div>
          </div>
        </div>
      </div> */}

      {/* Tab Navigation */}
      <div className="flex justify-between px-4 py-3 border-b border-gray-800">
        <div className="font-bold text-white px-4 py-1 bg-gray-800 rounded-lg">
          Exchange
        </div>
        <div className="text-gray-400 px-4 py-1">Wallet</div>
      </div>

      {/* Sub Navigation */}
      <div className="flex px-4 py-3 border-b border-gray-800">
        <div className="font-bold mr-6 relative">
          Overview
          <div className="absolute -bottom-3 left-0 right-0 h-1 bg-yellow-400 rounded"></div>
        </div>
        <div className="text-gray-400 mr-6">
          Spot
          <div className="absolute ml-8 -mt-6 w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="text-gray-400 mr-6"><Link to={'/funding'}> Funding</Link></div>
        <div className="text-gray-400">Futures</div>
      </div>

      {/* Balance Section */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
        <div className="text-gray-400 mr-2">Est. Total Value</div>
        <Eye size={17} />
        </div>
          {/* <Link to={'/withdrawal'}><History size={16} /> </Link>   */}
          <div className="">
          <Link to={'/withdrawal'}><svg width={20} class="bn-svg icon-active left-icon-pc sidebar-icon-size shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z" fill="currentColor"></path></svg> </Link>
          </div>
        </div>

        <div className="flex items-baseline mb-2">
          <span className="text-4xl font-bold">$139.96</span>
          <span className="text-lg ml-2">USD</span>
          <ChevronDown size={16} className="ml-1" />
        </div>

        <div className="flex items-center text-sm text-gray-400 mb-4 border-b border-dotted border-gray-700 pb-2">
          <div>Today's PNL</div>
          <div className="ml-2">+$0.00(+0.00%)</div>
          <ChevronRight size={16} className="ml-1" />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-4">
          <button className="flex-1 bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg">
            Add Funds
          </button>
          <button className="flex-1 bg-gray-800 text-white font-bold py-3 px-4 rounded-lg">
         <Link to={'/CryptoWalletWithdraw'} className="flex-1 bg-gray-800 text-white font-bold py-3 px-4 rounded-lg">Send</Link> 
          </button>
          <button className="flex-1 bg-gray-800 text-white font-bold py-3 px-4 rounded-lg">
            
         <Link to={'/transfer'} className="flex-1 bg-gray-800 text-white font-bold py-3 px-4 rounded-lg">Transfer</Link> 
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-gray-800 rounded-lg p-3 mb-4">
          <div className="flex items-center  justify-between mb-4">
            <div className="flex items-center">
              <Bell size={16} className="mr-2" />
              <span>Crypto deposit 10.003 USDT</span>
            </div>
            <div className="flex items-center text-green-500">
              <span>Complete</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
          <div className="flex items-center  justify-between">
            <div className="flex items-center">
              <Bell size={16} className="mr-2" />
              <span>Crypto deposit 167.69849 TRX</span>
            </div>
            <div className="flex items-center text-green-500">
              <span>Complete</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
        </div>

        {/* Account Tabs */}
        <div className="flex border-b border-gray-800 mb-4 align-center ">
          <div className="font-bold pb-2 mr-6 border-b-2 border-yellow-400">
            Crypto
          </div>
          <div className="text-gray-400 pb-2">Account</div>
          <div className="flex-grow "></div>
          <Search size={20} />
          {/* <Settings size={20} className="ml-2" /> */}
          <svg width={22} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8 3h-3.6v2.027c-.66.17-1.285.431-1.858.77L6.91 4.363 4.363 6.91l1.434 1.433a7.157 7.157 0 00-.77 1.858H3v3.6h2.027c.17.66.431 1.285.77 1.858L4.363 17.09l2.546 2.546 1.433-1.434c.573.339 1.197.6 1.858.77V21h3.6v-2.027a7.157 7.157 0 001.858-.77l1.433 1.434 2.546-2.546-1.434-1.434a7.16 7.16 0 00.77-1.857H21v-3.6h-2.027a7.158 7.158 0 00-.77-1.858l1.434-1.433-2.546-2.546-1.434 1.434a7.156 7.156 0 00-1.857-.77V3zm-4.5 9a2.7 2.7 0 115.4 0 2.7 2.7 0 01-5.4 0z" fill="currentColor"></path></svg>
        </div>

        {/* Asset List */}
        <div className="flex items-center justify-between mb-4 relative">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs">$</span>
            </div>
            <div>
              <div className="font-bold">USDT</div>
              <div className="text-xs text-gray-400">TetherUS</div>
            </div>
          </div>
          <div className="text-right">
            <div className="relative">
              <div className="font-mono">139.96111239</div>
            </div>
            <div className="text-gray-400">$139.96</div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Assets;
