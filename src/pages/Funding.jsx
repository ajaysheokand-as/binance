import React, { useState  ,useContext} from 'react';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';
import search from '../assets/search.png'
import eye from '../assets/eye.png'
import Exchange from "../assets/Exchange.jpg";
import lt from "../assets/lt.png";
import dol from "../assets/$.jpg";

import uss from "../assets/uss.jpg";
import { historyContext } from "../context/HistoryContextProvider";
import vv from "../assets/vv.jpg";
const Funding = () => {
  const [activeSection ,  setActiveSection] =  useState("Funding")
  const {totalValue} = useContext(historyContext)
  return (
    <div className="color text-white h-screen w-full max-w-md mx-auto flex flex-col">
      {/* Status Bar */}
      <img src={Exchange} alt="" />
      <div className="flex justify-start border-b-1 assets px-3  -mt-2 text-sm">
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
            <div className="text-3xl font-bold flex items-center ">
              {" "}
              <img src={dol} width={20} alt="" />{" "}
              <span className=" text-white">{Math.floor(totalValue * 100) / 100}</span>
            </div>
            <img src={uss} width={60} alt="" className="mt-2" />
          </div>
          <img src={vv} alt="" />
          <div className="flex  space-x-2 mb-4  ">
            <button className=" btn-2 text-black p-2 px-5  rounded-lg">
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
        </div>
      {/* Balances */}
      <div className="px-4 mt-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">Balances</div>
          <img src={search} width={20} alt="" />
          {/* <Search size={20} className="text-gray-400" /> */}
        </div>

        {/* USDT */}
        <div className="mt-4 flex justify-between">
          <div className="flex">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white">T</div>
            <div className="ml-3">
              <div className="flex items-center">
                <span className="font-medium">USDT</span>
              </div>
              <div className="text-sm text-gray-400">TetherUS</div>
            </div>
          </div>
          <div className="text-right">
            <div>0.00</div>
            <div className="text-sm text-gray-400 mt-1">
              <div>Available 0.00</div>
              <>Freeze 0.00</>
            </div>
          </div>
        </div>

        {/* BTC */}
        <div className="mt-4 flex justify-between">
          <div className="flex">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">₿</div>
            <div className="ml-3">
              <div className="flex items-center">
                <span className="font-medium">BTC</span>
              </div>
              <div className="text-sm text-gray-400">Bitcoin</div>
            </div>
          </div>
          <div className="text-right">
            <div>0.00</div>
            <div className="text-sm text-gray-400 mt-1">
              <div>Available 0.00</div>
              <div>Freeze 0.00</div>
            </div>
          </div>
        </div>

        {/* BNB */}
        <div className="mt-4 flex justify-between">
          <div className="flex">
            <div className="w-8 h-8 btn-2 rounded-full flex items-center justify-center text-white">B</div>
            <div className="ml-3">
              <div className="flex items-center">
                <span className="font-medium">BNB</span>
              </div>
              <div className="text-sm text-gray-400">BNB</div>
            </div>
          </div>
          <div className="text-right">
            <div>0.00</div>
            <div className="text-sm text-gray-400 mt-1">
              <div>Available 0.00</div>
              <div>Freeze 0.00</div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation */}
    <BottomNavigation/>
    </div>
  );
};

export default Funding;