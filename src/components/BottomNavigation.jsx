import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BottomNavigation() {
  const [activeBottomTab, setActiveBottomTab] = useState("Home");
  const bottomTabs = ["Home", "Markets", "Trade", "Futures", "Assets"];
  // Custom SVG icons that match Binance exactly
  const bottomTabIcons = {
    Home: (
      <svg size="24" width={24} height={24} class="bn-svg icon-active left-icon-pc sidebar-icon-size shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 12v8h5.5v-6h5v6H20v-8l-8-8-8 8z" fill="currentColor"></path></svg>
    ),
    Markets: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17ZM21 19H3V5H21V19ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3Z"
          fill="currentColor"
        />
      </svg>
    ),
    Trade: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12V20H20V12H4ZM19 19H5V13H19V19ZM12 2L20 10H4L12 2ZM12 4.83L7.53 9H16.47L12 4.83Z"
          fill="currentColor"
        />
      </svg>
    ),
    Futures: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6H10V8H20V6ZM20 10H10V12H20V10ZM20 14H10V16H20V14ZM4 6H8V18H4V6ZM22 4H2V20H22V4Z"
          fill="currentColor"
        />
      </svg>
    ),
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
