import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import markit from "../assets/market.png"
import features from "../assets/features.png"
import lt from "../assets/lt.png"
export default function BottomNavigation() {
  const [activeBottomTab, setActiveBottomTab] = useState("Home");
  const bottomTabs = ["Home", "Markets", "Trade", "Futures", "Assets"];
  // Custom SVG icons that match Binance exactly
  const bottomTabIcons = {
    Home: (
      <svg size="24" width={24} height={24} class="bn-svg icon-active left-icon-pc sidebar-icon-size shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 12v8h5.5v-6h5v6H20v-8l-8-8-8 8z" fill="currentColor"></path></svg>
    ),
    Markets: ( <img src={markit} alt="" width={24} /> ),
    Trade: (<img src={lt} alt="" width={24} /> ),
    Futures: (<img src={features} alt="" width={24} />),
    Assets: (
      <svg size="24"  width={24}class="bn-svg icon-normal left-icon-pc sidebar-icon-size shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.5A4.5 4.5 0 018.5 4H20v16H8.5A4.5 4.5 0 014 15.5v-7zM8.5 7H17v3H8.5a1.5 1.5 0 110-3zm4.5 6h4v4h-4v-4z" fill="currentColor"></path></svg>
    ),
  };
  return (
    <>
      {/* Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto flex justify-around items-center p-3 bg-gray-900 border-t border-gray-800">
        {bottomTabs.map((tab) => (
          <NavLink
            key={tab}
            className="flex flex-col items-center"
            onClick={() => {
              setActiveBottomTab(tab);
            }}
            to={`/${tab}`}
          >
            <div
              className={
                activeBottomTab === tab ? "text-white" : "text-gray-500"
              }
            >
              {bottomTabIcons[tab]}
            </div>
            <span
              className={`text-xs mt-1 ${
                activeBottomTab === tab ? "text-white" : "text-gray-500"
              }`}
            >
              {tab}
            </span>
          </NavLink>
        ))}
      </div>
    </>
  );
}
