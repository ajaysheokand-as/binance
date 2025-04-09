import React from 'react';
import { ArrowLeft, Filter } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

const History = () => {
  const withdrawals = [
    { id: 1, currency: 'TRX', amount: '-48', timestamp: '2025-03-30 11:36:04', status: 'Completed' },
    { id: 2, currency: 'TRX', amount: '-59.47815', timestamp: '2025-03-28 15:08:13', status: 'Completed' },
    { id: 3, currency: 'TRX', amount: '-39.912928', timestamp: '2025-03-27 16:49:03', status: 'Completed' },
    { id: 4, currency: 'TRX', amount: '-29', timestamp: '2025-03-27 15:34:31', status: 'Completed' },
    { id: 5, currency: 'TRX', amount: '-40', timestamp: '2025-03-27 15:31:53', status: 'Completed' },
    { id: 6, currency: 'TRX', amount: '-40', timestamp: '2025-03-27 15:28:36', status: 'Completed' },
    { id: 7, currency: 'TRX', amount: '-49', timestamp: '2025-03-27 11:04:25', status: 'Completed' },
    { id: 8, currency: 'TRX', amount: '-69', timestamp: '2025-03-27 11:03:48', status: 'Completed' },
    { id: 9, currency: 'TRX', amount: '-64.003105', timestamp: '2025-03-26 14:16:26', status: 'Completed' },
    { id: 10, currency: 'TRX', amount: '-49.70529', timestamp: '2025-03-26 13:25:47', status: 'Completed' },
  ];

  return (
    <div className="flex flex-col bg-gray-900 text-white h-screen w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
        <ArrowLeft className="text-gray-400" size={24} />
        <h1 className="text-xl font-medium flex-1 text-center">Spot</h1>
        <div className="w-6"></div>
      </div>

      {/* Navigation Tabs - Scrollable */}
      <div className="flex overflow-x-auto border-b border-gray-800 hide-scrollbar">
        <div className="px-4 py-3 text-gray-400 whitespace-nowrap">History</div>
        <div className="px-4 py-3 text-gray-400 whitespace-nowrap">Deposit</div>
        <div className="px-4 py-3 text-white border-b-2 border-yellow-500 whitespace-nowrap">Withdrawal</div>
        <div className="px-4 py-3 text-gray-400 whitespace-nowrap">Buy</div>
        <div className="px-4 py-3 text-gray-400 whitespace-nowrap">Sell</div>
        <div className="px-4 py-3 text-gray-400 whitespace-nowrap">Convert</div>
      </div>

      {/* Crypto/Binance/Cash Toggle */}
      <div className="flex p-4 space-x-2 border-b border-gray-800">
        <div className="bg-gray-800 px-3 py-2 rounded-md text-white">Crypto address</div>
        <div className="px-3 py-2 text-gray-400">Binance account</div>
        <div className="px-3 py-2 text-gray-400">Cash</div>
        <div className="flex-1"></div>
        <Filter size={20} className="text-gray-400 self-center" />
      </div>

      {/* Withdrawal List */}
      <div className="flex-1 overflow-y-auto">
        {withdrawals.map((withdrawal) => (
          <div key={withdrawal.id} className="border-b border-gray-800 p-4">
            <div className="flex justify-between items-start">
              <div className="font-medium text-lg">{withdrawal.currency}</div>
              <div className="text-red-500 font-medium text-lg">{withdrawal.amount}</div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="text-gray-400 text-sm">{withdrawal.timestamp}</div>
              <div className="text-gray-400 text-sm">{withdrawal.status}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Indicator */}
      <div className="flex justify-center p-4">
        <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default History;