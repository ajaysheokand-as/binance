import { ChevronDown, ArrowLeft, Clipboard, Maximize2, Info, User } from "lucide-react";
import { useState, useContext } from "react";
// import { Link } from "lucide-react";
import { Link } from "react-router-dom";
import withdrawpage from '../assets/withdrawpage.png'
import w from '../assets/w.png'
import info from '../assets/!.png'
import adown from '../assets/hel.jpg'
import cut from '../assets/x.png'
import  arrow from '../assets/arrow.jpg'
import { historyContext } from "../context/HistoryContextProvider";
export default function USDT() {
  const {totalValue ,address ,setAddress ,amount ,setAmount} = useContext(historyContext)
  const [showNetwork, setShowNetwork ] = useState(false)
  
  return (
    <div onClick={()=>{ showNetwork && setShowNetwork(false)}} className={`flex flex-col h-screen w-full max-w-md mx-auto text-gray-300 font-sans color ${showNetwork &&"nn" }`}>
      {/* Status Bar */}
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
       <Link to={"/selectCoin"}>   <img src={arrow} alt="" width={30} /></Link>
        <div className="text-xl font-semibold text-white">Send USDT</div>
        <div className="flex space-x-4">
          {/* <Clipboard size={20} />
          <Maximize2 size={20} /> */}
          <img src={withdrawpage} alt="" width={66} />
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-4 pt-2 flex flex-col space-y-4">
        {/* Address */}
        <div>
          <label className="text-sm text-gray-400">Address</label>
          <div className="mt-2 flex justify-between items-center fromColor rounded-xl">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Long press to paste"
              className="w-full p-3 bg-transparent text-gray-300 outline-none"
            />
            <div className="flex space-x-2 pr-3">
            <img src={w} alt="" width={66} />
            </div>
          </div>
        </div>

        {/* Network */}
        <div>
          <label className="text-sm text-gray-400 flex items-center">
            Network <img src={info} width={35} alt="" />
          </label>
         
          <div onClick={()=>{setShowNetwork(!showNetwork)}} className="mt-2 p-3 flex justify-between items-center fromColor rounded-xl cursor-pointer">
            <span className="text-gray-400">Automatically match the network</span>
            <img src={adown} width={40} alt="" />
          </div>
         
        </div>
          
        {/* Withdraw Amount */}
        <div>
          <label className="text-sm text-gray-400 flex items-center">
            Withdraw Amount <img src={info} width={35} alt="" />
          </label>
          <div className="mt-2 flex justify-between items-center fromColor rounded-xl">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Minimum 10"
              className="w-1/2 p-3 bg-transparent text-gray-300 outline-none"
            />
            <div className="flex items-center  space-x-2 pr-3">
               {
                amount && <img src={cut} alt=""  width={22} onClick={()=>{setAmount('')}} />
               }
              <span className="text-white">USDT</span>
              <button className="text-yellow-500 font-medium" onClick={()=>{setAmount(totalValue)}}>Max</button>
            </div>
          </div>
          {
            amount &&<span className="text-[12px] text-gray-400">≈ {amount} {" "} USD</span>
          } 
        </div>
        {/* Available Balance */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Available:</span>
          <div className="flex items-center">
            <span className="text-sm">{totalValue} USDT</span>
            <ChevronDown size={16} className="ml-1 text-gray-400" />
          </div>
        </div>

        {/* Warnings */}
        <div className="space-y-2 mt-4">
          <p className="text-xs text-gray-400">
            * Do not withdraw directly to a crowdfund or ICO. We will not credit your account with tokens from that sale.
          </p>
          <p className="text-xs text-gray-400 flex items-center">
            * Do not transact with Sanctioned Entities. 
            <span className="text-yellow-500 ml-1">Learn more</span>
          </p>
        </div>
      </div>
      {
            showNetwork && (
              <div className="px-4 py-2 color rounded-t-3xl  fixed right-0 left-0 bottom-0 z-10 myanim ">
              <div className="w-10 h-1 bg-gray-600 rounded-full mx-auto mb-6"></div>
              <h2 className="font-bold mb-4 text-xl">Choose Network</h2>
              
              {/* Network options */}
              <div className="space-y-4">
                {/* BNB Smart Chain */}
                <div className=" border assets rounded-xl p-4">
                  <h3 className="font-bold">BNB Smart Chain (BEP20)</h3>
                  <p className="text-gray-400 text-[12px]">Fee 0 USDT</p>
                  <p className="text-gray-400 text-[12px]">Minimum withdrawal 4 USDT</p>
                  <p className="text-gray-400 text-[12px]">Arrival time ≈ 1 mins</p>
                </div>
                
                {/* opBNB */}
                <div className="border assets rounded-xl p-4">
                  <h3 className=" font-bold">opBNB</h3>
                  <p className="text-gray-400 text-[12px] ">Fee 0 USDT</p>
                  <p className="text-gray-400 text-[12px] ">Minimum withdrawal 20 USDT</p>
                  <p className="text-gray-400 text-[12px] ">Arrival time ≈ 2 mins</p>
                </div>
                
                {/* Tron */}
                <div className="border assets rounded-xl p-4">
                  <h3 className="font-bold">Tron (TRC20)</h3>
                  <p className="text-gray-400 text-[12px]">Fee 1 USDT (≈ $1.00)</p>
                  <p className="text-gray-400 text-[12px]">Minimum withdrawal 10 USDT</p>
                  <p className="text-gray-400 text-[12px]">Arrival time ≈ 1 mins</p>
                </div>
                
                {/* Aptos */}
                <div className="border assets  rounded-xl p-4">
                  <h3 className=" font-bold">Aptos</h3>
                  <p className="text-gray-400 text-[12px]">Fee 0.01 USDT (≈ $0.0100000)</p>
                  <p className="text-gray-400 text-[12px]">Minimum withdrawal 10 USDT</p>
                  <p className="text-gray-400 text-[12px]">Arrival time ≈ 1 mins</p>
                </div>
                
                {/* Ethereum */}
                <div className="border assets rounded-xl p-4">
                  <h3 className="text-xl font-bold">Ethereum (ERC20)</h3>
                  <p className="text-gray-400">Fee 1.5 USDT (≈ $1.50)</p>
                </div>
               <div className="mb-13"></div>
              </div>
              
              {/* Warning message */}
              <div className=" fixed bottom-0 right-0 left-0 color bg-opacity-50 rounded-lg mt-6 flex">
                <div className="px-4 py-3 flex color ">
                <Info size={20} className="text-gray-400 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-[12px]">
                  Ensure the network matches the withdrawal address and the deposit platform support it, or assets may be lost
                </p>
                </div>
              </div>
            </div>
            )
           } 
      {/* Bottom Section */}
      <div className="p-4  border-t flex justify-between items-center assets">
        <div className="">
          <p className="text-sm text-gray-400">Receive amount</p>
          <p className="font-semibold "> {amount || "0.00"} USDT</p>
          <p className="text-sm text-gray-400"> <span className="underline underline-offset-3 decoration-dotted decoration-amber-100">Network fee</span> 0.00 USDT</p>
        </div>
        <Link to={'/confirmOrder'}>
        <button className={`px-6 py-2 rounded-md font-semibold btn-2 text-gray-900 ${amount? 'opacity-100' : ' opacity-55'}`}>
          Withdraw
        </button>
        </Link>
      </div>
    </div>
  );
}