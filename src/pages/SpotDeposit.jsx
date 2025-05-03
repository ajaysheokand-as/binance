import React from "react";
import { ChevronLeft, Download, Filter, ChevronRight } from "lucide-react";

const SpotDeposit = () => {
  const deposits = [
    {
      currency: "USDT",
      amount: "+10.003",
      date: "2025-03-31 08:18:30",
      status: "Completed",
    },
    {
      currency: "TRX",
      amount: "+167.69849",
      date: "2025-03-30 22:44:34",
      status: "Completed",
    },
    {
      currency: "TRX",
      amount: "+8.453051",
      date: "2025-03-30 22:43:14",
      status: "Completed",
    },
    {
      currency: "TRX",
      amount: "+62.759426",
      date: "2025-03-30 22:41:10",
      status: "Completed",
    },
    {
      currency: "USDT",
      amount: "+8.399366",
      date: "2025-03-30 22:33:56",
      status: "Completed",
    },
    {
      currency: "TRX",
      amount: "+32.17709",
      date: "2025-03-30 22:30:22",
      status: "Completed",
    },
    {
      currency: "USDT",
      amount: "+32.67549",
      date: "2025-03-30 22:29:10",
      status: "Completed",
    },
    {
      currency: "USDT",
      amount: "+6.521845",
      date: "2025-03-30 22:27:52",
      status: "Completed",
    },
    {
      currency: "TRX",
      amount: "+50",
      date: "2025-03-30 09:20:08",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-gray-900 max-w-md mx-auto text-white min-h-screen">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <ChevronLeft size={24} />
        <h1 className="text-xl font-semibold">Spot</h1>
        <Download size={24} />
      </div>

      {/* Navigation */}
      <div className="flex justify-between overflow-scroll px-4 border-b border-gray-800">
        <button className="px-4 py-2 text-gray-500">History</button>
        <button className="px-4 py-2 text-gray-500">Trade History</button>
        <button className="px-4 py-2 text-white relative">
          Deposit
          <div className="absolute bottom-0 left-0 right-0 h-1 btn-2"></div>
        </button>
        <button className="px-4 py-2 text-gray-500">Withdrawal</button>
        <button className="px-4 py-2 text-gray-500">Buy</button>
      </div>

      {/* Tab Selection */}
      <div className="flex p-4 gap-4">
        <button className="bg-gray-800 px-6 py-2 rounded-md text-white font-medium">
          Crypto
        </button>
        <button className="px-6 py-2 text-gray-500">Cash</button>
        <div className="flex-grow"></div>
        <button className="px-2">
          <Filter size={20} />
        </button>
      </div>

      {/* Support Notice */}
      <div className="mx-4 py-3 px-4 bg-gray-800 rounded-md flex justify-between items-center">
        <p className="text-gray-300">
          Deposits not arrived? Check solutions here
        </p>
        <ChevronRight size={20} className="text-gray-500" />
      </div>

      {/* Deposits List */}
      <div className="mt-4">
        {deposits.map((deposit, index) => (
          <div
            key={index}
            className="py-4 px-4 border-b border-gray-800 flex justify-between"
          >
            <div>
              <h3 className="text-lg font-medium">{deposit.currency}</h3>
              <p className="text-gray-500">{deposit.date}</p>
            </div>
            <div className="text-right">
              <p className="text-green-500 text-lg">{deposit.amount}</p>
              <p className="text-gray-500">{deposit.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotDeposit;
