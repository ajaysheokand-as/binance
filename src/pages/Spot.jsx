import { useContext, useState } from "react";
import BottomNavigation from "../components/BottomNavigation";
import { Link } from "react-router-dom";
import eye from "../assets/eye.png";
import Exchange from "../assets/Exchange.jpg";
import dol from "../assets/$.jpg";
import uss from "../assets/uss.jpg";
import vv from "../assets/vv.jpg";
import dol2 from '../assets/dol2.jpg'
import sss from '../assets/sss.jpg'
import  send from '../assets/send.jpg'
import  lowValue from '../assets/lowValue.jpg'
import { historyContext } from "../context/HistoryContextProvider";
export default function Spot() {
  const [activeSection, setActiveSection] = useState("Spot");
  const [activeSubSection, setActiveSubSection] = useState("Spot");
  const {totalValue} = useContext(historyContext)
const [showImg  ,setShowImg] =useState(false)
  return (
    <div onClick={()=>{showImg &&  setShowImg(false) }} className={`flex flex-col max-w-md mx-auto h-screen color text-white font-sans ${showImg && "nn" }`}>
      {/* Status Bar */}

      {/* Top Navigation */}
      <img src={Exchange} alt="" />

      {/* Main Content Area */}
      <div className="flex-1 color overflow-y-auto">
        {/* Secondary Navigation */}
        <div className="flex justify-start border-b-1 assets px-4  -mt-2 text-sm">
          <Link
            to={"/Assets"}
            className={`py-3 px-1 mr-4 font-bold text-[17px] ${
              activeSection === "Overview"
                ? "text-white font-medium  "
                : "text-gray-400"
            }`}
            onClick={() => setActiveSection("Overview")}
          >
            Overview
          </Link>

          <Link
            to={"/spot"}
            className={`py-3 px-1 mr-4 font-bold text-[17px] ${
              activeSection === "Spot"
                ? "text-white font-medium "
                : "text-gray-400"
            }`}
            onClick={() => setActiveSection("Spot")}
          >
            Spot
          </Link>
          <Link
            to={"/funding"}
            className={`py-3 px-1 mr-4 font-bold text-[17px] ${
              activeSection === "Funding"
                ? "text-white font-medium "
                : "text-gray-400"
            }`}
            onClick={() => setActiveSection("Funding")}
          >
            Funding
          </Link>
          <Link
            to={"/futures"}
            className={`py-3 px-1 mr-4 font-bold text-[17px] ${
              activeSection === "futures"
                ? "text-white font-medium "
                : "text-gray-400"
            }`}
            onClick={() => setActiveSection("futures")}
          >
            Futures
          </Link>
        </div>

        {/* Sub Navigation */}
        <div className="flex overflow-x-auto py-3 scrollbar-hide border-b border-gray-800 px-4 text-sm">
          <button
            className={`py-1 px-3 mr-3 whitespace-nowrap fromColor ${
              activeSubSection === "Spot" 
                ? "text-white font-medium color rounded-md"
                : "text-gray-400"
            }`}
            onClick={() => setActiveSubSection("Spot")}
          >
            Spot
          </button>
          <button
            className={`py-1 px-3 mr-3 whitespace-nowrap ${
              activeSubSection === "Cross Margin"
                ? "text-white font-medium bg-gray-800 rounded-md"
                : "text-gray-400"
            }`}
            onClick={() => setActiveSubSection("Cross Margin")}
          >
            Cross Margin
          </button>
          <button
            className={`py-1 px-3 mr-3 whitespace-nowrap ${
              activeSubSection === "Isolated Margin"
                ? "text-white font-medium bg-gray-800 rounded-md"
                : "text-gray-400"
            }`}
            onClick={() => setActiveSubSection("Isolated Margin")}
          >
            Isolated Margin
          </button>
        </div>

        {/* Account Value */}
        {/* <div className="px-4 py-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center ml-1">
              <div className="text-gray-100 mr-2">Est. Total Value</div>
             
              <img src={eye} alt="" width={30} />
            </div>

            <div className="flex gap-4 ">
              <img src={lt} alt="" width={22} />
              <Link to={"/withdrawal"} className="text-white">
                <svg
                  width={20}
                  class="bn-svg icon-active left-icon-pc sidebar-icon-size shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z"
                    fill="currentColor"
                  ></path>
                </svg>{" "}
              </Link>
            </div>
          </div>
          <div className="flex  gap-2 mb-2">
            <div className="text-3xl font-bold flex items-center">
              {" "}
              <img src={dol} width={20} alt="" />{" "}
              <span className=" text-white">{Math.floor(totalValue * 100) / 100}</span>
            </div>
            <img src={uss} width={60} alt="" className="mt-2" />
          </div>
          <img src={vv} alt="" />
          <div className="flex  space-x-2 mb-4  ">
            <button className=" bg-yellow-300 text-black p-2 px-5  rounded-lg">
              Add Funds
            </button>
            <button className="flex-1 fromColor text-white p-2 px-5 rounded-lg">
              <Link to={"/CryptoWalletWithdraw"} className=" text-white">
                Send
              </Link>
            </button>
            <button className="flex-1 fromColor text-white p-2 px-5 rounded-lg">
              <Link to={"/transfer"} className=" text-white">
                Transfer
              </Link>
            </button>
          </div>
        </div> */}
        <div className="px-4 py-1">

         <div className="flex items-center justify-between mb-2">
                <div className="flex items-center ml-1">
                <div className="text-gray-100 mr-2">Est. Total Value</div>
                {/* <Eye size={17} /> */}
                <img src={eye} alt="" width={30} />
                </div>
                  <div className="flex gap-4 ">
                    
                  <Link to={'/withdrawal'}><svg width={20} class="bn-svg icon-active left-icon-pc sidebar-icon-size shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z" fill="currentColor"></path></svg> </Link>
                  </div>
                </div>
        
                <div className="flex  gap-2 mb-2">
                   <div className="text-3xl font-bold flex items-center "> <img src={dol} width={20}  alt="" /> <span className="text-white">{Math.floor(totalValue * 100) / 100}</span></div>
                    <img src={uss} width={60} alt="" className="mt-2" />
                </div> 
                  <img src={vv} alt="" />
                
        
                {/* Action Buttons */}
                <div className="flex  space-x-2 mb-4  ">
                  <button className=" btn-2 text-black p-2 px-5  rounded-lg">
                    Add Funds
                  </button>
                  <button onClick={()=>{setShowImg(true)}} className="flex-1 fromColor text-white p-2 px-5 rounded-lg">
                    Send
                 
                  </button>
                  <button className="flex-1 fromColor text-white p-2 px-5 rounded-lg">
                 <Link to={'/transfer'} className=" text-white">Transfer</Link> 
                  </button>
                </div>
        </div>
          <img src={lowValue} alt="" />
        {/* Balances Section */}
        <div className="px-4 py-1">

         <div className="flex  justify-between px-2 mb-4 relative">
                  <img src={sss} alt="" width={100} />
                  <div className="text-right relative">
                    <div className="relative">
                      <div className="">{totalValue}</div>
                    </div>
                    <div className="text-gray-400 text-[12px] flex items-center text-right absolute right-0 "> <img src={dol2} width={15} alt="" /> {Math.floor(totalValue * 100) / 100}</div>
                  </div>
                </div>
                </div>
       
      </div>
            {
                  showImg && <Link to={'/selectCoin'}><img src={send} className="sendImg w-full" /></Link>
                }
      {/* Bottom Navigation */}
      <BottomNavigation />
      {/* <div className="bg-gray-900 border-t border-gray-800 py-2 px-2">
        <div className="grid grid-cols-5 text-center">
          <button className="flex flex-col items-center justify-center text-gray-400 text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </button>
          <button className="flex flex-col items-center justify-center text-gray-400 text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            Markets
          </button>
          <button className="flex flex-col items-center justify-center text-gray-400 text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Trade
          </button>
          <button className="flex flex-col items-center justify-center text-gray-400 text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Futures
          </button>
          <button className="flex flex-col items-center justify-center text-white text-xs">
            <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Assets
          </button>
        </div>
      </div> */}
    </div>
  );
}
