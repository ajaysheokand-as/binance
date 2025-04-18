import React from 'react';
import { ArrowLeft, Filter, ChevronRight } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

const History = () => {
  const deposits = [
    { id: 1, currency: 'USDT', amount: '+10.003', timestamp: '2025-03-31 08:18:30', status: 'Completed' },
    { id: 2, currency: 'TRX', amount: '+167.69849', timestamp: '2025-03-30 22:44:34', status: 'Completed' },
    { id: 3, currency: 'TRX', amount: '+8.453051', timestamp: '2025-03-30 22:43:14', status: 'Completed' },
    { id: 4, currency: 'TRX', amount: '+62.759426', timestamp: '2025-03-30 22:41:10', status: 'Completed' },
    { id: 5, currency: 'USDT', amount: '+8.399366', timestamp: '2025-03-30 22:33:56', status: 'Completed' },
    { id: 6, currency: 'TRX', amount: '+32.17709', timestamp: '2025-03-30 22:30:22', status: 'Completed' },
    { id: 7, currency: 'USDT', amount: '+32.67549', timestamp: '2025-03-30 22:29:10', status: 'Completed' },
    { id: 8, currency: 'USDT', amount: '+6.521845', timestamp: '2025-03-30 22:27:52', status: 'Completed' },
    { id: 9, currency: 'TRX', amount: '+50', timestamp: '2025-03-30 09:20:08', status: 'Completed' },
  ];

  return (
    <div className="flex flex-col bg-gray-900 text-white h-screen w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
        <ArrowLeft className="text-gray-400" size={24} />
        <h1 className="text-xl font-medium flex-1 text-center">Spot</h1>
        <svg size="16" width={24}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z" fill="currentColor"></path></svg>
        {/* <div className="w-6"></div> */}
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-800">
        <div className="px-3 py-4 text-gray-400">History</div>
        <div className="px-3 py-4 text-gray-400">Trade History</div>
        <div className="px-3 py-4 text-white border-b-2 border-yellow-500">Deposit</div>
        <div className="px-3 py-4 text-gray-400">Withdrawal</div>
        <div className="px-3 py-4 text-gray-400">Buy</div>
      </div>

      {/* Crypto/Cash Toggle */}
      <div className="flex p-4 space-x-4 border-b border-gray-800">
        <div className="bg-gray-800 px-4 py-2 rounded-md text-white">Crypto</div>
        <div className="px-4 py-2 text-gray-400">Cash</div>
        <div className="flex-1"></div>
        <Filter size={20} className="text-gray-400 self-center" />
      </div>

      {/* Support Banner */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <span className="text-gray-300">Deposits not arrived? Check solutions here</span>
        <ChevronRight size={20} className="text-gray-400" />
      </div>

      {/* Deposit List */}
      <div className="flex-1 overflow-y-auto">
        {deposits.map((deposit) => (
          <div key={deposit.id} className="border-b border-gray-800 p-4">
            <div className="flex justify-between items-start">
              <div className="font-medium text-lg">{deposit.currency}</div>
              <div className="text-green-400 font-medium text-lg">{deposit.amount}</div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="text-gray-400 text-sm">{deposit.timestamp}</div>
              <div className="text-gray-400 text-sm">{deposit.status}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Indicator */}
      <BottomNavigation/>
    </div>
  );
};

export default History;