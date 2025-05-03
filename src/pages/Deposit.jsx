// import React from 'react';
// import { ArrowLeft, Filter, ChevronRight } from 'lucide-react';
// import BottomNavigation from '../components/BottomNavigation';
// import { Link } from 'react-router-dom';
// import filedown from "../assets/fileDown2.png"
// const History = () => {
//   const deposits = [
//     { id: 1, currency: 'USDT', amount: '+10.003', timestamp: '2025-03-31 08:18:30', status: 'Completed' },
//     { id: 2, currency: 'TRX', amount: '+167.69849', timestamp: '2025-03-30 22:44:34', status: 'Completed' },
//     { id: 3, currency: 'TRX', amount: '+8.453051', timestamp: '2025-03-30 22:43:14', status: 'Completed' },
//     { id: 4, currency: 'TRX', amount: '+62.759426', timestamp: '2025-03-30 22:41:10', status: 'Completed' },
//     { id: 5, currency: 'USDT', amount: '+8.399366', timestamp: '2025-03-30 22:33:56', status: 'Completed' },
//     { id: 6, currency: 'TRX', amount: '+32.17709', timestamp: '2025-03-30 22:30:22', status: 'Completed' },
//     { id: 7, currency: 'USDT', amount: '+32.67549', timestamp: '2025-03-30 22:29:10', status: 'Completed' },
//     { id: 8, currency: 'USDT', amount: '+6.521845', timestamp: '2025-03-30 22:27:52', status: 'Completed' },
//     { id: 9, currency: 'TRX', amount: '+50', timestamp: '2025-03-30 09:20:08', status: 'Completed' },
//   ];

//   return (
//     <div className="flex flex-col color text-white h-screen w-full max-w-md mx-auto">
//       {/* Header */}
//       <div className="flex items-center p-4 border-b border-gray-800">
//         <ArrowLeft className="text-gray-400" size={24} />
//         <h1 className="text-xl font-medium flex-1 text-center">Spot</h1>
//         {/* <svg size="16" width={24}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z" fill="currentColor"></path></svg>
//         <div className="w-6"></div> */}
//           <img src={filedown} width={30} alt="" />
//       </div>

//       {/* Navigation Tabs */}
//        <div className="flex overflow-x-auto border-b  assets hide-scrollbar">
//               <div className="px-4 py-3 text-gray-400 whitespace-nowrap">History</div>
//               <div className="px-4 py-3 text-white whitespace-nowrap"> Deposit<div className='w-5 ml-5 mt-2 border-amber-400 border-2'></div></div>
//               <div className="px-4 py-3 text-gray-400 whitespace-nowrap"><Link to={'/Withdrawal'}>Withdrawal</Link></div>
//               <div className="px-4 py-3 text-gray-400 whitespace-nowrap">Buy</div>
//               <div className="px-4 py-3 text-gray-400 whitespace-nowrap">Sell</div>
//               <div className="px-4 py-3 text-gray-400 whitespace-nowrap">Convert</div>
//             </div>
    

//       {/* Crypto/Cash Toggle */}
   
//        <div className="flex p-4 space-x-2 border-b assets">
//               <div className="fromColor p-1 px-2 -ml-1 rounded-md text-white">Crypto</div>
            
//               <div className="p-1 text-gray-400">Cash</div>
//               <div className="flex-1"></div>
//               <Filter size={20} fill='white' className=" self-center" />
//             </div>

//       {/* Support Banner */}
//       <div className="flex items-center justify-between px-4 py-4 border-b assets">
//         <span className="text-gray-300">Deposits not arrived? Check solutions here</span>
//         <ChevronRight size={20} className="text-gray-400" />
//       </div>

//       {/* Deposit List */}
//       <div className="flex-1 overflow-y-auto">
//         {deposits.map((deposit) => (
//           <div key={deposit.id} className="border-b assets p-4">
//             <div className="flex justify-between items-start">
//               <div className="font-medium text-lg">{deposit.currency}</div>
//               <div className="text-green-500 font-medium text-lg">{deposit.amount}</div>
//             </div>
//             <div className="flex justify-between items-center mt-1">
//               <div className="text-gray-400 text-sm">{deposit.timestamp}</div>
//               <div className="text-gray-400 text-sm">{deposit.status}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Indicator */}
//       <BottomNavigation/>
//     </div>
//   );
// };

// export default History;

import React ,{useContext}from 'react';
import { ArrowLeft, Filter ,ChevronRight } from 'lucide-react';
import { historyContext } from '../context/HistoryContextProvider';
import  arrow from '../assets/arrow.jpg'
import { Link } from 'react-router-dom';
import filedown from "../assets/fileDown2.png"
const Deposit = () => { 
const {withdrawals} =  useContext(historyContext)

  return (
    <div className="flex flex-col color text-white h-screen w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
      <img src={arrow} alt=""width={30} />
        <h1 className="text-xl font-medium flex-1 text-center">Spot</h1>
        <img src={filedown} width={30} alt="" />
      </div>

      {/* Navigation Tabs - Scrollable */}
      <div className="flex overflow-x-auto border-b-[.5px]  assets hide-scrollbar">
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap">History</div>
        <div className="px-4 py-0 text-[14px] text-white whitespace-nowrap"> Deposit<div className='w-5 ml-3 mt-2 border-amber-400 border-2'></div></div>
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap"><Link to={'/withdrawal'}> Withdrawal</Link></div>
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap">Buy</div>
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap">Sell</div>
        <div className="px-4 py-0 text-[14px] text-gray-400 whitespace-nowrap">Convert</div>
      </div>

      {/* Crypto/Binance/Cash Toggle */}
      <div className="flex p-4 space-x-2 border-b-[.5px] assets">
        <div className="fromColor p-1 px-2 -ml-1 rounded-md text-white text-[14px]">Crypto </div>
        {/* <div className=" p-1 text-gray-400 text-[14px]">Binance account</div> */}
        <div className="p-1 text-gray-400 text-[14px]">Cash</div>
        <div className="flex-1"></div>
        <Filter size={18} fill='white' className=" self-center mr-3" />
      </div>
       {/* Support Banner */}
       <div className="flex items-center justify-between px-4 py-4 border-b assets">
         <span className="text-gray-300 text-[12px]">Deposits not arrived? Check solutions here</span>
       <ChevronRight size={15} className="text-gray-400 mr-3" />
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

export default Deposit;