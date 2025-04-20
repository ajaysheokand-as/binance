import React, { useState } from 'react';

const USDT = () => {
  const [withdrawAmount, setWithdrawAmount] = useState('0.00');
  const [networkFee, setNetworkFee] = useState('0.00');

  return (
    <div className="bg-gray-900 text-gray-300 h-screen w-full max-w-md mx-auto font-sans relative">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
        <div className="text-2xl font-medium text-white flex items-center justify-between w-full">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Send USDT</span>
          </div>
          <div className="flex space-x-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <svg className='w-6 h-6' class="bn-svg icon-normal left-icon-pc sidebar-icon-size shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z" fill="currentColor"></path></svg>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-4 space-y-6">
        {/* Address Field */}
        <div className="space-y-2">
          <label className="text-gray-400 text-sm">Address</label>
          <div className="bg-gray-800 rounded flex items-center justify-between p-3">
            <span className="text-gray-400">Long press to paste</span>
            <div className="flex space-x-2">
              <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Network Field */}
        <div className="space-y-2">
          <label className="text-gray-400 text-sm flex items-center">
            Network 
            <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </label>
          <div className="bg-gray-800 rounded flex items-center justify-between p-3">
            <span className="text-gray-400">Automatically match the network</span>
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Withdraw Amount Field */}
        <div className="space-y-2">
          <label className="text-gray-400 text-sm flex items-center">
            Withdraw Amount
            <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </label>
          <div className="bg-gray-800 rounded flex items-center justify-between p-3">
            <span className="text-gray-400">Minimum 0</span>
            <div className="flex items-center">
              <span className="mr-2">USDT</span>
              <span className="text-yellow-500">Max</span>
            </div>
          </div>
        </div>

        {/* Available Balance */}
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Available</span>
          <div className="flex items-center">
            <span>139.9611239 USDT</span>
            <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Warning Messages */}
        <div className="space-y-2 text-xs text-gray-400">
          <p>* Do not withdraw directly to a crowdfund or ICO. We will not credit your account with tokens from that sale.</p>
          <p className="flex items-center">
            * Do not transact with Sanctioned Entities. 
            <span className="text-yellow-500 ml-1">Learn more</span>
          </p>
        </div>

        {/* Bottom Section */}
        <div className=" bottom-0 absolute left-0 right-0 p-4 bg-gray-900">
          <div className="mb-4">
            <div className="text-gray-400 mb-1">Receive amount</div>
            <div className="flex items-baseline">
              <span className="text-3xl font-medium text-white mr-2">{withdrawAmount}</span>
              <span>USDT</span>
            </div>
            <div className="text-gray-400 text-sm">Network fee {networkFee} USDT</div>
          </div>
          
          <button className="bg-yellow-500 w-full text-black font-medium py-3 rounded">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default USDT;