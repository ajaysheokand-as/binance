import React from 'react';
import { ArrowLeft, RotateCw, CheckCircle, Copy } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

export default function WithdrawalDetails() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans max-w-md mx-auto">
      {/* Status Bar */} 
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <ArrowLeft size={20} />
        <h1 className="text-lg font-medium">Withdrawal Details</h1>
        <RotateCw size={20} />
      </div>
      
      {/* Main Content */}
      <div className="px-6">
        {/* Withdrawal Amount */}
        <div className="text-center my-8">
          <h2 className="text-3xl font-bold">-39.912928 TRX</h2>
          <div className="flex items-center justify-center mt-2">
            <CheckCircle size={20} className="text-green-500 mr-2" />
            <span className="text-green-500">Completed</span>
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">
            Crypto transferred out of Binance. Please contact the recipient platform for your transaction receipt.
          </p>
          <p className="text-yellow-500 text-sm mt-2">Why hasn't my withdrawal arrived?</p>
        </div>
        
        <div className="border-t border-gray-700 my-4"></div>
        
        {/* Transaction Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Network</span>
            <span>TRX</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Address</span>
            <div className="flex items-center">
              <span className="text-right max-w-xs truncate">TF4abYRaH2TZmGnByRSTyLmAd73TNxBhk</span>
              <Copy size={16} className="ml-2 text-gray-400" />
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Txid</span>
            <div className="flex items-center">
              <span className="text-right text-xs max-w-xs truncate">0e8f6c392d0e873abb29f221cf15403b0c90de3e2147fda15ac549b461cfa86d</span>
              <Copy size={16} className="ml-2 text-gray-400" />
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Amount</span>
            <span>40.912928 TRX</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Network fee</span>
            <span>1.00000000 TRX</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Wallet</span>
            <span>Spot Wallet</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Date</span>
            <span>2025-03-27 16:49:03</span>
          </div>
        </div>
      </div>
      
      {/* Page Indicator */}
      <div className="flex justify-center mt-8 mb-6">
        <div className="flex space-x-1">
          <div className="w-1 h-1 rounded-full bg-white"></div>
          <div className="w-1 h-1 rounded-full bg-red-500"></div>
        </div>
      </div>
      
      {/* Bottom Buttons */}
      <div className="flex px-6 mt-auto mb-20 gap-4" >
        <button className="flex-1 bg-gray-700 py-3 rounded-md font-medium">
          Scam Report
        </button>
        <button className="flex-1 bg-gray-700 py-3 rounded-md font-medium">
          Save Address
        </button>
      </div>
      <BottomNavigation/>
    </div>
  );
}