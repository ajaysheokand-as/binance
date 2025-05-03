import { ArrowLeft, } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import head from '../assets/head.jpg'
import  copy from '../assets/copy.jpg'
import  check from '../assets/check.jpg'
import  arrow from '../assets/arrow.jpg'
import { historyContext } from "../context/HistoryContextProvider";
import { useParams ,Link } from "react-router-dom";
export default function WithdrawalDetails() {
  const prams =  useParams()
  const {withdrawals} =  useContext(historyContext)
  const filterWith =  withdrawals.filter(val => val.id==prams.id)
  const { amount ,currency ,timestamp ,status} = filterWith[0]

  const [address, setAddress] = useState("0x7eC76a28DdD8221C932ee98394920938");
  const [txid, setTxid] = useState("0xa8e7cd3f33c549d7487aae0e57729a5fb3098yewu320r20-321-98ti320-42");
  const [date, setDate] = useState(timestamp);
  const [addressCopied, setAddressCopied] = useState(false);
  const [txidCopied, setTxidCopied] = useState(false);
  
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'address') {
        setAddressCopied(true);
        setTimeout(() => setAddressCopied(false), 2000);
      } else if (type === 'txid') {
        setTxidCopied(true);
        setTimeout(() => setTxidCopied(false), 2000);
      }
    });
  };
  
  return (
    <div className=" color text-white min-h-screen w-full font-sans relative">
      {/* Status bar */}
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Link to={'/withdrawal'}> 
     <img src={arrow} alt=""width={30} />
        </Link>
        <h1 className="font-bold text-[18px] text-gray-200">Withdrawal Details</h1>
       <img src={head} alt="" width={30} />
      </div>
      
      {/* Main content */}
      <div className="px-4 mt-2">
        {/* Amount and status */}
        <div className="flex flex-col items-center py-2  pb-4">
          <h2 className="text-3xl font-bold  ">{amount} {currency}</h2>
          <div className="flex items-center text-green-300 mb-2 mt-2">
            <img src={check} alt="" width={20} />
            {/* <CheckCircle size={20} className="mr-2" fill="rgba(74, 222, 128, 0.2)" /> */}
            <span className="ml-1">{status}</span>
          </div>
          <p className="text-gray-400 text-center text-[12px] ">
            Crypto transferred out of Binance. Please contact the recipient platform for your transaction receipt.
          </p>
          <p className="text-color text-center text-[12px]">
            Why hasn't my withdrawal arrived?
          </p>
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-full h-px bg-gray-700 mt-3 mb-6"></div>
      
      {/* Transaction details */}
      <div className="px-4">
        <div className="flex justify-between ">
          <span className="text-gray-400 text-[14px]">Network</span>
          <span className="text-white text-[14px]">BSC</span>
        </div>
         
        <div className="flex justify-between  py-4 border-b border-gray-800">
          <span className="text-gray-400 text-[14px]">Address</span>
          <div className="flex items-center justify-end max-w-2xl">
            <span className="text-white text-right  font-normal w-[220px] break-all text-[14px]">{address}</span>
            <button 
              onClick={() => copyToClipboard(address, 'address')} 
              className="text-gray-400 ml-2 flex-shrink-0"
            >
              { <img src={copy} width={22} />}
            </button>
          </div>
        </div>
        
        <div className="flex justify-between py-2 border-b border-gray-800">
          <span className="text-gray-400 text-[14px]">Txid</span>
          <div className="flex items-center justify-end max-w-2xl">
          <span className="text-white text-right  font-normal w-[220px] underline  break-all text-[14px]">{txid}</span>
            {/* <a href="#" className="text-blue-400 text-right break-all">
              {txid}
            </a> */}
            <button 
              onClick={() => copyToClipboard(txid, 'txid')} 
              className="text-gray-400 ml-2 flex-shrink-0"
            >
              {<img src={copy} width={22} />}
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-gray-800">
          <span className="text-gray-400 text-[14px]">Amount</span>
          <span className="text-white text-[14px]"> {amount} {currency}</span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-gray-800">
          <span className="text-gray-400 text-[14px]">Network fee</span>
          <span className="text-white text-[14px]">1 USDT</span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-gray-800">
          <span className="text-gray-400 text-[14px]">Wallet</span>
          <span className="text-white text-[14px]">Spot Wallet</span>
        </div>
        
        <div className="flex justify-between items-center py-2 border-b border-gray-800">
          <span className="text-gray-400 text-[14px]">Date</span>
          <span className="text-white text-[14px]">{date}</span>
        </div>
      </div>
      
      {/* Bottom buttons */}
      <div className="absolute bottom-5 left-0 right-0 px-4 text-[14px]">
        <div className="flex justify-between gap-4">
          <button className="flex-1 fromColor text-white py-4 rounded-lg font-medium">
            Scam Report
          </button>
          <button className="flex-1 fromColor text-white py-4 rounded-lg font-medium">
            Save Address
          </button>
        </div>
      </div>
      
      {/* Bottom bar */}

    </div>
  );
}