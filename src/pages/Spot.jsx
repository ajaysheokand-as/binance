import { useState } from 'react';
import { Search } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';
export default function Spot() {
  const [activeSection, setActiveSection] = useState('Spot');
  const [activeSubSection, setActiveSubSection] = useState('Spot');
  
  return (
    <div className="bg-black h-screen w-full max-w-md mx-auto overflow-hidden flex flex-col">
      {/* Status Bar */}
     

      {/* Top Navigation */}
      <div className="flex bg-gray-900 justify-center">
        <div className="grid grid-cols-2 gap-1 bg-gray-800 rounded-lg p-1 w-64 mt-2">
          <div className="bg-gray-900 py-2 rounded-lg text-center font-medium text-white">Exchange</div>
          <div className="py-2 text-center text-gray-400">Wallet</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-900 overflow-y-auto">
        {/* Secondary Navigation */}
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

        {/* Sub Navigation */}
        <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-800 px-2 text-sm">
          <button 
            className={`py-2 px-3 mr-3 whitespace-nowrap ${activeSubSection === 'Spot' ? 'text-white font-medium bg-gray-800 rounded-md' : 'text-gray-400'}`}
            onClick={() => setActiveSubSection('Spot')}
          >
            Spot
          </button>
          <button 
            className={`py-2 px-3 mr-3 whitespace-nowrap ${activeSubSection === 'Cross Margin' ? 'text-white font-medium bg-gray-800 rounded-md' : 'text-gray-400'}`}
            onClick={() => setActiveSubSection('Cross Margin')}
          >
            Cross Margin
          </button>
          <button 
            className={`py-2 px-3 mr-3 whitespace-nowrap ${activeSubSection === 'Isolated Margin' ? 'text-white font-medium bg-gray-800 rounded-md' : 'text-gray-400'}`}
            onClick={() => setActiveSubSection('Isolated Margin')}
          >
            Isolated Margin
          </button>
        </div>

        {/* Account Value */}
        <div className="px-4 py-3">
          <div className="flex items-center text-gray-400 text-sm mb-1 justify-between">
           <span className='flex items-center' >
           Est. Total Value     
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
           </span>
             <div className="">
                      <Link to={'/withdrawal'}><svg width={20} class="bn-svg icon-active left-icon-pc sidebar-icon-size shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z" fill="currentColor"></path></svg> </Link>
                      </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white">$0.00</span>
              <span className="text-gray-400 ml-2 text-sm">USD ▼</span>
            </div>

          </div>
          <div className="text-gray-400 text-sm mt-1">
            Today's PNL +$0.00 &gt;
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2 px-4 mb-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded text-sm">
            Deposit
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded text-sm">
            Withdraw
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded text-sm">
            Transfer
          </button>
        </div>

        {/* Balances Section */}
        <div className="px-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-white">Balances</h2>
            <Search className="h-4 w-4 text-gray-400" />
          </div>

          {/* USDT Balance */}
          <div className="border-b border-gray-800 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-teal-500 text-white rounded-full w-6 h-6 mr-3 text-xs">
                  ₮
                </div>
                <div>
                  <div className="font-medium text-white text-sm">USDT</div>
                  <div className="text-gray-400 text-xs">TetherUS</div>
                </div>
              </div>
              <div className="text-right text-white">
                <div className="font-medium">0.00</div>
              </div>
            </div>
          </div>

          {/* BTC Balance */}
          <div className="border-b border-gray-800 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-orange-500 text-white rounded-full w-6 h-6 mr-3 text-xs">
                  ₿
                </div>
                <div>
                  <div className="font-medium text-white text-sm">BTC</div>
                  <div className="text-gray-400 text-xs">Bitcoin</div>
                </div>
              </div>
              <div className="text-right text-white">
                <div className="font-medium">0.00</div>
              </div>
            </div>
          </div>

          {/* BNB Balance */}
          <div className="border-b border-gray-800 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-yellow-500 text-white rounded-full w-6 h-6 mr-3 text-xs">
                  B
                </div>
                <div>
                  <div className="font-medium text-white text-sm">BNB</div>
                  <div className="text-gray-400 text-xs">BNB</div>
                </div>
              </div>
              <div className="text-right text-white">
                <div className="font-medium">0.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation/>
      {/* <div className="bg-gray-900 border-t border-gray-800 py-2 px-2">
        <div className="grid grid-cols-5 text-center">
          <button className="flex flex-col items-center justify-center text-gray-400 text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </button>
          <button className="flex flex-col items-center justify-center text-gray-400 text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            Markets
          </button>
          <button className="flex flex-col items-center justify-center text-gray-400 text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Trade
          </button>
          <button className="flex flex-col items-center justify-center text-gray-400 text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Futures
          </button>
          <button className="flex flex-col items-center justify-center text-white text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Assets
          </button>
        </div>
      </div> */}
    </div>
  );
}