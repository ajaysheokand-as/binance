import React ,{useContext}from 'react';
import { ArrowLeft, Filter  } from 'lucide-react';
import { historyContext } from '../context/HistoryContextProvider';

import { Link } from 'react-router-dom';
import filedown from "../assets/fileDown2.png"
import  arrow from '../assets/arrow.jpg'
const History = () => { 
const {withdrawals} =  useContext(historyContext)

  return (
    <div className="flex flex-col color text-white h-screen w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
      <img src={arrow} alt=""width={30} />
        {/* <ArrowLeft className="text-gray-400" size={24} /> */}
        <h1 className="text-xl font-medium flex-1 text-center">Spot</h1>
        <img src={filedown} width={30} alt="" />
      </div>

      {/* Navigation Tabs - Scrollable */}
      <div className="flex overflow-x-auto border-b-[.5px]  assets hide-scrollbar">
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap">History</div>
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap"><Link to={'/spot-deposit'}>Deposit</Link></div>
        <div className="px-4 py-0 text-[14px] text-white whitespace-nowrap">Withdrawal <div className='w-5 ml-7 mt-2 border-amber-400 border-2'></div></div>
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap">Buy</div>
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap">Sell</div>
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap">Convert</div>
      </div>

      {/* Crypto/Binance/Cash Toggle */}
      <div className="flex p-4 space-x-2 border-b-[.5px] assets">
        <div className="fromColor p-1 px-2 -ml-1 rounded-md text-white text-[14px]">Crypto address</div>
        <div className=" p-1 text-gray-400 text-[14px]">Binance account</div>
        <div className="p-1 text-gray-400 text-[14px]">Cash</div>
        <div className="flex-1"></div>
        <Filter size={18} fill='white' className=" self-center mr-3" />
      </div>

      {/* Withdrawal List */}
      <div className="flex-1 overflow-y-auto mt-2">
        {withdrawals.map((withdrawal) => (
        <Link key={withdrawal.id} to={`/withdrawal/${withdrawal.id}`}>
         <div  className="border-b border-gray-800 p-4 pt-1 pb-3 gap-0">
            <div className="flex justify-between items-start">
              <div className="font-[500]  ">{withdrawal.currency}</div>
              <div className=" redColor font-medium text-lg">{withdrawal.amount}</div>
            </div>
            <div className="flex justify-between items-center assets border-b-[.2px] pb-3 -mt-1 ">
              <div className="text-gray-400 text-[12px] ">{withdrawal.timestamp}</div>
              <div className="text-gray-400  text-sm">{withdrawal.status}</div>
            </div>
          </div>
        </Link>
        ))}
      </div>

      {/* Bottom Indicator */}
      {/* <div className="flex justify-center p-4">
        <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
      </div> */}
      {/* <BottomNavigation /> */}
    </div>
  );
};

export default History;