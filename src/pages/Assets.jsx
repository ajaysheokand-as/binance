import React, { useState } from "react";
import {
  Home,
  BarChart2,
  Circle,
  FileText,
  Layers,
  Search,
  Settings,
  Bell,
  Eye,
  ChevronRight,
  ChevronDown,
  History,
} from "lucide-react";
import BottomNavigation from "../components/BottomNavigation";
import { Link } from "react-router-dom";
import search from '../assets/setting.png'
import eye from '../assets/eye.png'
import ustdIcon from '../assets/usdt.png'
import Exchange from '../assets/Exchange.jpg'
import dol from '../assets/$.jpg'
import dol2 from '../assets/dol2.jpg'
import lt from '../assets/lt.png'
import uss from '../assets/uss.jpg'
import yy from '../assets/yy.jpg'
import sss from '../assets/sss.jpg'
import send from '../assets/send.jpg'
import vv from '../assets/vv.jpg'
import notifications from '../assets/notification.png'
const Assets = () => {
  const [activeSection ,   setActiveSection ] =   useState("Overview")
  const [showImg  ,setShowImg] =useState(false)
   return (
    <div className={`flex flex-col max-w-md mx-auto h-screen color text-white font-sans`}>
      {/* Status Bar */}
      
      <img src={Exchange} alt=""   />
  

      {/* Sub Navigation */}
     
       <div className="flex justify-start border-b-1 assets px-3  -mt-2 text-sm">
          <Link 
          to={'/Assets'}
            className={`py-3 px-1 mr-4 font-bold text-[17px] ${activeSection === 'Overview' ? 'text-white font-medium  ' : 'text-gray-400'}`}
            onClick={() => setActiveSection('Overview')}
          >
            Overview
          </Link>
         
          <Link 
          to={'/spot'}
            className={`py-3 px-1 mr-4 font-bold text-[17px] ${activeSection === 'Spot' ? 'text-white font-medium ' : 'text-gray-400'}`}
            onClick={() => setActiveSection('Spot')}
          >
            Spot
          </Link>
          <Link 
          to={'/funding'}
            className={`py-3 px-1 mr-4 font-bold text-[17px] ${activeSection === 'Funding' ? 'text-white font-medium ' : 'text-gray-400'}`}
            onClick={() => setActiveSection('Funding')}
          >
            Funding
          </Link>
          <Link 
          to={'/futures'}
            className={`py-3 px-1 mr-4 font-bold text-[17px] ${activeSection === 'futures' ? 'text-white font-medium ' : 'text-gray-400'}`}
            onClick={() => setActiveSection('futures')}
          >
            Futures
          </Link>
        </div>

      {/* Balance Section */}
      <div className="px-4 py-1">
        <div className="flex items-center justify-between mb-2">
        <div className="flex items-center ml-1">
        <div className="text-gray-100 mr-2">Est. Total Value</div>
        {/* <Eye size={17} /> */}
        <img src={eye} alt="" width={30} />
        </div>

          <div className="flex gap-4 ">
            <img src={lt} alt="" width={22} />
          <Link to={'/withdrawal'}><svg width={20} class="bn-svg icon-active left-icon-pc sidebar-icon-size shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z" fill="currentColor"></path></svg> </Link>
          </div>
        </div>

        <div className="flex  gap-2 mb-2">
           <div className="text-3xl font-bold flex items-center "> <img src={dol} width={20}  alt="" /> <span className="">139.96</span></div>
            <img src={uss} width={60} alt="" className="mt-2" />
        </div> 
          <img src={vv} alt="" />
        

        {/* Action Buttons */}
        <div className="flex  space-x-2 mb-4  ">
          <button className=" bg-yellow-300 text-black p-2 px-5  rounded-lg">
            Add Funds
          </button>
          <button onClick={()=>{setShowImg(true)}} className="flex-1 fromColor text-white p-2 px-5 rounded-lg">
            Send
         {/* <Link to={'/CryptoWalletWithdraw'} className=" text-white">Send</Link>  */}
          </button>
          <button className="flex-1 fromColor text-white p-2 px-5 rounded-lg">
         <Link to={'/transfer'} className=" text-white">Transfer</Link> 
          </button>
        </div>
      {
        showImg && <Link to={'/selectCoin'}><img src={send} className="sendImg w-full" /></Link>
      }
      <div className="px-1">
      <div className="color mt-6 rounded-lg p-3 mb-2 border-1 assets">
          <div className="flex items-center  justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src={notifications} alt="" width={18} />
              <span className="text-[12px]">Crypto deposit 10.003 USDT</span>
            </div>
           <div className="flex items-center">
           <div className="flex items-center text-yellow-300">
              <span className="text-[12px]">Processing</span>
            </div>
              <ChevronRight size={14} color={'#424c5a'} className="ml-1 " />
           </div>
          </div>
          <div className="flex items-center  justify-between">
            <div className="flex items-center gap-2">
            <img src={notifications} alt="" width={18}  />
              <span className="text-[12px]">Crypto deposit 167.69849 TRX</span>
            </div>
            <div className="flex items-center">

            <div className="flex items-center text-green-500">
              <span className="text-[12px]">Complete</span>
            </div>
              <ChevronRight size={14} color={'#424c5a'} className="ml-1" />
          </div>
            </div>
        </div>
      </div>

        {/* Account Tabs */}
       
            <img src={yy} alt="" />
        {/* Asset List */}
        <div className="flex  justify-between px-2 mb-4 relative">
          <img src={sss} alt="" width={100} />
          <div className="text-right relative">
            <div className="relative">
              <div className="">139.96111239</div>
            </div>
            <div className="text-gray-400 text-[12px] flex items-center text-right absolute right-0 "> <img src={dol2} width={15} alt="" /> 139.96</div>
          </div>
      <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default Assets;
