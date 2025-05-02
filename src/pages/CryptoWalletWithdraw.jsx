import React from 'react';
import { Eye, ChevronRight, ChevronDown } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';
import sendToBin from '../assets/sendToBin.png'
import onChainWithdraw from '../assets/onChainWithdraw.png'
import sellToInr from '../assets/sellToInr.png'
import p2p from '../assets/p2p.png'

const CryptoWalletWithdraw = () => {
  return (
    <div className="flex flex-col color text-white h-screen w-full max-w-md mx-auto relative">
      {/* Status Bar
      <div className="flex justify-between items-center p-2 text-sm text-gray-300">
        <div>12:00</div>
        <div className="flex items-center space-x-1">
          <span>9.39 KB/s</span>
          <div className="w-5 h-5 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-gray-300"></div>
          </div>
          <div className="flex space-x-1">
            <div className="h-3 w-1 bg-gray-300"></div>
            <div className="h-3 w-1 bg-gray-300"></div>
            <div className="h-3 w-1 bg-gray-300"></div>
          </div>
          <div className="text-xs">4G</div>
          <div className="flex items-center space-x-1">
            <div className="h-2 w-1 bg-gray-300"></div>
            <div className="h-3 w-1 bg-gray-300"></div>
            <div className="h-4 w-1 bg-gray-300"></div>
          </div>
          <div className="text-xs">73%</div>
        </div>
      </div> */}

      {/* Main/Wallet Toggle */}
      <div className="flex justify-center p-2">
        <div className="flex rounded-md bg-gray-800 w-64">
          <div className="flex-1 py-2 text-center text-gray-400">Exchange</div>
          <div className="flex-1 py-2 text-center text-gray-400">Wallet</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between px-4 py-4 border-b border-gray-800">
        <div className="text-gray-400">Overview</div>
        <div className="text-white">Spot</div>
        <div className="text-gray-400">Funding</div>
        <div className="text-gray-400">Futures</div>
      </div>

      {/* Sub Navigation */}
      <div className="flex px-4 py-3 border-b border-gray-800">
        <div className="mr-6 text-white">Spot</div>
        <div className="mr-6 text-gray-400">Cross Margin</div>
        <div className="text-gray-400">Isolated Margin</div>
      </div>

      {/* Portfolio Value */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-400">
            <span>Est. Total Value</span>
            <Eye size={18} className="ml-2" />
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-gray-400">
              <rect x="3" y="3" width="7" height="7" fill="currentColor" opacity="0.4" />
              <rect x="14" y="3" width="7" height="7" fill="currentColor" opacity="0.4" />
              <rect x="3" y="14" width="7" height="7" fill="currentColor" opacity="0.4" />
              <rect x="14" y="14" width="7" height="7" fill="currentColor" opacity="0.4" />
            </svg>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <div className="text-4xl font-medium">$139.96</div>
          <div className="ml-2 text-gray-400 flex items-center">
            <span>USD</span>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="flex items-center mt-2 text-gray-400">
          <span>Today's PNL</span>
          <span className="ml-2">+$0.00(+0.00%)</span>
          <ChevronRight size={16} className="ml-1" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex px-4 gap-2 mt-2">
        <button className="flex-1 bg-yellow-500 text-black py-3 rounded-md font-medium">
          Add Funds
        </button>
        <button className="flex-1 bg-gray-800 text-white py-3 rounded-md">
          Send
        </button>
        <button className="flex-1 bg-gray-800 text-white py-3 rounded-md">
          Transfer
        </button>
      </div>

      {/* Convert Banner */}
      <div className="flex items-center p-4 mt-4">
        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-2">
          <span className="text-xs">₿</span>
        </div>
        <span className="text-gray-400">Convert Low-Value Assets to BNB</span>
      </div>

      {/* Modal Overlay */}
      <div className="absolute inset-0  flex items-end">
        <div className="bg-gray-800 w-full rounded-t-xl p-4">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
          </div>
          <h2 className="text-xl font-medium mb-4">Select Withdraw Method</h2>
          
          {/* Withdraw Options */}
          <div className="space-y-3">
            {/* Binance Users */}
            <div className=" border-1 assets p-4 rounded-lg">
              <div className="flex items-center">
                <img src={sendToBin} alt="" width={40} />
                {/* <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span><img src="" alt="" /></span>
                  </div> */}
                <div>
                  <div className="font-medium">Send to Binance users</div>
                  <div className="text-[12px] text-gray-400">Binance internal transfer, send via Email/Phone/ID</div>
                </div>
              </div>
            </div>
            
            {/* On-Chain */}
           <div className="border-1 assets p-4 rounded-lg">
           <Link to={'/selectCoin'}>
              <div className="flex items-center">

                  <img src={onChainWithdraw} alt="" width={30} />
                
                <div className='ml-3'>
                  <div className="font-medium ">On-Chain Withdraw</div>
                  <div className="text-[12px] text-gray-400">Withdraw Crypto from Binance to other exchanges/</div>
                </div>
              </div>
           </Link>
            </div>
            
            {/* Sell to INR */}
            <div className="border-1 assets p-4 rounded-lg">
              <div className="flex items-center">
              <img src={sellToInr} alt="" width={30} />
                <div className='ml-3'>
                  <div className="font-medium">Sell to INR</div>
                  <div className="text-[12px] text-gray-400">Sell crypto easily to your account.</div>
                </div>
              </div>
            </div>
            
            {/* P2P */}
            <div className="border-1 assets p-4 rounded-lg">
              <div className="flex items-center">
              <img src={p2p} alt="" width={30} />
                <div className='ml-3'>
                  <div className="font-medium">P2P Trading</div>
                  <div className="text-[12px] text-gray-400">Sell directly to users. Competitive pricing. Local</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Indicator */}
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
      <BottomNavigation></BottomNavigation>
    </div>
  );
};

export default CryptoWalletWithdraw;